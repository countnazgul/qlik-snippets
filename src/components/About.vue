<template>
  <div class="about">
    <router-link to="/"><img class="back-arrow" src="@/assets/images/left-arrow.png" title="Back"></router-link>

    <div class="head">About</div>

    <div clas="description">
      Currated list of useful Qlik expressions, script, enigma, QRS snippets
    </div>

    <div class="head">Contribute</div>

    <div clas="description">
      If you want to contribute please send an email to
      <strong>test@test.com</strong> with the code and short description.
      <strong>qvw/qvf</strong> example is nice to have but not mandatory.
    </div>

    <div class="head">Legal</div>

    <div clas="description">
      <strong>This site is not not affiliated with Qlik</strong> and its under
      <a href="https://opensource.org/licenses/MIT">MIT License</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "about"
};
</script>

<style scoped>
.about {
  display: grid;
  grid-template-rows: 20px repeat(7, 1fr);
  grid-gap: 5px
}

.head {
  font-size: 20px;
  font-weight: bold;
  align-self: end;
}

.back-arrow {
  height: 20px;
  width: 20px;
}
</style>