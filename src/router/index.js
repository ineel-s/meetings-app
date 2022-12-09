import Router from 'vue-router';
import CalanderBar from '@/components/pages/meetings-bars/CalanderBar.vue';
import MeetingsBar from '@/components/pages/meetings-bars/meetings/MeetingsBar.vue';
import MeetingsAdd from '@/components/pages/meetings-bars/meetings/MeetingsAdd.vue';
import TeamsBar from '@/components/pages/meetings-bars/TeamsBar.vue';
import UserSignup from '@/components/pages/user-log/UserSignup.vue';
import UserLogin from '@/components/pages/user-log/UserLogin.vue'

const router = new Router({
    mode: 'history',
    routes: [
        {
            name: 'home',
            path: '/',
            component: UserLogin
        },
        {
            name: 'login',
            path: '/login',
            component: UserLogin
        },
        {
            name: 'signup',
            path: '/signup',
            component: UserSignup
        },
        {
            name: 'calander-bar',
            path: '/calendar',
            component: CalanderBar
        },
        {
            name:'meetings',
            path: '/meetings',
            component: MeetingsBar
        },
        {
            name : 'meetingsadd',
            path : '/meetingsadd',
            component : MeetingsAdd
        },
        {
            name : 'teams',
            path : '/teams',
            component:TeamsBar
        }
    ]
});

export default router;