import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../view/index'
import Child from '../view/child'
import Mine from '../view/mine'
import Medicine from '../view/medicine'
import ArticleDetail from '../view/ArticleDetail'
import MedicineDetailPage from '../view/medicineDetailPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index/child'
    },
    {
      path: '/index',
      component: IndexPage,
      children: [
        {
          path: 'child',
          component: Child
        },
        {
          path: 'mine',
          component: Mine
        }
      ]
    },
    {
      path: '/medicine',
      component: Medicine
    },
    {
      path: '/detail/:id',
      props: true,
      component: ArticleDetail
    },
    {
      path: '/medicine/detail/:id',
      props: true,
      component: MedicineDetailPage
    }
  ]
})
