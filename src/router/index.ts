import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Index from '../views/Index.vue'
import Play from '../views/Play.vue'
import About from '../views/About.vue'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		component: Index,
	},
	{
		path: '/play',
		component: Play,
	},
	{
		path: '/about',
		component: About,
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router