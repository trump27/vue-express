<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <router-view transition="route"></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  data () {
    return {
      msg: 'Hello Vue!! 6',
      data: null
    }
  },
  components: {
    Navbar
  },
  ready () {
    console.log('ready App,vue')
  }
}
</script>

<style lang="stylus">
body
  font-family "メイリオ",Meiryo,Helvetica,sans-serif
  margin-bottom 60px
.route-transition
  transition all 0.8s ease
.route-leave
  display none
.route-enter
  opacity 0
  padding 0 0
  height 0
  transform translate3d(0, 0, 0)
div.container
  margin-top 60px
</style>
