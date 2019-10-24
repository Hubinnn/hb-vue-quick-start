<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <EE />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import EE from "@/components/Extended_Euclidean.vue";

export default {
  name: "home",
  components: {
    // HelloWorld,
    EE
  }
};
</script>
