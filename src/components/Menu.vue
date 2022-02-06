<template>
	<nav>
		<ul>
			<li v-for="link in nav">
				<router-link :to="link.path">{{ link.name }}</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
import { routes } from "../router/index";

export default {
	name: "Menu",
	data() {
		return {
			test: "Hello",
			nav: routes,
		};
	},
};
</script>
