<template>
  <div  class="conteiner fluid">
      <navbar ></navbar>
      <div class="row">
        <div class="container">
          <router-view></router-view>
        </div>
      </div>
  </div>
</template>

<script>
import navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    navbar
  }
}
</script>

<style>

</style>
