import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    list:[]
  },
  mutations:{
    add:(state,payload)=>{
      // console.log(payload);
      state.list.push(payload)
    }
  },
  getters:{
    activelist(state){
      return state.list.filter(item=>item.isChecked === false)
    },
    completelist(state){
      return state.list.filter(item => item.isChecked === true)
    },
    activelistnum(state){
      return state.list.filter(item => item.isChecked === false).length
    }
  }
})

export default store;
