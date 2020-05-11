<template>
  <div id="app">
    <Navbar/>
    <router-view></router-view>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar'
  export default {
    name: 'electron-app',
    components: {
      Navbar
    }
  }
</script>

<style lang="scss">
  body {
    margin: 60px 0 0 0;
    padding: 0;
    font-family: 'Roboto', 'Helvetica', sans-serif;
    background-color: #F3F3F3;
  }

  section {
    padding: 15px;

    h2 {
      font-size: 24px;
      margin: 0;
    }
  }
</style>
