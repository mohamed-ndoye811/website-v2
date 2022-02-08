<template>
	<section class="hero mb-4 pt-[30%]">
		<div class="heading relative col-span-6 h-auto flex flex-col gap-7">
			<div
				class="image grid place-content-center relative col-span-full translate-x-[-50%] z-0 mobile:scale-[.7] left-[65%] scale-[.9] xxs:bottom-10 mobile:top-[0.25rem]"
			>
				<div
					class="mask rounded-memoji overflow-hidden h-[22rem] w-[22rem] rotate-[-45deg] -mb-28 relative z-0"
				>
					<img
						class="z-10 drop-shadow-lg relative rotate-[35deg] top-[-3rem] left-[-3.15rem] scale-[.8]"
						src="../assets/imgs/memojis/memoji-hero.png"
						alt="memoji representing mohamed ndoye"
					/>
					<div
						class="background absolute bg-alternative/30 aspect-square h-[15.6rem] bottom-[20%] rounded-memoji z-0"
					></div>
				</div>
			</div>

			<div class="texts col-span-full relative z-10">
				<h2 class="col-span-6">
					WELCOME <br />
					TO MY WEBSITE
				</h2>
				<p class="col-span-full">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
					vulputate libero et velit interdum, ac aliquet odio mattis.
				</p>
			</div>
		</div>
	</section>

	<section class="projects-preview mb-8">
		<h2 class="col-span-6 uppercase mb-5">have a look at my projects</h2>
		<div class="projects-list col-span-6 flex flex-col gap-7">
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
		<router-link
			to="/projects"
			class="col-span-6 mx-auto bg-alternative text-primary-shadow font-semibold rounded-full px-10 mt-7 py-[0.188rem] text-base"
			>See all projects</router-link
		>
	</section>

	<section class="contact pt-[3.5rem]">
		<div class="heading relative col-span-6 h-auto">
			<h2 class="relative uppercase z-10 top-[5rem]">
				Want <br />to get <br />
				in Touch?
			</h2>
			<div
				class="image grid place-content-center absolute col-span-full -top-0 translate-y-[-50%] translate-x-[-50%] z-0 scale-[.55] left-[70%]"
			>
				<div
					class="mask rounded-memoji overflow-hidden h-[22rem] w-[22rem] rotate-[-45deg] -mb-28 relative z-0"
				>
					<img
						class="z-10 drop-shadow-lg relative rotate-[55deg] top-[4rem] left-[-3.15rem] scale-[.9]"
						src="../assets/imgs/memojis/memoji-contact.png"
						alt="memoji representing mohamed ndoye"
					/>
					<div
						class="background absolute bg-alternative/30 aspect-square h-[15.6rem] bottom-0 rounded-memoji z-0"
					></div>
				</div>
			</div>
		</div>
		<form action="" class="col-span-full text-base">
			<fieldset class="flex flex-col gap-2">
				<legend class="mb-1 font-medium">Leave a message</legend>
				<input
					type="text"
					id="name"
					name="name"
					placeholder="Name"
					class="w-full rounded-md h-8 bg-primary-shadow text-alternative placeholder:text-alternative px-2 py-1 font-medium"
				/>
				<input
					type="text"
					id="subject"
					name="subject"
					placeholder="Subject"
					class="w-full rounded-md h-8 bg-primary-shadow text-alternative placeholder:text-alternative px-2 py-1 font-medium"
				/>
				<textarea
					name="message"
					id="message"
					placeholder="Message"
					cols="30"
					rows="7"
					class="w-full appearance-none rounded-md bg-primary-shadow resize-none text-alternative placeholder:text-alternative px-2 py-1 font-medium"
				></textarea>
				<input type="button" value="Send" />
			</fieldset>
		</form>
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

<style lang="scss">
.projects-list {
	.project-item {
		&:nth-child(odd) {
			.texts {
				position: absolute;
				left: 0;
			}
		}

		&:nth-child(even) {
			.texts {
				position: absolute;
				right: 0;
			}
		}

		.texts {
			bottom: 1rem;
		}
	}
}
</style>
