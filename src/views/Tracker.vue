<template>
  <div class="tracker">
<h1>Track Your Calories!</h1>
<div class="brandedTracked col-6">
  <BrandedTracked v-for="brandedItem in brandedTracked" :foodData="brandedItem" :key="brandedItem.nix_brand_id" />
  </div>
 <div class="commonTracked">
  <CommonTracked v-for="commonItem in commonTracked" :foodData="commonItem" :key="commonItem.food_name" />
 </div>
 </div>
</template>


<script>
import BrandedTracked from "../components/BrandedTracked";
import CommonTracked from "../components/CommonTracked";
export default {
  name: "tracker",
  data(){
    return {}
  },
  computed:{
    brandedTracked(){
     return this.$store.state.brandedTrackedFoods
    },
    commonTracked(){
      return this.$store.state.commonTrackedFoods
    }
  },
  methods:{},
  components:{
    BrandedTracked,
    CommonTracked
  }
}
</script>


<style scoped>

</style>
