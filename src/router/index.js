import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Classify from '../views/classify'
import My from '../views/my'
import Community from '../views/community'
import Publish from '../views/publish'
import Top_page from '../views/top/top_page'
import Top_aspx from '../views/top/top_aspx'
import topZonghe from '../views/top/topzonghe'
import topZuixin from '../views/top/topzuixin'
import topFujin from '../views/top/topfujin'
import topZuigao from '../views/top/topzuigao'
import topZuidi from '../views/top/topzuidi'
Vue.use(VueRouter)

let router = new VueRouter({
  routes:[
    {
    name: 'home',
    path: '/home',
    component: Home
  },
  {
    name: 'top_page',
    path: '/top_page',
    component: Top_page
  },
  {
    name: 'top_aspx',
    path: '/top_aspx',
    component: Top_aspx,
    children:[
        {name:"topZonghe",path:"topzonghe",component:topZonghe},
        {name:"topFujin",path:"topFujin",component:topFujin},
        {name:"topZuixin",path:"topZuixin",component:topZuixin},
        {name:"topZuigao",path:"topZuigao",component:topZuigao},
        {name:"topZuidi",path:"topZuidi",component:topZuidi},
    ]
  },
  {
    path: '/classify',
    name: 'Classify',
    component: Classify
  },
  {
    path: '/my',
    name: 'My',
    component: My
  },
  {
    path: '/community',
    name: 'Community',
    component: Community
  },
  {
    path: '/publish',
    name: 'Publish',
    component: Publish
  },
    {
    path: '/',
    redirect:"/home"
  }
  ]
})
export default router

