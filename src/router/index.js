import { createRouter, createWebHistory } from "vue-router";

// Pages import
import Home from "../pages/Home.vue";
import Projects from "../pages/Projects.vue";
import Project from "../pages/Projects/Project.vue"; // Project details page
import About from "../pages/About.vue";
import Test from "../pages/Test.vue";

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
	{
		path: "/projects/:id",
		name: "Project details",
		component: Project,
	},
	{
		path: "/tests",
		name: "Test",
		component: Test,
	},
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		console.log(to.hash);
		return { top: 0 };
	},
});
