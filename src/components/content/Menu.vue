<template>
  <div class="menu">
    <div>
      <autocomplete
        :search="search"
        :get-result-value="getResultValue"
        ref="myField"
        @submit="selectSnippet"
        placeholder="Search for a snippet"
        aria-label="Search for a snippet"
      ></autocomplete>
    </div>
    <div v-for="snippet of snippets" v-bind:key="snippet.id" class="menu-item">
      <menu-item :snippet="snippet" :activeSnippet="activeSnippet"></menu-item>
    </div>
  </div>
</template>

<script>
import MenuItem from "./menu/MenuItem.vue";
import Autocomplete from "@trevoreyre/autocomplete-vue";
import "@trevoreyre/autocomplete-vue/dist/style.css";

export default {
  name: "Menu",
  components: {
    MenuItem,
    Autocomplete
  },
  data: function() {
    return {
      searchInput: ""
    };
  },
  methods: {
    search(input) {
      let self = this;
      if (input.length < 1) {
        return [];
      }
      return self.snippets.filter(snippet => {
        return snippet.name.toLowerCase().indexOf(input.toLowerCase()) > -1;
      });
    },
    getResultValue(result) {
      return result.name;
    },
    selectSnippet: function(snippet) {
      this.$router.push({
        name: "snippet",
        params: { type: snippet.type, id: snippet.id }
      });
      this.$store.dispatch("showSnippet", snippet);
      this.$refs.myField.setValue({});
    }
  },
  computed: {
    snippets() {
      return this.$store.getters.snippets;
    },
    activeSnippet() {
      return this.$store.getters.activeSnippet;
    }
  }
};
</script>

<style scoped>
.menu {
  overflow-y: auto;
  display: grid;
  grid-template-rows: 50px repeat(auto-fill, 20px);
  grid-gap: 5px;
  border-right: 1px solid lightgray;
}

.menu-item {
  align-self: center;
}
</style>