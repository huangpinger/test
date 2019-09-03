<template>
  <div class="components-panel border-left w-100">
    <div v-for="item in items">
      <div :class="items.class"
           >
        {{item.parent}}
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'components',
    data() {
      return {
        items: [
          {
            parent: '面板',
            id: 'panel',
            class: ['title-type-layout'],
            components: [
              {
                config: {
                  type: 'panel-simple',
                  width: 300,
                  height: 300,
                  margin: '0',
                  padding: '0',
                  components: []
                },
                name: '基础面板'
              }
            ]
          }
        ]
      }
    },
    methods: {
      itemIn(component) {
        this.$emit('itemin', component.config);
      },
      itemOut() {
        this.$emit('itemout');
      }
    }
  }
</script>

<style scoped>

</style>
