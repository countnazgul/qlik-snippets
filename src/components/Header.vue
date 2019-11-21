<template>
  <div class="header-section">
    <div class="title">Qlik Snippets</div>
    <router-link to="/about">
      <img src="@/assets/images/info-icon.png" class="info" title="About" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "headerSection"
};
</script>

<style scoped>
.header-section {
  text-align: center;
  display: grid;
  grid-template-columns: auto 30px;
  border-bottom: 1px solid lightgray;
}

.title {
  font-size: 3vw;
  font-weight: bold;
  align-self: center;
  /* grid-column: 1 / span 2 */
}

.info {
  width: 15px;
  height: 15px;
  padding-left: 5px;
  padding-top: 5px;
}
</style>
