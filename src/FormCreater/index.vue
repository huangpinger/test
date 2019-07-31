<template>
    <div>
      <el-container class="main-container">
        <el-aside width="50px" class="aside-container">
          <i class="fa fa-th-list fa-lg"></i>
        </el-aside>
        <el-main></el-main>
      </el-container>
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
    padding: 10px;
    .aside-container{
      background:linear-gradient(to bottom, #8590fb, #4cc2d7);
      text-align: center;
      padding: 10px;
      color: #fff;
    }
  }

</style>
