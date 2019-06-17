<template>
    <div>
      这是被勾选的选项
      <ul>
        <li v-for="data in completelist">
          <input type="checkbox" v-model="data.isChecked"/>
          {{data.text}}
        </li>
      </ul>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'isCheck',
    data(){
      return{

      }
    },
    mounted(){

    },
    computed:{
      ...mapGetters(['completelist'])
    }
  }
</script>

<style scoped>

</style>
