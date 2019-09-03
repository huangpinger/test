<template>
    <div>
    </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        list: [
          {template: 'FormManage', title:'表单管理', class:['fa', 'fa-th-list', 'fa-lg'],  path:'/main/FormManage'},
          {template: 'formBuilder', title:'构建新的表单', class:['fa', 'fa-th', 'fa-lg'], path:'/main/formBuilder'},
          {template: 'formPreview', title:'表单预览', class:['fa', 'fa-eye', 'fa-lg'], path:'/main/formPreview'},
        ],
        template: '',
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss">
  .main-container{
    position: absolute;
    top: 0;
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

</style>
