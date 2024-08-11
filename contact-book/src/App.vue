<script>
import BackToHome from './components/BackToHome.vue';

export default {
  name: 'App',
  components: {
    BackToHome
  },
  computed: {
    showBackToHome() {
      return this.$route.name !== 'home';
    }
  }
};
</script>

<template>
  <div id="app">
    <router-view />
    <BackToHome v-if="showBackToHome" />
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

