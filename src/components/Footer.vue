<template>
	<footer
		class="flex items-center left-0 text-base font-body h-10 relative overflow-hidden"
	>
		<div
			class="content w-full flex justify-between items-center mx-auto px-[7.8125%]"
		>
			<div class="copyright text-[.75rem] font-medium text-alternative"></div>
			<div class="socials">
				<ul class="flex gap-2">
					<li v-for="social in socials">
						<a :href="social.link">
							<img :src="social.icon" :alt="social.name" class="scale-[.8]" />
						</a>
					</li>
				</ul>
			</div>
		</div>

		<div
			class="footer-bg bg-primary-shadow h-full w-[150vw] top-0 absolute z-[-1] translate-x-[-25%]"
		></div>
	</footer>
</template>

<script>
export default {
	data() {
		return {
			socials: [
				{
					name: "LinkedIn",
					link: "https://www.linkedin.com/in/mohamed-ndoye-4687a1189/",
					icon: "/assets/imgs/icons/linkedin.svg",
				},
				{
					name: "Instagram",
					link: "https://www.instagram.com/mohamed_ndoye811/?hl=en",
					icon: "/assets/imgs/icons/instagram.svg",
				},
			],
		};
	},
};
</script>
