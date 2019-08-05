import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import VeeValidate from 'vee-validate';
import RecipeCreate from './components/recipes/RecipeCreate';
import Dashboard from './components/main/Dashboard';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(VeeValidate);

const routes = [
    {
        path: '/recipe', component: RecipeCreate
    }
];

const router = new VueRouter({
    routes
});

( new Vue({
    $_veeValidate: {
        validator: 'new'
    },

    el: '#vue-app',
    components: {
        Dashboard,
        RecipeCreate
    },
    router
}));
