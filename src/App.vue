<template>
  <div id="app">
    <Main />
    <gh-corner />
  </div>
</template>

<script>
import Main from "@/components/Main";
import ghCorner from "@/components/github-corner.vue";

export default {
  name: "home",
  components: {
    Main,
    ghCorner
  },
  mounted: function() {
    this.$store.dispatch("loadSnippets");

    if (this.$route.params.id) {
      this.$store.dispatch("showSnippet", {
        id: this.$route.params.id,
        type: this.$route.params.type
      });
    }
  }
};
</script>

<style>
#app {
  font-family: "Roboto", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0px;
}

p {
  margin-top: 10px !important;
}

code {
  background-color: #eeeeee;
  border-radius: 3px;
  font-family: courier, monospace;
  padding: 0 3px;
}

[data-position="below"] .autocomplete-input {
  border-radius: 0px;
}

.github-corner:hover .octo-arm {
  animation: octocat-wave 560ms ease-in-out;
}

@keyframes octocat-wave {
  0%,
  100% {
    transform: rotate(0);
  }

  20%,
  60% {
    transform: rotate(-25deg);
  }

  40%,
  80% {
    transform: rotate(10deg);
  }
}

@media (max-width: 500px) {
  .github-corner:hover .octo-arm {
    animation: none;
  }

  .github-corner .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }
}
</style>
