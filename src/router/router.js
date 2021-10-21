import Main from '../pages/MainPage';
import PostsPage from '../pages/PostsPage';
import PostIdPage from '../pages/PostIdPage';
import PostsPageWithStore from '../pages/PostsPageWithStore'
import About from '../pages/AboutPage';
import PostsPageComposition from '../pages/PostsPageComposition';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: PostsPage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: PostIdPage
    },
    {
        path: '/store',
        component: PostsPageWithStore
    },
    {
        path: '/composition',
        component: PostsPageComposition
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;