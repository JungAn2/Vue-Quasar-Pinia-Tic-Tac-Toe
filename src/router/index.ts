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
	history: createWebHistory(),
	routes
})

export default router