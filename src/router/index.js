import vue from "vue";
import VueRouter from "vue-router";
const Index = () => import('../views/index.vue');

const Hot = () => import('../components/index/Hot.vue');
const Cinema = ()=> import('../components/index/Cinema.vue');
const Wait = ()=> import('../components/index/Wait.vue');
const Classical = ()=> import('../components/index/Classical.vue');


const video = () => import('../views/video.vue');
const minivideo = () => import('../views/minivideo.vue');
const show = () => import('../views/show.vue');
const my = () => import('../views/my.vue');
const unfound = () => import('../views/unfound.vue');

const Detail = () => import('../views/detail.vue');
const topDetail = () => import('../views/topDetail.vue');
vue.use(VueRouter);

const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
   }

const routes = [
  {
    path: '/',
    redirect: 'index'
  },
  {
    path: '/detail/:id',
    props:true,
    component: Detail,
    // redirect: 'Detail'
  },
  {
    path: '/topDetail/:id',
    props:true,
    component: topDetail,
    // redirect: 'Detail'
  },
  {
    path: '/index',
    component: Index,
    children:[
      {
        path:'/index',
        redirect: '/index/hot'
      },
      {
        path: 'hot',
        component: Hot
      },
      {
        path: 'cinema',
        component: Cinema
      },
      {
        path: 'wait',
        component: Wait
      },
      {
        path: 'classical',
        component: Classical
      }
    ]
  },
  {
    path: '/video',
    component: video
  },
  {
    path: '/minivideo',
    component: minivideo
  },
  {
    path: '/show',
    component: show
  },
  {
    path: '/my',
    component: my
  },
  {
    path: '/*',
    component: unfound
  },
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

export default router;