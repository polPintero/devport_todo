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
  min-height: 100vw;
  min-height: 100vh;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#app {
  .login-form {
    box-shadow: 1.5px 1.5px 3px #0e0e0e, -1.5px -1.5px 3px rgb(95 94 94 / 25%), inset 0px 0px 0px #0e0e0e, inset 0px 0px 0px #5f5e5e;
    border-radius: 5px;
  }

}
</style>
