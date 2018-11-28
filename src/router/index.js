import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Admin from '@/pages/Admin'
import Cart from '@/pages/Cart'

//admin child
import Index from '@/pages/admin/Index'
import New from '@/pages/admin/New'
import Products from '@/pages/admin/Product'
import Edit from '@/pages/admin/Edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: Index,
       // Child routes
       children: [
        {
          path: 'new',
          name: 'New',
          component: New
        },
        {
          path: '',
          name: 'Products',
          component: Products
        },
        {
          path: 'edit/:id',
          name: 'Edit',
          component: Edit
        }
      ]
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart
    }
  ]
})
