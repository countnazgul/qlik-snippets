<template>
  <div class="about">
    <router-link to="/">
      <img class="back-arrow" src="@/assets/images/left-arrow.png" title="Back" />
    </router-link>

    <div class="head">About</div>

    <div clas="description">Currated list of useful Qlik expressions, script, enigma, QRS snippets</div>

    <div class="head">Contribute</div>

    <div clas="description">
      If you want to contribute feel free to open
      <a href="https://github.com/countnazgul/qlik-snippets/issues/new">new issue</a> in the project repo.
      <br />
      <br />In the issue include:
      <br />
      <ul>
        <li>Name of the snippet</li>
        <li>Short description</li>
        <li>Code of the snippet</li>
        <li>Reference link (if available)</li>
        <li>Your details (used for "Contributer" link) - LinkedIn/Twitter/Github etc (its not required but like to give you the credit)</li>
      </ul>
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
  grid-template-rows: 20px 50px 50px 50px 170px 50px 50px auto;
  grid-gap: 5px;
  padding-right: 5px;
  padding-left: 5px;
  padding-top: 5px;
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