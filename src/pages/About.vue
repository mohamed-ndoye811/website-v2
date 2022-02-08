<template>
	<section class="flex flex-col gap-5 hero">
		<div class="heading relative col-span-6 h-auto flex flex-col gap-14">
			<div
				class="image grid place-content-center relative col-span-full translate-x-[-50%] z-0 mobile:scale-[.8] left-[57%] scale-[.9] xxs:bottom-10 mobile:top-[0.25rem]"
			>
				<div
					class="mask rounded-memoji overflow-hidden h-[18rem] w-[18rem] rotate-[-57.5deg] -mb-28 relative z-0"
				>
					<img
						class="z-10 drop-shadow-lg relative rotate-[40deg] bottom-[2rem] left-[-2.75rem] scale-[.8]"
						src="../assets/imgs/memojis/memoji-about.png"
						alt="memoji representing mohamed ndoye"
					/>
					<div
						class="background absolute bg-alternative/30 aspect-square h-[14rem] bottom-[0%] rounded-memoji z-0"
					></div>
				</div>
			</div>

			<div class="texts col-span-full relative z-10">
				<h2 class="col-span-6 uppercase drop-shadow-md">Who is Mohamed?</h2>
				<pre class="col-span-full p-0 font-normal">
I will start by avoiding mentioning me at the third person. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
interdum, ac aliquet odio mattis.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
interdum, ac aliquet odio mattis.</pre
				>
			</div>
		</div>
	</section>

	<section class="studies flex flex-col pt-[45%]">
		<h2>Where did I study?</h2>
		<p class="font-normal text-base mb-3">
			For that part let’s sort them by year
		</p>
		<div class="year-selector flex gap-4 relative">
			<div
				class=""
				id="underline"
				:style="{ left: underline.left, width: underline.width }"
			></div>
			<div
				class="box-content text-base text-alternative"
				v-for="(year, index) in yearsList"
				@click="yearSelected(year, $event)"
				:class="index == 1 ? yearSelected : ''"
			>
				{{ year }}
			</div>
		</div>

		<div class="studies-list flex flex-col gap-5 mt-3">
			<div class="study" v-for="study in studiesToDisplay">
				<div class="flex items-center justify-between gap-3">
					<div
						class="logo bg-primary-shadow aspect-square h-10 grid place-content-center rounded-md"
					>
						<img
							src="../assets/imgs/icons/book.svg"
							class="scale-[1.5]"
							alt=""
							v-if="study.organization.logo == ''"
						/>
					</div>
					<div class="texts text-base flex flex-col justify-between h-full">
						<div class="name font-semibold text-[.625rem] leading-[1]">
							{{ study.name }}
						</div>
						<div class="location text-[.625rem] font-medium text-alternative">
							{{ study.organization.name }} | {{ study.location }}
						</div>
						<div class="end mobile:hidden">
							finished in {{ study.end + " " + study.year }}
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="skills flex flex-col gap-[0.938rem] pt-[45%]">
		<h2>What skills do I master?</h2>
		<pre class="font-normal">
I will start by avoiding mentioning me at the third person. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
</pre
		>
		<div class="skills flex flex-wrap mx-auto gap-2 justify-center mt-5">
			<div class="skill" v-for="skill in skills">
				<div
					class="img aspect-square h-10 bg-primary-shadow grid place-content-center rounded-md"
				></div>
			</div>
		</div>
	</section>

	<section class="verse flex flex-col gap-[0.938rem] pt-[45%]">
		<h2>My double life</h2>
		<pre class="font-normal text-base">
You hear the music in the background? Well it is made by verse. 
And yes you guessed it, verse is me and I am verse.

Music is my second hobby, times to times I like to make few beats (instrumentals) on my free time 

If you liked the ones playing here, I leave a link to my socials under the name verse where you’ll hear more of them. 

See you there maybe!</pre
		>

		<div class="verse-socials relative">
			<ul
				class="flex justify-between text-alternative absolute top-[45%] left-[50%] w-full translate-x-[-50%] translate-y-[-50%] z-10"
			>
				<li>
					<a
						href="https://www.youtube.com/channel/UCI9bv50AJbaY8Li8SMuYikw"
						class="uppercase font-bold text-base"
						>youtube</a
					>
				</li>

				<li>
					<a
						href="https://www.instagram.com/verse811/?hl=en"
						class="uppercase font-bold text-base"
						>instagram</a
					>
				</li>

				<li>
					<a href="" class="uppercase font-bold text-base">spotify</a>
				</li>
			</ul>

			<img src="../assets/imgs/verse_logo.svg" alt="" class="mx-auto w-full" />
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			studiesToDisplay: [],
			underline: {
				left: 0 + "px",
				width: 1.75 + "rem",
			},
			studies: [
				{
					name: "FORMATION DÉVELOPPEUR WEB ET APPLICATIONS MOBILES",
					location: "Toulon",
					organization: { logo: "", name: "Greta du var" },
					end: "January",
					year: 2021,
				},
				{
					name: "FORMATION DÉVELOPPEUR WEB ET APPLICATIONS MOBILES",
					location: "Toulon",
					organization: { logo: "", name: "Greta du var" },
					end: "January",
					year: 2021,
				},
				{
					name: "FORMATION DÉVELOPPEUR WEB ET APPLICATIONS MOBILES",
					location: "Toulon",
					organization: { logo: "", name: "Greta du var" },
					end: "January",
					year: 2020,
				},
				{
					name: "FORMATION DÉVELOPPEUR WEB ET APPLICATIONS MOBILES",
					location: "Toulon",
					organization: { logo: "", name: "Greta du var" },
					end: "January",
					year: 2020,
				},
				{
					name: "FORMATION DÉVELOPPEUR WEB ET APPLICATIONS MOBILES",
					location: "Toulon",
					organization: { logo: "", name: "Greta du var" },
					end: "January",
					year: 2019,
				},
			],
			yearsList: [],
			skills: Array.from({ length: 8 }, (_, index) => index + 1),
		};
	},

	mounted: function () {
		this.studies.forEach((el) => {
			if (this.yearsList.indexOf(el.year) != -1) {
				return;
			}

			this.yearsList.push(el.year);
		});

		this.yearsList.sort((a, b) => {
			return a < b ? 1 : -1;
		});

		this.sortDisplayedStudies(this.yearsList[0]);
	},

	methods: {
		yearSelected(year, { target }) {
			this.underline.left = target.offsetLeft + "px";
			this.underline.width = target.offsetWidth + "px";
			this.sortDisplayedStudies(year);
		},

		sortDisplayedStudies(year) {
			this.studiesToDisplay = [];

			this.studies.forEach((el) => {
				if (el.year != year) {
					return;
				}

				this.studiesToDisplay.push(el);
			});
		},
	},
};
</script>

<style>
h2 {
	@apply uppercase col-span-full;
}

.year-selector {
	height: fit-content;
}

.check-box {
	height: fit-content;
}

#underline {
	@apply bg-alternative rounded-full;
	position: absolute;
	width: 2.25rem;
	height: 0.125rem;
	bottom: -0.05rem;
	transition-property: left, width;
	transition-timing-function: cubic-bezier(0.53, 0, 0.19, 1);
	transition-duration: 0.8s;
}
</style>
