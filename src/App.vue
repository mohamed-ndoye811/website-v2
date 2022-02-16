<template>
	<!-- <Loader @playMusic="music"></Loader> -->
	<Header></Header>
	<PlayerControls
		@musicUpdate="music"
		:player-state="bgMusic.state"
	></PlayerControls>
	<div class="container w-[92.1875%] mx-auto font-body relative h-full pt-10">
		<router-view></router-view>
	</div>
	<Footer></Footer>
</template>

<script>
import { Howl } from "howler";

// Components
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Loader from "./components/Loader.vue";
import PlayerControls from "./components/PlayerControls.vue";

var Player = function (playlist) {
	this.playlist = playlist;
	this.index = 0;

	// Display the title of the first track.
	// track.innerHTML = "1. " + playlist[0].title;

	// Setup the playlist display.
	// playlist.forEach(function (song) {
	// 	var div = document.createElement("div");
	// 	div.className = "list-song";
	// 	div.innerHTML = song.title;
	// 	div.onclick = function () {
	// 		player.skipTo(playlist.indexOf(song));
	// 	};
	// 	list.appendChild(div);
	// });
};

Player.prototype = {
	/**
	 * Play a song in the playlist.
	 * @param  {Number} index Index of the song in the playlist (leave empty to play the first or current).
	 */
	play: function (index) {
		var self = this;
		var sound;

		index = typeof index === "number" ? index : self.index;
		var data = self.playlist[index];

		// If we already loaded this track, use the current one.
		// Otherwise, setup and load a new Howl.
		if (data.howl) {
			sound = data.howl;
		} else {
			sound = data.howl = new Howl({
				src: [data.file],
				html5: true, // Force to HTML5 so that the audio can stream in (best for large files).
				onend: function () {
					self.skip("next");
				},
			});
		}

		// Begin playing the sound.
		sound.play();

		// Update the track display.
		// track.innerHTML = index + 1 + ". " + data.title;

		// Keep track of the index we are currently playing.
		self.index = index;
	},

	/**
	 * Pause the currently playing track.
	 */
	pause: function () {
		var self = this;

		// Get the Howl we want to manipulate.
		var sound = self.playlist[self.index].howl;

		// Puase the sound.
		sound.pause();
	},

	/**
	 * Skip to the next or previous track.
	 * @param  {String} direction 'next' or 'prev'.
	 */
	skip: function (direction) {
		var self = this;

		// Get the next track based on the direction of the track.
		var index = 0;
		if (direction === "prev") {
			index = self.index - 1;
			if (index < 0) {
				index = self.playlist.length - 1;
			}
		} else {
			index = self.index + 1;
			if (index >= self.playlist.length) {
				index = 0;
			}
		}

		self.skipTo(index);
	},

	/**
	 * Skip to a specific track based on its playlist index.
	 * @param  {Number} index Index in the playlist.
	 */
	skipTo: function (index) {
		var self = this;

		// Stop the current track.
		if (self.playlist[self.index].howl) {
			self.playlist[self.index].howl.stop();
		}

		// Reset progress.
		// progress.style.width = "0%";

		// Play the new track.
		self.play(index);
	},
};

export default {
	components: {
		Header,
		Footer,
		Loader,
		PlayerControls,
	},

	data() {
		return {
			bgMusic: {
				player: "",
				state: "",
				id: "",
				playedOnce: false,
			},
			musicState: "",
		};
	},

	mounted() {
		const audioFiles = import.meta.glob("../public/assets/musics/*.mp3");
		var playlist = [];

		for (let key in audioFiles) {
			playlist.push({
				title: "Can i get a euuuhhhhh ft. Komplex",
				file: key,
				howl: null,
			});
		}

		console.log(playlist);
		this.bgMusic.player = new Player(playlist);
	},

	methods: {
		music({ command, direction }) {
			switch (command) {
				case "play":
					this.bgMusic.player.play();
					this.bgMusic.state = "playing";
					break;

				case "pause":
					this.bgMusic.player.pause();
					this.bgMusic.state = "paused";
					break;

				case "skip":
					this.bgMusic.player.skip(direction);
					break;

				default:
					console.log("Error comand not found");
					break;
			}
		},
		togglePlayerState(state) {
			this.bgMusic.state = state;
		},
	},
};
</script>

<style></style>
