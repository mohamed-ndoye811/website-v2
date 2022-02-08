<template>
	<Header></Header>
	<div
		class="container w-[90.625%] mx-auto font-body relative px-[.25rem] h-full"
	>
		<router-view></router-view>
	</div>
	<Footer></Footer>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<style></style>
