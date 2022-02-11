<template>
	<section class="flex flex-col gap-5">
		<h2 class="uppercase">here’s all my projects</h2>
		<transition-group
			appear
			tag="div"
			@before-enter="beforeEnter"
			@enter="enter"
			class="projects-list col-span-6 flex flex-col gap-[3rem] mb-[5rem]"
		>
			<div
				class="project-item flex odd:flex-row-reverse relative"
				v-for="(project, index) in projects"
				:key="index"
				:data-index="index"
			>
				<router-link
					:to="{ name: 'Project details', params: { id: project.id } }"
				>
					<div
						class="img aspect-[16/9] h-28 bg-primary-shadow rounded-lg"
					></div>
					<div
						class="texts text-alternative absolute flex flex-col -mt-14"
						:class="index % 2 == 0 ? 'left-0' : 'right-0'"
					>
						<h3
							class="font-body uppercase text-alternative font-extrabold -mb-1"
						>
							{{ project.name }}
						</h3>
						<p class="font-medium">{{ project.desc }}</p>
					</div>
				</router-link>
			</div>
		</transition-group>
	</section>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
	setup() {
		const projects = [
			{
				name: "Client name",
				desc: "Short description of the project",
				id: 1,
			},
			{
				name: "Client name",
				desc: "Short description of the project",
				id: 2,
			},
			{
				name: "Client name",
				desc: "Short description of the project",
				id: 3,
			},
			{
				name: "Client name",
				desc: "Short description of the project",
				id: 4,
			},
			{
				name: "Client name",
				desc: "Short description of the project",
				id: 1,
			},
			{
				name: "Client name",
				desc: "Short description of the project",
				id: 2,
			},
			{
				name: "Client name",
				desc: "Short description of the project",
				id: 3,
			},
			{
				name: "Client name",
				desc: "Short description of the project",
				id: 4,
			},
		];

		const beforeEnter = (el) => {
			el.style.opacity = 0;
		};

		const enter = (el) => {
			let enterAnimation = gsap.timeline();
			let leaveAnimation = gsap.timeline();
			let enterBackAnimation = gsap.timeline();
			let leaveBackAnimation = gsap.timeline();

			enterAnimation
				.fromTo(
					el,
					{ opacity: 0, y: "5rem" },
					{
						duration: 2.2,
						ease: "power4.out",
						opacity: 1,
						y: 0,
						immediateRender: false,
					}
				)
				.pause();

			enterBackAnimation
				.fromTo(
					el,
					{ opacity: 0, y: "-5rem" },
					{
						duration: 2.2,
						ease: "power4.out",
						opacity: 1,
						y: 0,
						immediateRender: false,
					}
				)
				.pause();

			leaveBackAnimation
				.fromTo(
					el,
					{ opacity: 1, y: 0 },
					{
						duration: 0.8,
						ease: "power4.inOut",
						opacity: 0,
						y: "5rem",
						immediateRender: false,
					}
				)
				.pause();

			leaveAnimation
				.fromTo(
					el,
					{ opacity: 1, y: 0 },
					{
						duration: 0.8,
						ease: "power4.inOut",
						opacity: 0,
						y: "-5rem",
						immediateRender: false,
					}
				)
				.pause();

			ScrollTrigger.create({
				trigger: el,
				start: "top 90%",
				end: "bottom 5%",
				onEnter: () => {
					enterAnimation.play(0);
				},

				onEnterBack: () => {
					enterBackAnimation.play(0);
				},

				onLeave: () => {
					leaveAnimation.play(0);
				},

				onLeaveBack: () => {
					leaveBackAnimation.play(0);
				},

				markers: false,
			});
		};

		return { beforeEnter, enter, projects };
	},
};
</script>
