<template>
	<header
		class="flex justify-between text-base fixed top-[0.625rem] left-0 w-full z-50 px-[1.9rem] mx-auto"
	>
		<router-link to="/" class="font-body font-semibold"
			>mohamed ndoye.</router-link
		>

		<div class="menu-button font-body font-semibold" @click="toggleMenu">
			menu
		</div>
	</header>

	<Menu v-if="showMenu" @close="toggleMenu"></Menu>
</template>

<script>
import Menu from "./Menu.vue";

export default {
	name: "Header",
	components: { Menu },
	data() {
		return {
			showMenu: false,
		};
	},

	methods: {
		toggleMenu() {
			this.showMenu = !this.showMenu;
		},
	},
};
</script>
