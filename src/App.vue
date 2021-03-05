<template>
  <div id="app">
   
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
// 引入组件
import Footer from './components/Footer/Footer.vue'
export default {
  name: 'App',
  components: {

    Footer
  }
}
</script>

<style>
</style>
