<template>
	<section class="flex flex-col gap-5 mb-6">
		<div class="carousel w-full">
			<div
				class="image bg-primary-shadow w-full aspect-[16/9] rounded-lg"
			></div>
			<div class="selector flex gap-2 mx-auto justify-center mt-3">
				<span
					v-for="(select, index) in carousel.selects"
					class="cursor block aspect-square bg-alternative/30 h-2 rounded-full"
					:class="{ active: carousel.selectedImg === index }"
					@click="changeImage(index)"
				></span>
			</div>
		</div>
		<div class="flex flex-col gap-0">
			<h2>Client {{ $route.params.id }}</h2>
			<a href="" class="-mt-[0.125rem] text-base text-alternative font-medium">
				visit the website
			</a>
		</div>
	</section>

	<section class="flex flex-col gap-5">
		<div class="flex flex-col gap-0">
			<h3 class="font-body font-bold text-[.825rem]">Project description</h3>
			<pre class="font-normal">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.

Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus. </pre
			>
		</div>
	</section>

	<section class="flex flex-col gap-5">
		<div class="flex flex-col">
			<h3 class="font-body font-bold text-[.825rem] mb-1">Design process</h3>
			<div class="color-palette flex flex-wrap gap-2 mb-2">
				<div
					v-for="color in colors"
					class="color grow rounded-md px-[0.625rem] py-[0.625rem] shadow-md"
					:style="{ background: color.hex }"
				>
					<p class="drop-shadow-xl">{{ color.hex }}</p>
					<p class="drop-shadow-xl">{{ color.name }}</p>
				</div>
			</div>
			<pre class="font-normal">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.

Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus. </pre
			>
		</div>
	</section>

	<section class="flex flex-col gap-5">
		<div class="flex flex-col gap-0">
			<h3 class="font-body font-bold text-[.825rem]">
				Stack / Technologies used
			</h3>
			<div class="stack flex gap-2 mx-auto justify-center my-3 flex-wrap">
				<span
					v-for="(tech, index) in technologies"
					class="cursor block aspect-square bg-primary-shadow h-10 rounded-md"
				></span>
			</div>
			<pre class="font-normal">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.

Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus. </pre
			>
		</div>
	</section>

	<div class="buttons flex flex-col gap-3 mt-5 mb-10">
		<router-link to="/projects" class="button"
			>back to all projects</router-link
		>
		<router-link
			:to="{ name: 'Project details', params: { id: ++$route.params.id } }"
			class="button"
			>to the next project</router-link
		>
	</div>
</template>

<script>
export default {
	data() {
		return {
			carousel: {
				selects: Array.from({ length: 4 }, (_, index) => index + 1),
				selectedImg: 0,
			},
			colors: [
				{
					name: "Color name",
					hex: "#506AA7",
				},
				{
					name: "Color name",
					hex: "#506AA7",
				},
				{
					name: "Color name",
					hex: "#506AA7",
				},
			],
			technologies: Array.from({ length: 8 }, (_, index) => index + 1),
		};
	},

	methods: {
		changeImage(imgIndex) {
			// Change cursor
			this.carousel.selectedImg = imgIndex;
		},
	},
};
</script>

<style scoped>
.cursor.active {
	@apply bg-alternative;
}

section {
	min-height: unset;
	height: fit-content;
}

section:not(:first-of-type, :last-of-type) {
	margin-bottom: 4.688rem;
}
</style>
