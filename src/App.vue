<template>
  <div id="app">
    <div class="header">可视化UI构建系统</div>
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
  .header{
    background: linear-gradient(to right, #8590fb, #4cc2d7 );
    height: 40px;
    line-height: 40px;
    width: 100%;
    color: #fff;
    padding: 0 10px;

  }
  .app-main{
    position: absolute;
    top: 40px;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
