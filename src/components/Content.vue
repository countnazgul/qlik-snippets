<template>
  <div class="content-section">
    <Menu />
    <main-content v-if="snippet.name"></main-content>
  </div>
</template>

<script>
import Menu from "./content/Menu.vue";
import MainContent from "./content/MainContent.vue";

export default {
  name: "contentSection",
  components: {
    Menu,
    MainContent
  },
  computed: {
    snippet() {
      return this.$store.getters.activeSnippet;
    }
  }
};
</script>

<style scoped>
.content-section {
  display: grid;
  grid-template-columns: 20% 80%;
}
</style>
