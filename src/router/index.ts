import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Index from '../views/Index.vue'
import Game from '../views/Game.vue'
import About from '../views/About.vue'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		component: Index,
	},
	{
		path: '/game',
		component: Game,
	},
	{
		path: '/about',
		component: About,
	}
]

const router = createRouter({
	//Base imported from vite config ts
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
})

export default router