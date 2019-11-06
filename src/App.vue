<template>
  <div id="app">
    <div class="header">可视化UI构建系统</div>
    <div class="app-main">
      <el-container class="main-container">
        <el-aside width="50px" class="aside-container">
          <i v-for="item in list"
             :key="item.template"
             :title="item.title"
             @click="handleChangeList(item)"
             :class="item.class"></i>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      list: [
        {template: 'FormManage', title:'表单管理', class:['fa', 'fa-th-list', 'fa-lg'],  path:'/main/FormManage'},
        {template: 'formBuilder', title:'构建新的表单', class:['fa', 'fa-th', 'fa-lg'], path:'/main/formBuilder'},
        {template: 'formPreview', title:'表单预览', class:['fa', 'fa-eye', 'fa-lg'], path:'/main/formPreview'},
      ],
    }
  },
  methods: {
    handleChangeList(val) {
      this.$router.push(`/main/${val.template}`)
    }
  }

}
</script>

<style lang="scss">
  #app{
    .header{
      background: linear-gradient(to right, #8590fb, #4cc2d7 );
      height: 40px;
      line-height: 40px;
      width: 100%;
      color: #fff;
      padding: 0 10px;

    }
    .app-main{
      .main-container{
        position: absolute;
        top: 40px;
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
    }
  }
</style>
