<template>
  <RouterView />
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="scss">
html {
  background: #212121;
  color: #ffff;
  font-size: 18px;
  font-family: Montserrat, sans-serif;
}

body {
  min-width: 100vw;
  min-height: 100vh;
  margin: 0;
  display: flex;
}

#app {
  display: flex;
  height: 100%;
  width: 100%;



}
</style>
