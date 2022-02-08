<template>
	<footer
		class="flex items-center left-0 text-base font-body h-8 pt-1 px-1 relative overflow-hidden"
	>
		<div
			class="content w-full flex justify-between items-center mx-auto mobile:px-[7px]"
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
		</div>

		<div
			class="footer-bg bg-primary-shadow h-full w-[150vw] top-0 absolute z-[-1] translate-x-[-25%]"
		></div>
	</footer>
</template>

<script>
import instagramLogo from "../../public/assets/imgs/icons/instagram.svg";
import linkedInLogo from "../../public/assets/imgs/icons/linkedin.svg";

export default {
	data() {
		return {
			socials: [
				{
					name: "LinkedIn",
					link: "https://www.linkedin.com/in/mohamed-ndoye-4687a1189/",
					icon: linkedInLogo,
				},
				{
					name: "Instagram",
					link: "https://www.instagram.com/mohamed_ndoye811/?hl=en",
					icon: instagramLogo,
				},
			],
		};
	},
};
</script>
