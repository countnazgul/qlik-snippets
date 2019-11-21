<template>
  <div @click="showSnippet" class="menu-item" :class="isSelected" :title="snippet.name">
    {{snippet.name}}
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  props: ['snippet', 'activeSnippet'],
  methods: {
      showSnippet: async function() {
          this.$router.push({ name: 'snippet', params: { type: this.snippet.type , id: this.snippet.id } })
          this.$store.dispatch('showSnippet', this.snippet)
      }
  },
  computed: {
      isSelected() {
          let self = this
          if(self.snippet.name == self.activeSnippet.name) {
              return 'selected'
          } else {
              return 'notSelected'
          }
      }
  }  
};
</script>

<style scoped>
.menu-item {
    font-size: 14px;
    align-self: center;
    cursor: pointer;
    padding-left: 5px;
}

.selected {
  color: #009844
}

.notSelected {
    color: black
}
</style>
