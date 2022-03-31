import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        redirect: 'pokemon'
    },
    // pokemon routes
    {
        path: '/pokemon',
        name: 'pokemon',
        component: () => import(/* webpackCunkName: "PokemonLayout" */ '@/modules/pokemon/layouts/PokemonLayout'),
        children: [
            {
                path: 'home',
                name: 'pokemon-home',
                component: () => import(/* webpackCunkName: "ListPage" */ '../modules/pokemon/pages/ListPage')
            },
            {
                path: 'about',
                name: 'pokemon-about',
                component: () => import(/* webpackCunkName: "AboutPage" */ '../modules/pokemon/pages/AboutPage')
            },
            {
                path: 'pokemonid/:id',
                name: 'pokemon-id',
                component: () => import(/* webpackCunkName: "PokemonPage" */ '../modules/pokemon/pages/PokemonPage'),
                props: (route) => {
                    const id = Number(route.params.id)
                    return {
                        id: isNaN(Number(id)) ? 1 : Number(id)
                    }
                }
            },
            {
                path: '',
                redirect: { name: 'pokemon-home' }
            }
        ]
    },
    // dbz routes
    {
        path: '/dbz',
        name: 'dbz',
        component: () => import('@/modules/dbz/layouts/DragonBallLayout'),
        children: [
            {
                path: 'characters',
                name: 'dbz-characters',
                component: () => import('@/modules/dbz/pages/Characters')
            },
            {
                path: 'about',
                name: 'dbz-about',
                component: () => import('@/modules/dbz/pages/About')
            },
            {
                path: '',
                redirect: { name: 'dbz-characters' }
            }
        ]


    },

    {
        path: '/:pathMatch(.*)*',
        component: () => import(/* webpackCunkName: "NotFoundPage" */ '../modules/shared/pages/NotFoundPage')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router