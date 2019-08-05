import Vue from 'vue';
import Vuex from 'vuex';

import Recipe from './modules/Recipe';
import Nation from './modules/Nation';

Vue.use(Vuex);

const store = new Vuex.Store({

    modules: {
        Recipe
    },
});

export default store;
