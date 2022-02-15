<template>
	<div
		class="menu fixed left-0 top-0 z-[49] w-[100vw] h-[100vh] grid place-content-center pointer-events-none"
	>
		<nav class="relative z-10">
			<ul class="flex flex-col items-center gap-7">
				<li
					v-for="link in nav"
					class="font-heading text-title uppercase overflow-hidden"
				>
					<router-link
						class="navLink relative top-[2rem] pointer-events-auto"
						:to="link.path"
						@click="close"
						:class="{
							hidden: link.name == 'Project details' || link.name == 'Test',
						}"
						>{{ link.name }}</router-link
					>
				</li>
			</ul>
		</nav>
		<div
			class="backdrop w-full h-full bg-primary-shadow absolute z-0 -top-full pointer-events-auto"
			@click="close"
		></div>
	</div>
</template>

<script>
import { routes } from "../router/index";
import gsap from "gsap";

export default {
	name: "Menu",

	data() {
		return {
			nav: routes,
			animations: {
				backdropAnimation: null,
			},
		};
	},
	props: {
		menuState: Boolean,
	},
	watch: {
		menuState: function (newVal, oldVal) {
			if (newVal) {
				gsap.to(".backdrop", {
					top: "0",
					duration: 1.4,
					ease: "power4.out",
				});

				gsap.to(".navLink", {
					top: "1px",
					duration: 1.4,
					ease: "power4.out",
					stagger: 0.1,
				});
				return;
			}
			gsap.to(".navLink", {
				top: "2rem",
				duration: 0.6,
				ease: "power4.inOut",
				stagger: -0.1,
			});
			gsap.to(".backdrop", {
				top: "-100%",
				duration: 1.4,
				ease: "power4.inOut",
			});
		},
	},

	methods: {
		close() {
			this.$emit("close");
		},
	},
};
</script>

<style scoped lang="scss">
li {
	height: fit-content;
}
</style>
