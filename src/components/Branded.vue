<template>
  <div class="branded">
    <h3>{{foodData.brand_name_item_name}}</h3>
    <h3>{{foodData.serving_qty}} {{foodData.serving_unit}}</h3>
    <h3>{{foodData.nf_calories}}</h3>
    <img class="img-thumbnail" :src="foodData.photo.thumb" />
  </div>
</template>
<script>
export default {
  name: "branded" /*  */,
  props: [
    "foodData",
  ] /* More like a parameter than anything. Gets passed to Pages. On the page will look like :carData="car" or "carData="{keys: values} */,
  data() {
    /* Data binding. */
    return {};
  },
  mounted() {} /* Runs functions on startup */,
  computed: {} /* Pulls values from the store. Always the value of the method that's in it. The live value. Constant value, has to have a return in it, it's a getter. It's like a listener, listening to the state. It gets the state.
      cars() {
      return this.store.state.cars;
  */,
  methods: {
    moveFoodItemToTracker() {
      this.$store.state.trackedFoods.push(this.foodData);
    },
  } /* Functions that DO things, Commit and Dispatch */,
  components: {} /* Pulls a components file as a child to reference. Often like a for A=[]\
  ÷*/,
};
</script>

<style scoped>
</style>