<template>
  <div>
    <h1>this is a component</h1>
    <b-form-input v-model="text" placeholder="Enter your text"></b-form-input>
    <div class="mt-2">Value: {{ text }}</div>
    <b-button @click="clk_btn()">Button</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: ""
    };
  },
  mounted() {
    console.log("mounted");
  },
  methods: {
    clk_btn() {
      console.log("clicked!");
    }
  }
};
</script>

<style scoped>
</style>
