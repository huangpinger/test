import Vue from 'vue';

const focus = Vue.directive('focus', {
  //当绑定元素插入到DOM中
  inserted: function (el) {
    el.focus();
    el.setAttribute('placeholder', 'ddd');
  }
})

export default focus;
