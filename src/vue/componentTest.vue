<template>
  <div>
    <!--<InputSimple :text="'封装组件'" v-bind:confClass="conponentClass" :inputType="'number'" >-->
    <InputSimple :text="'封装组件'":confClass="conponentClass" :inputType="'number'" :autoComplish="wordsMap" v-on:test="testReturn">
      <!--<label>123213</label>-->
      <!--<label slot="aaa">123213</label>-->
    </InputSimple>
  </div>
</template>

<script>
  import InputSimple from './component/inputSimple';
  import {map} from 'lodash'

  const wordsMap=[
    'acd','bac','七里香','b0','b12','b22','b3','b4','b5','b6','如果爱',
    'b7','b8','b2','abd','ab','acd','accd','abd','qq音乐','b1','cd',
    'ccd','cbcv','小王子','cxf','b0'
  ]
  export default {
    name: 'componentTest',
    data(){
      return{
        wordsMap:wordsMap,
        conponentClass:{
          border:'1px solid #6f6060',
          spanWidth:'80px',
          spanBgColor:'#e3e1e1',
          spanClass: ['test-class']

        }
      }
    },
    mounted() {
    },
    methods: {
      testReturn(rel) {
        console.log(rel);
      }
    },
    components:{
      InputSimple
    }
  }
</script>

<style scoped>
.test-class{
  color:red;
}
</style>
