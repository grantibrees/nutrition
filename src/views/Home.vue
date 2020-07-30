<template>
  <div class="home">
    <h1 class="text-center">Sleuth for food!</h1>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-8">
          <div class="row">
            <div class="col">
              <form @submit.prevent="searchQuery">
                <div class="input-group flex-box">
                  <input
                    v-model="newSearch"
                    type="text"
                    class="form-control"
                    placeholder="Sleuth away..."
                  />
                  <div class="input-group-append" id="button-addon4">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="btn-group btn-group-toggle my-3" data-toggle="buttons">
              <label class="btn btn-info active">
                <input @click="brandedFood = true" type="radio" name="options" id="branded" checked /> Recipes, etc
              </label>
              <label class="btn btn-info">
                <input @click="brandedFood = false" type="radio" name="options" id="common" /> Common Foods
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div id="displayer" class="col-10 rounded border">
          <div v-if="brandedFood == true" class="branded">
            <Branded
              v-for="brandedItem in brandedArray"
              :foodData="brandedItem"
              :key="brandedItem.nix_brand_id"
            />
          </div>
          <div v-else class="common">
            <Common
              v-for="commonItem in commonArray"
              :foodData="commonItem"
              :key="commonItem.food_name"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Branded from "../components/Branded";
import Common from "../components/Common";
export default {
  name: "Home" /*  */,
  props: [] /* More like a parameter than anything. Gets passed to Pages. On the page will look like :carData="car" or "carData="{keys: values} */,
  data() {
    /* Data binding. */
    return {
      brandedFood: true,
      newSearch: "",
    };
  },
  mounted() {} /* Runs functions on startup */,
  computed: {
    brandedArray() {
      return this.$store.state.brandedResults;
    },
    commonArray() {
      return this.$store.state.commonResults;
    },
  } /* Pulls values from the store. Always the value of the method that's in it. The live value. Constant value, has to have a return in it, it's a getter. It's like a listener, listening to the state. It gets the state.
      cars() {
      return this.store.state.cars;
  */,
  methods: {
    searchQuery() {
      this.$store.dispatch("getFood", this.newSearch);
      this.newSearch = "";
    },
  } /* Functions that DO things, Commit and Dispatch */,
  components: {
    Branded,
    Common,
  } /* Pulls a components file as a child to reference. Often like a for A=[]\
  ÷*/,
};
</script>

<style scoped>
</style>