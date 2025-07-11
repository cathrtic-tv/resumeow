import { createRouter, createWebHistory } from 'vue-router';


// --------------------------------------------------------------------------------
const routesHome = [
    {
        path: '/',
        name: 'home',
        component: import('@/views/Home.vue'),
    },
    {
        path: '/icons',
        name: 'icons',
        component: import('@/views/Icons.vue'),
    },
];

export const routesResumeAts = [
    {
        path: `/ats/vaiiya/:pathMatch(.+)*`,
        urlPath: `/ats/vaiiya`,
        name: `ats-vaiiya`,
        filename: 'Vaiiya',
        component: import('@/views/resumeAts/Vaiiya.vue'),
    },
    {
        path: `/ats/holtow/:pathMatch(.+)*`,
        urlPath: `/ats/holtow`,
        name: `ats-holtow`,
        filename: 'Holtow',
        component: import('@/views/resumeAts/Holtow.vue'),
    },
];

export const routesResumeDesigned = [
    {
        path: `/designed/engimo/:pathMatch(.+)*`,
        urlPath: `/designed/engimo`,
        name: `designed-engimo`,
        filename: 'Engimo',
        component: import('@/views/resumeDesigned/Engimo.vue'),
    },
];

const routesDefault = [
    {
        path: '/:pathMatch(.*)*',
        redirect: '/',
    },
];

const routes = [...routesHome, ...routesResumeAts, ...routesResumeDesigned, ...routesDefault];


// --------------------------------------------------------------------------------
const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    // Remove trailing slashes
    if (to.path !== '/' && to.path.endsWith('/')) {
        const trimmedPath = to.path.slice(0, -1);
        next({ path: trimmedPath, query: to.query, hash: to.hash });
    }

    // .
    else {
        next();
    }

    // Set body class based on route name
    const appElement = document.getElementById('app');
    appElement.className = `view--${to.name || 'default'} mod--clr-${to.name || 'default'}`;

    const pathLength = to.path.split('/').length;
    if (pathLength > 2) {
        document.title = `Résuméow${to.path.split('/').map(segment => segment.replaceAll('-', ' ').replaceAll('_', '★ ')).join(' - ')}`;
    } else {
        document.title = `Résuméow - ${to.name}`;
    }
});

export default router;
