<template>
  <div id="app">
    <AppMenu />
    
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppMenu from './components/AppMenu.vue';

export default {
  name: 'App',
  components: {
    AppMenu,
}
}
</script>

<style>

</style>
