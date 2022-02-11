<template>
	<div class="box a"></div>
	<div class="box b"></div>
	<div class="box c"></div>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
	mounted() {
		gsap.fromTo(
			".c",
			{
				y: "5rem",
			},
			{
				scrollTrigger: {
					trigger: ".c",
					toggleActions: "restart pause reverse pause",
				},
				y: 0,
				opacity: 1,
				duration: 2.2,
				ease: "power4.inOut",
			}
		);
	},
};
</script>

<style>
.box {
	@apply bg-alternative h-14 aspect-square relative;
}

.box {
	margin-bottom: 40rem;
}
</style>
