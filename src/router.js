import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('./pages/Home.vue'),
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('./pages/About.vue'),
	},
];

const router = createRouter({
	routes,
	history: createWebHistory(),
});

export default router;
