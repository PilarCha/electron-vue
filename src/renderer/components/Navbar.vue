<template>
  <nav>
    <h1 class ="title">Hello  <span>World</span></h1>
    <ul>
      <li @click="navigate('/')">Feed</li>
      <li @click="navigate('/about')">About</li>
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

<style lang="scss">
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top:0;
    left:0;
    right:0;
    height: 60px;
    background-color: #171717;
    padding: 0px 15px;
    box-sizing: border-box;

      .title {
        color: #FFCE00;
        font-size:28px;
        line-height: 60px;
        margin: 0;
        font-weight: 900;
        text-transform: uppercase;

        span {
          color: #F3F3F3;
          font-weight:300;
        }
      }

      ul {
        li {
          color:#F3F3F3;
          font-size:18px;
          line-height:60px;
          display:inline-block;
          list-style: none;
          padding: 0px 15px;
          cursor: pointer;

          &:hover {
            color: #FFCE00;
            background-color: rgba(255,255,255,0.2);
          }
        }
      }
  }
</style>
