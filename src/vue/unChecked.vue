<template>
    <div>
      这是未被勾选的选项
      <span>代办事项<b>共{{activelistnum}}项</b></span>
      <ul>
        <li v-for="data in activelist">
          <input type="checkbox" v-model="data.isChecked"/>
          {{data.text}}
        </li>
      </ul>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'unChecked',
    data(){
      return{

      }
    },
    mounted(){

    },
    computed:{
      ...mapGetters(["activelist"]),
      ...mapGetters(["activelistnum"])
    }
  }
</script>

<style scoped>

</style>
