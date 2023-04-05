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
  background: var( --bg-main);
  color: #ffff;
  font-size: 18px;
  font-family: Montserrat, sans-serif;
}

html::-webkit-scrollbar {
  width: 6px;
}

html::-webkit-scrollbar-thumb {
  background-clip: padding-box;
  -webkit-border-radius: 7px;
  background-color: #485c63;
}

html::-webkit-scrollbar-corner {
  background-color: transparent;
}

body {
  min-height: 100vh;
  margin: 0;
  display: flex;
}

#app {
  display: flex;
  height: 100%;
  width: min(100%, 1020px);
  margin: auto;
  padding: 0 var(--gap-double);
}
</style>
