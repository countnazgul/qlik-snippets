<template>
  <div>
    <div v-if="snippet.name == 'NOT EXISTS'">DON'T EXISTS</div>

    <div class="main-content" v-if="snippet.name != 'NOT EXISTS'">
      <div class="name">
        <div>{{snippet.name}}</div>
        <div class="contributor">
          Contributor:
          <a
            :href="snippet.contributor.link"
            :title="snippet.contributor.link"
          >{{snippet.contributor.name}}</a>
        </div>
        <div class="references">
          References:
          <div v-for="(reference, index) of snippet.references" v-bind:key="reference">
            <a :href="reference" target="_blank" :title="reference">Reference {{index + 1}}</a>
          </div>
        </div>
      </div>

      <div class="code-main">
        <div class="title code-title">
          <div>Code</div>
          <img
            src="@/assets/images/copy.png"
            class="copy"
            v-clipboard="snippet.code"
            @success="copyOk"
            @error="copyNotOk"
            title="Copy to clipboard"
          />
        </div>
        <div class="code">
          <pre>{{snippet.code}}</pre>
        </div>
      </div>

      <div class="description">
        <div class="title">Description</div>
        <div class="descr-text" v-html="snippet.description"></div>

        <div class="title"></div>

        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mainContent",
  props: ["activeSnippet"],
  methods: {
    copyNotOk() {},
    copyOk() {}
  },
  computed: {
    snippet() {
      return this.$store.getters.activeSnippet;
    }
  }
};
</script>
<style scoped>
.main-content {
  display: grid;
  /* grid-template-rows: 30px 250px 30px auto 30px auto 30px auto; */
  grid-template-rows: 50px auto;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;
  /* padding-left: 5px; */
}

.name {
  grid-row: 1;
  grid-column: 1 / span 2;
  border-bottom: 1px solid lightgray;
  font-size: 20px;
  font-weight: bold;
  /* display: flex; */
  display: grid;
  grid-template-columns: 50% 20fr 50fr;
  align-items: center;
  padding-left: 5px;
}

.code-main {
  grid-row: 2;
  grid-column: 1;
  display: grid;
  grid-template-rows: 30px auto;
  grid-gap: 10px;
  padding-left: 5px;
}

.description {
  grid-row: 2;
  grid-column: 2;
  display: grid;
  grid-template-rows: 30px auto 30px auto 30px auto;
  grid-gap: 10px;
  padding-left: 5px;
}

.title {
  font-size: 16px;
  font-weight: bold;
  align-self: end;
}

.contributor {
  font-size: 12px;
  justify-self: start;
  padding-right: 5px;
}

.code {
  align-self: start;
}

.code-title {
  display: grid;
  grid-template-columns: auto 20px;
}

.copy {
  width: 10px;
  cursor: pointer;
  align-self: center;
  justify-self: center;
}

.references {
  display: grid;
  grid-template-columns: 75px repeat(auto-fill, 80px);
  font-size: 12px;
  padding-right: 5px;
}

pre {
  height: auto;
  /* max-height: 230px; */
  /* max-width: calc(100% - 25px); */
  overflow: auto;
  background-color: #eeeeee;
  word-break: normal !important;
  word-wrap: normal !important;
  white-space: pre !important;
}
</style>