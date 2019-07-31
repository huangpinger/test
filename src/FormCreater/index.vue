<template>
    <div class="main-container">
      <el-aside width="100px">
        <ul>
          <li class="fa fa-th-list fa-lg"></li>
        </ul>
      </el-aside>
      <el-main></el-main>
    </div>
</template>

<script>
  export default {
    name: 'index'
  }
</script>

<style lang="scss">
  .main-container{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

</style>
