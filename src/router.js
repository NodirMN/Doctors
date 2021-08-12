import VueRouter from "vue-router"
import Home from './pages/Home.vue'
export default new VueRouter({
    routes: [
        { path: '/', component:Home },
        { path: '/list', component:()=>import('./pages/List.vue') },
        { path: '/newdoctor', component:()=>import('./pages/NewDoctor.vue') },
        { path: '/view/:id', component:()=>import('./pages/View.vue') },
        { path: '/edit/:id', component:()=>import('./pages/Edit.vue') },
        { 
            path: '/settings', 
            component:()=>import('./pages/Settings.vue'),
            children: [
                {
                    path: 'spec',
                    component: ()=>import('./components/Settings/Spec.vue')
                }
            ]
        },
    ],
    mode: 'history'
})