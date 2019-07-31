<template>
  <div id="app">
    <div>header</div>
    <div class="app-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style lang="scss">
  .app-main{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
