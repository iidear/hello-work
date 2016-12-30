import Vue from 'vue';
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import about from './about.vue'
import project from './project.vue'
import contact from './contact.vue'

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
	routes: [{
		path: '/',
		component: about
	},{
		path: '/project',
		component: project
	},{
		path: '/contact',
		component: contact
	}]
})

new Vue({
	el: '#app',
	router,
	render: (createElement) => createElement(App)
});