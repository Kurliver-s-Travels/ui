import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '../pages/MainPage.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Main',
		component: MainPage,
	},
	{
		path: '/managing',
		name: 'ManagingPaper',
		component: function () {
			return import('../pages/ManagingPaperPage.vue');
		},
	},
	{
		path: '/pick',
		name: 'Picking',
		component: function () {
			return import('../pages/PickingCheckPage.vue');
		},
	},
	{
		path: '/finish',
		name: 'Finish',
		component: function () {
			return import('../pages/FinishPage.vue');
		},
	},
];

const router = new VueRouter({
	routes,
});

export default router;
