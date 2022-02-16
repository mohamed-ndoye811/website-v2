<template>
	<div
		class="loader bg-primary-default h-full w-full fixed top-0 left-0 z-[99999] grid place-content-center"
		v-if="!questionAnswered"
	>
		<div class="w-full flex flex-col">
			<h2 class="text-center">Want to hear some background music?</h2>
			<div class="buttons mx-auto flex gap-5 text-base font-body mt-5">
				<button class="uppercase font-medium" @click="playMusic('play')">
					Yes
				</button>
				<button class="uppercase font-medium" @click="playMusic('pause')">
					No
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			questionAnswered: false,
		};
	},
	methods: {
		playMusic(state) {
			this.questionAnswered = true;
			this.$emit("playMusic", state);
		},
	},
};
</script>
