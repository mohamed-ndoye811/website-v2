import { createRouter, createWebHistory } from "vue-router";

// Pages import
import Home from "/src/pages/Home.vue";
import Projects from "../pages/Projects.vue";
import About from "../pages/About.vue";

export const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/about",
		name: "About",
		component: About,
	},
	{
		path: "/projects",
		name: "Projects",
		component: Projects,
	},
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
