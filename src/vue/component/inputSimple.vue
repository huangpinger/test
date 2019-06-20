<template>
  <div class="input-container">
    <span v-bind:style="{width: confClass.spanWidth,backgroundColor:confClass.spanBgColor,height:confClass.spanHeight}"
          v-if="text"
          v-bind:class="getClass()"
    >{{text}}</span>
    <slot></slot>
    <div class="input-main">
      <input :style="{}"
             :class="confClass.spanClass"
             type="text"
             v-model="msg"
             v-on:input="whenInput"
             @blur="blur"
             v-on:keydown="checkType(inputType)"/>

      <div v-show="isShow">
        <ul>
          <li v-for="(v,index) in words" ref="hint" v-on:click="fillInput(index)">{{v}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {map} from 'lodash';


  export default {
    name: 'inputSimple',
    data(){
      return{
        msg:'',
        words:[],
        hints:[],
        isShow:false,
      }
    },
    props:[
      'text',
      'confClass',
      'inputType',
      'autoComplish'
    ],
    computed:{

    },
    watch:{

    },
    methods:{
      whenInput(){
        this.words = [];
        if (this.msg != ""){
          let str = RegExp(this.msg);
          this.autoComplish ? this.autoComplish.map(item =>{
            if (item.match(str)){
              this.words.push(item);
              this.isShow = true;
            }
          }) : '';
        }else{
          this.isShow = false;
        }
      },
      blur(){
        setTimeout(()=>{
          this.isShow = false
        },200)
      },
      fillInput(index){
        this.msg = this.words[index];
      },
      checkType(type){
        switch (type) {
          case 'number':
            let regexNum = /^([1-9]\d*|[0]{1,1})$/;
            // if (!this.msg.replace(regexNum)){
            if (!regexNum.test(this.msg)){
              console.log(this.msg);
              console.log("***")
              console.log(regexNum.test(this.msg))
            }
            break;
          case 'text' :

        }
        this.$emit('test', true);
      },
      getClass() {
        return this.confClass.spanClass;
      }
    }
  }
</script>

<style lang="scss">
  .input-container{
    width: 250px;
    display: flex;
    flex-direction: row;
    line-height: 30px;
    span{
      flex-grow: 0;
    }
    .input-main{
      margin-left: 5px;
      flex-grow: 1;
      input{
        height: 30px;
        border-radius: 4px;
      }
      ul{
        list-style: none;
        margin:0;
        padding: 10px;
        border: 1px solid #000;
        li:hover{
          background-color: #0ff;
        }
      }
    }
  }
</style>
