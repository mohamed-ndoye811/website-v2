<template>
	<footer
		class="flex justify-between items-center bg-primary-shadow absolute bottom-0 w-full left-0 text-base font-body h-8 pt-1 px-1"
	>
		<div class="copyright text-[0.6rem] font-medium text-alternative">
			© 2022 ~ mohamed ndoye
		</div>
		<div class="socials">
			<ul class="flex gap-2">
				<li v-for="social in socials">
					<a :href="social.link">
						<img :src="social.icon" :alt="social.name" class="scale-[.8]" />
					</a>
				</li>
			</ul>
		</div>
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
					icon: "./assets/imgs/icons/linkedin.svg",
				},
				{
					name: "Instagram",
					link: "https://www.instagram.com/mohamed_ndoye811/?hl=en",
					icon: "./assets/imgs/icons/instagram.svg",
				},
			],
		};
	},
};
</script>
