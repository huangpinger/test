<template>

    <div>

      <ul>
        <li v-for="(data,index) in datalist" @click="turnClick(index)">{{data}}</li>
      </ul>
      <el-container>
        <el-header>
          <input v-model="additem" @keyup.enter="handleKey"/>
          <button @click="handleClick">add</button>
        </el-header>
        <el-container>
          <el-aside width="400px">
            <IsCheck/><br>
            <UnChecked/><br/>
          </el-aside>
          <el-container>
            <el-main>
              <TestVuex/>
            </el-main>
          </el-container>
        </el-container>
      </el-container>
    </div>

</template>

<script>
  import Router from '../router'
  import TestVuex from './testVuex'
  import IsCheck from './isCheck'
  import UnChecked from './unChecked'
  export default {
    name: 'child',
    components: {UnChecked, IsCheck, TestVuex},
    data(){
      return{
        datalist:['d','dd','afad'],
        additem:''
      }
    },
    methods:{
      handleClick(){
        this.datalist.push(this.additem)
      },
      turnClick(index){
        //通过router中的push方法跳转，带上id就可以判断加载哪个界面
        Router.push(`/detail/${index}`);
      },
      handleKey(ev){
        console.log(ev.target.value);
        this.$store.commit("add",{'text':ev.target.value,'isChecked':false});
      }
    },
    component:{
      TestVuex,
      IsCheck,
      UnChecked
    }
  }
</script>

<style lang="scss" scoped>
  ul{
    li{
      cursor: pointer;
      list-style: none;
      padding: 10px;
    }
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

</style>
