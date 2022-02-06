<template>
	<header>
		<h1>mohamed ndoye</h1>

		<div class="menu-but">menu</div>
	</header>
	<Menu></Menu>
</template>

<script>
import Menu from "./Menu.vue";

export default {
	name: "Header",
	components: { Menu },
};
</script>
