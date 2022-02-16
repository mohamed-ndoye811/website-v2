<template>
	<div
		class="player flex mx-auto fixed left-[3.8125%] bottom-[4px] z-50 scale-[.8]"
	>
		<img
			:src="icons.change"
			alt="previous song icon"
			class="rotate-180"
			@click="$emit('musicUpdate', { command: 'skip', direction: 'prev' })"
		/>
		<img
			:src="playerState == 'playing' ? icons.pause : icons.play"
			alt="play"
			@click="
				playerState == 'playing'
					? $emit('musicUpdate', { command: 'pause' })
					: $emit('musicUpdate', { command: 'play' })
			"
		/>
		<img
			:src="icons.change"
			alt="next song icon"
			@click="$emit('musicUpdate', { command: 'skip', direction: 'next' })"
		/>
	</div>
</template>

<script>
export default {
	data() {
		return {
			icons: {
				play: "/assets/imgs/icons/player/play.svg",
				change: "/assets/imgs/icons/player/change.svg",
				pause: "/assets/imgs/icons/player/pause.svg",
			},
		};
	},

	props: {
		playerState: String,
	},

	watch: {
		playerState: function (newVal, oldVal) {
			console.log(newVal, oldVal);
		},
	},
};
</script>

<style scoped></style>
