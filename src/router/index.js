import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import StagePhoto from '@/components/digest/stagePhoto'
import TitlePhoto from '@/components/digest/titlePhoto'
import PostPhoto from '@/components/digest/postPhoto'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/stage',
      name: 'Stage',
      component: StagePhoto
    },
    
    // {
    //   path: '/stage/title',
    //   name: 's-Title',
    //   component: TitlePhoto
    // },
    // {
    //   path: 'stage/title/post',
    //   name: 't-Post',
    //   component: PostPhoto
    // },
    {
      path: '/title',
      name: 'Title',
      component: TitlePhoto
    },
    {
      path: '/title/:id',
      name: 'Title',
      props: true,
      component: TitlePhoto
    },
    {
      path: '/post',
      name: 'Post',
      component: PostPhoto
    },
    {
      path: '/post/:id',
      name: 'Post',
      props: true,
      component: PostPhoto
    },
    // {
    //   path: '/meetup/new',
    //   name: 'CreateMeetup',
    //   component: CreateMeetup,
    //   beforeEnter: AuthGuard
    // },
    // {
    //   path: '/meetups/:id',
    //   name: 'Meetup',
    //   props: true,
    //   component: Meetup
    // },
    // {
    //   path: '/profile',
    //   name: 'Profile',
    //   component: Profile,
    //   beforeEnter: AuthGuard
    // },
    // {
    //   path: '/signup',
    //   name: 'Signup',
    //   component: Signup
    // },
    // {
    //   path: '/signin',
    //   name: 'Signin',
    //   component: Signin
    // }
  ]
  // ,

  // mode: 'history'
})
