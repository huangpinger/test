import Vue from 'vue'
import Router from 'vue-router'
//在webpack.base.config.js中配置的src路劲的别名
import Child from '@/vue/child'
import Test from '@/vue/test'
import testChild from '@/vue/testChild'
import testChild2 from '@/vue/testChild2'
import detail from '@/vue/Detail'
import componentTest from '@/vue/componentTest'

import FormMain from '@/FormCreater/index'
import FormManage from '@/FormCreater/formManage'
import FormBuilder from '@/FormCreater/formBuilder'
import FormPreview from '@/FormCreater/formPreview'
Vue.use(Router)

export default new Router({
  //vue-router默认时hash模式，可以更改为路由的history模式，需要后台的正确路径配置
  // mode:'history',
  routes: [
    { path: '/', redirect: '/main/FormManage'},
    {
      path: '/main',
      component: FormMain,
      children: [
        {
          path: 'FormManage',
          component: FormManage
        },
        {
          path: 'formBuilder',
          component: FormBuilder
        },
        {
          path: 'formPreview',
          component: FormPreview
        }
      ]
    }



    // {
    //   path: '/child',
    //   name: 'Child',
    //   component: Child
    // },
    // {
    //   path: '/componentTest',
    //   name: 'componentTest',
    //   component: componentTest
    // },
    // {
    //   path: '/',
    //   // redirect:''
    //   //通过name属性重定向到相应页面
    //   redirect:{name:"componentTest"}
    // },
    // {
    //   path: '/test',
    //   name: 'Test',
    //   component: Test,
    //   children:[
    //     {
    //       path:'test-child',
    //       component:testChild
    //     },
    //     {
    //       path:'test-child2',
    //       component:testChild2
    //     },
    //     {
    //       path:'/',
    //       redirect:'test-child'
    //     }
    //   ]
    // },
    // {
    //   //动态路由匹配,通过:占位符跳转
    //   path: '/detail/:testid',
    //   component:detail
    // }
  ]
})
