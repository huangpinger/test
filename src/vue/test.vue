<template>
    <div>
      test
      <input type="text" v-model="qiehuan1"/>
      <div v-if="qiehuan">123</div>
      <div v-else >qiehuan</div>
      <!--<ul>-->
        <!--<li @click="printResult">1</li>-->
        <!--<li @click="printComponent">过滤</li>-->
        <!--<li>2</li>-->
        <!--<li>3</li>-->
        <!--<li>3</li>-->
      <!--</ul>-->
      <!--<Child/>-->
      <!--<router-view/>-->
    </div>
</template>

<script>
  const object ={
    rows: [
      {
        checked: false,
        columns: [
          {
            checked: false,
            span: 12,
            components: [
              {type: '11'},
              {type: '22'},
            ]
          },
          {
            checked: false,
            span: 12,
            components: [
              {type: '11'},
              {type: '22'},
            ]
          },
        ]
      },
      {
        checked: false,
        columns: [
          {
            checked: false,
            span: 12,
            components: [
              {type: '33'},
              {type: ''},
            ]
          },
        ]
      },
    ],
  };
  const obj = {
    width: 800,
    height: 600,
    cellspacing: "5px 5px 5px 5px",
    cellpadding: "2px 2px 2px 2px",
    rows: [{
      checked: true,
      columns: [
        {
          checked: true,
          span: 6,
          components: [
            {
              type: "text-simple",
              label: "",
              readOnly: false,
              width: 140,
              padding: "5px 5px 5px 5px",
              margin: "0 5px 0 5px",
              disabled: false,
              placeholder: "",
              suffix: "",
              id: "b81ccae2-cbe6-40ec-86f5-ef08bb4f7082"
            },
            {
              type: "text-simple",
              label: "",
              readOnly: false,
              width: 140,
              padding: "5px 5px 5px 5px",
              margin: "0 5px 0 5px",
              disabled: false,
              placeholder: "",
              suffix: "",
              id: "8ac4eeed-7c6f-4bdc-8bd1-4f71f9e29bb4",
              destroy: true
            }
          ]
        },
        {
          checked: false,
          span: 6,
          components: [
            {
              type: "text-simple",
              label: "",
              readOnly: false,
              width: 140,
              padding: "5px 5px 5px 5px",
              margin: "0 5px 0 5px",
              disabled: false,
              placeholder: "",
              suffix: "",
              id: "31831d20-61ae-4466-971d-a3219dde2708"
            }
          ]
        }
      ]
    },
      {
        checked: false,
        columns: [{
          checked: false,
          span: 12,
          components: [
            {
              type: "text-simple",
              label: "",
              readOnly: false,
              width: 140,
              padding: "5px 5px 5px 5px",
              margin: "0 5px 0 5px",
              disabled: false,
              placeholder: "",
              suffix: "",
              id: "e87b8367-ce7f-43ab-8d06-f006254a9436"
            }
          ]
        }
        ]
      }
    ],
    data: {}
  }
  // import Child from './child'
  import {map,chunk,flow,reduce,concat,filter,remove,flatten} from 'lodash';
  export default {
    data(){
      return{
        qiehuan: false,
        qiehuan1: '',
      }
    },
    mounted() {
    },
    watch: {
      qiehuan1(val){
        if (val == '1'){
          this.qiehuan = true;
        } else{
          this.qiehuan = false;
        }
      }
    },
    components:{
      // Child
    },
    methods:{
      printComponent(){
        return flow([

          rs => flatten(map(rs, r => r.columns)),
          cs => {map(cs, c => remove(c.components, { destroy:true}));console.log(cs)},
          res =>{console.log(res)}
          // res =>{
          //     return flatten(map(res, item => item.columns));
          // },
          // res =>{
          // console.log(res);
          //   return map(res, item => remove(item.components, {destroy: true}));
          // },
          // res =>{
          // console.log(res);
          // }
        ])(obj.rows)
        // return flow([
        //   rs =>{
        //     return map(rs, (i,index) =>{
        //       console.log(index);
        //       return i.columns;
        //     })
        //   },
        //   rs =>{
        //   console.log(rs);
        //     return reduce(rs,(pre,next) =>{
        //       return concat(pre, next);
        //     },[]);
        //   },
        //   rs =>{
        //     return map(rs, item =>{
        //       return item.components;
        //     })
        //   },
        //   rs =>{
        //   console.log(rs);
        //     return reduce(rs, (pre, next) => {
        //       return concat(pre, next);
        //     },[]);
        //   },
        //   rs =>{
        //     console.log(rs);
        //     return filter(rs, item => !item.destroy);
        //   },
        //   rs =>{
        //     console.log(rs);
        //   }
        // ])(obj.rows)
      },
      printResult(){
        return flow([
          rs =>{
            return _.map(rs, item =>{
              return item.columns;
            });
          },
          rs =>{
          // console.log(rs)
           return reduce(rs,(pre,next)=>{
             return concat(pre, next);
           },[])
          },
          rs =>{
          // console.log(rs);
            return map(rs, item =>{
              // console.log(item.components);
              return item.components;
            })
          },
          rs =>{
            return reduce(rs, (pre,next)=>{
              return concat(pre, next);
            },[]);
            // console.log(rs);
          },
          rs =>{
          return filter(rs, item => item.type);
          }
        ])(object.rows);
      }

    }
  }
</script>

<style lang="scss" scoped>
  ul{
    li{
      list-style: none;
    }
  }
</style>
