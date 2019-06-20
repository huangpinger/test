<template>
  <div id="app">
    我是app
    <router-view/>
    <!--<el-button>add</el-button>-->
    <!--&lt;!&ndash;router-link 跳转连接&ndash;&gt;-->
    <router-link to="/test">测试应用程序</router-link>
    <!--<router-link to="/child">child</router-link>-->
    <!--<div id="form-create"></div>-->

    <!--<select :value="a">-->
        <!--<option label="样式一" ></option>-->
        <!--<option label="样式二"></option>-->
      <!--</select>-->
  </div>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style>

</style>
