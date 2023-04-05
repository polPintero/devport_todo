<template>
  <RouterView />
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="scss">

body {
  min-height: 100vh;
  margin: 0;
  display: flex;
}

#app {
  display: flex;
  height: 100%;
  width: min(100%, 1020px);
  margin: var(--gap-double) auto;
  padding: 0 var(--gap-double);
}
</style>
