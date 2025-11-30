<script>
import { BNav, BNavItem } from 'bootstrap-vue-next'
import { RouterLink, RouterView } from 'vue-router'

export default {
  components: {
    RouterLink,
    RouterView,
    BNav,
    BNavItem,
  },
}
</script>

<template>
  <div>
    <BNav tabs justified>
      <BNavItem to="/" active-class="active">Home</BNavItem>
      <BNavItem to="/countryList/">Countries</BNavItem>
      <BNavItem to="/countryItem/:name">Selected Country</BNavItem>
      <BNavItem to="/signUp/">Sign UP</BNavItem>
      <BNavItem to="/signIn/">Sign In </BNavItem>
      <BNavItem to="/aboutUs/">About us</BNavItem>
    </BNav>

    <div class="view"><RouterView /></div>
  </div>
</template>

<style scoped>
.view {
  padding-top: 50px;
}
</style>
