import Vue from 'vue';
import Router from 'vue-router';

import Vuetify from 'vuetify';

Vue.use(Vuetify);

Vue.use(Router);

import TaskComponent from '../components/TaskComponent';

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: TaskComponent
        }
    ]
});
