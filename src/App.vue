<template>
	<Loader @playMusic="music"></Loader>
	<Header></Header>
	<div class="container w-[92.1875%] mx-auto font-body relative h-full pt-10">
		<router-view></router-view>
	</div>
	<Footer></Footer>
</template>

<script>
import { Howl, Howler } from "howler";

// Components
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Loader from "./components/Loader.vue";

export default {
	components: {
		Header,
		Footer,
		Loader,
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
		// const sound = new Howl({
		// 	src: ["src/assets/musics/background_1.mp3"],
		// 	loop: true,
		// 	onplay: (test) => {
		// 		if (!this.bgMusic.playedOnce) {
		// 			this.bgMusic.id = test;
		// 			this.bgMusic.playedOnce = true;
		// 		}
		// 	},
		// // });
		// Howler.volume(0.7);
		// this.bgMusic.player = sound;
	},

	methods: {
		music(command) {
			let player, id;
			({ player, id } = this.bgMusic);
			console.log(this.bgMusic.player);
			switch (command) {
				case "play":
					if (!this.bgMusic.playedOnce) {
						player.play();
						this.bgMusic.state = "playing";
						break;
					}

					console.log(id);

					player.play(id);

					break;

				case "pause":
					if (this.bgMusic.state == "playing") {
						player.pause();
						this.bgMusic.state = "paused";
					}
					break;

				default:
					console.log("Error comand not found");
					break;
			}
		},
	},
};
</script>

<style></style>
