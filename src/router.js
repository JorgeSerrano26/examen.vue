import Vue from 'vue'
import VueRouter from 'vue-router'

import Choice from './componentes/Choice.vue'
import Notas from './componentes/Notas.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes : [
        { path: '/', redirect:'/choice' },
        { path: '/notas', component: Notas },
        { path: '/choice', component: Choice },
    ]
})