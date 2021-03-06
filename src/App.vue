<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
// 引入组件
import Footer from './components/Footer/Footer.vue'
import Header from './components/Header/Header.vue'
export default {
  name: 'App',
  components: {
    Footer,
    Header
  }
}
</script>

<style>
</style>
