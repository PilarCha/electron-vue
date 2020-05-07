<template>
  <nav>
    <h1 class ="title">Hello  <span>World</span></h1>
    <ul>
      <li>Feed</li>
      <li>About</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    navigate (route) {
      this.$router.push(route);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
