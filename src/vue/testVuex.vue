<template>
    <div>
      这是一个从child组件获取到数据并实时更新的vue
      <ul>
        <li v-for="data in list">
          <input type="checkbox" v-model="data.isChecked"/>
          <span :class="{VuexActive:data.isChecked}">{{data.text}}</span>
        </li>
      </ul>
    </div>
</template>

<script>
  import {mapState} from "vuex";
  export default {
    name: 'testVuex',
    data(){
      return{

      }
    },
    mounted(){

    },
    computed:{
      ...mapState(["list"])
    }
  }
</script>

<style scoped>
  .VuexActive{
    text-decoration: line-through;
  }
</style>
