<template>
  <div class="home">
    <header-section />
    <router-view>
      <content-section />
    </router-view>
    <footer-section />
  </div>
</template>

<script>
import HeaderSection from "./Header.vue";
import ContentSection from "./Content.vue";
import FooterSection from "./Footer.vue";

export default {
  name: "home",
  components: {
    HeaderSection,
    ContentSection,
    FooterSection
  }
};
</script>

<style scoped>
.home {
  display: grid;
  grid-template-rows: 80px auto 25px;
  height: 100vh;
}
</style>
