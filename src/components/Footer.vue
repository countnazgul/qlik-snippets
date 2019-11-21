<template>
  <div class="footer-section">
    <div></div>
    <div></div>
    <div class="version">0.1.0</div>
  </div>
</template>

<script>
export default {
  name: "footerSection"
};
</script>

<style scoped>
.footer-section {
  display: grid;
  grid-template-columns: 50px auto 100px;
  border-top: 1px solid lightgray;
}

.version {
  justify-self: end;
  align-self: center;
  padding-right: 5px;
}
</style>