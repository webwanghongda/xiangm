import Vue from 'vue'
import Router from 'vue-router'
const Home = ()=>import('../wiews/home/Home.vue')
const Cart = ()=>import('../wiews/cart/Cart.vue')
const Category = ()=>import('../wiews/category/Category.vue')
const Profile = ()=>import('../wiews/profile/Profile.vue')

Vue.use(Router)

const routes = [
  {
    path:'',
    redirect:'/Home'
  },
  
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/Category',
    name: 'Category',
    component: Category
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile
  },
  
]

export default new Router({
  routes,
  mode:'history'
})
