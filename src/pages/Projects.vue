<template>
	<section class="flex flex-col gap-5">
		<h2 class="uppercase">here’s all my projects</h2>
		<div class="projects-list col-span-6 flex flex-col gap-[3rem] mb-[5rem]">
			<div
				class="project-item flex odd:flex-row-reverse relative"
				v-for="project in projects"
			>
				<div class="img aspect-[16/9] h-28 bg-primary-shadow rounded-lg"></div>
				<div class="texts text-alternative flex flex-col">
					<h3 class="font-body uppercase text-alternative font-extrabold -mb-1">
						{{ project.name }}
					</h3>
					<p class="font-medium">{{ project.desc }}</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			projects: [
				{ name: "Client name", desc: "Short description of the project" },
				{ name: "Client name", desc: "Short description of the project" },
				{ name: "Client name", desc: "Short description of the project" },
				{ name: "Client name", desc: "Short description of the project" },
			],
		};
	},
};
</script>
