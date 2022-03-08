import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Index from '../views/Index.vue'
import Play from '../views/Play.vue'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		component: Index,
	},
	{
		path: '/play',
		component: Play,
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router