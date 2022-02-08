<template>
	<div
		class="menu fixed left-0 top-0 z-[49] w-[100vw] h-[100vh] grid place-content-center"
	>
		<nav class="relative z-10">
			<ul class="flex flex-col items-center gap-7">
				<li v-for="link in nav" class="font-heading text-title uppercase">
					<router-link :to="link.path" @click="close">{{ link.name }}</router-link>
				</li>
			</ul>
		</nav>
		<div
			class="backdrop w-full h-full absolute bg-primary-shadow z-0"
			@click="close"
		></div>
	</div>
</template>

<script>
import { routes } from "../router/index";

export default {
	name: "Menu",
	data() {
		return {
			test: "Hello",
			nav: routes,
		};
	},
	methods: {
		close() {
			this.$emit("close");
		},
	},
};
</script>
