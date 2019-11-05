import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import Discounts from '../pages/discounts'
import My from '../pages/my'
import Store from '../pages/store'
import Erdianshi from '../pages/erdianshi'
import Erdianying from '../pages/Erdianying'
import Erzongyi from '../pages/Erzongyi'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component:Home
    },
    {
      path: '/discounts',
      name: 'Discounts',
      component: Discounts
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/store',
      name: 'Store',
      component: Store,
      children:[
        {name:"Erdianshi",path:"erdianshi",component:Erdianshi},
        {name:"Erdianying",path:"erdianying",component:Erdianying},
        {name:"Erzongyi",path:"erzongyi",component:Erzongyi}
      ]
    },
    {
      path:'/*',
      redirect:'/home'
    }
  ]
})
