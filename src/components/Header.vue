<template>
	<header
		class="flex justify-between text-base fixed top-[0.825rem] left-0 w-full z-50 px-[7.8125%] mx-auto"
	>
		<router-link
			to="/"
			class="font-body font-semibold"
			@click="toggleMenu(false)"
		>
			mohamed ndoye.
		</router-link>

		<div
			class="menu-button font-body font-semibold select-none"
			@click="toggleMenu()"
		>
			menu
		</div>
	</header>

	<Menu :menu-state="showMenu" @close="toggleMenu"></Menu>
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
		toggleMenu: function (value = !this.showMenu) {
			console.log(value);
			this.showMenu = value;
		},
	},
};
</script>
