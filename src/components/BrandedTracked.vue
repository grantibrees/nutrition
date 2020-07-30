<template>
  <div class="trackedBranded">
  <h3>{{foodData.brand_name_item_name}}</h3>
    <h3>{{foodData.serving_qty}} {{foodData.serving_unit}}</h3>
    <h3>{{foodData.nf_calories}}</h3>
    <img class="img-thumbnail" :src="foodData.photo.thumb" />
  </div>
</template>


<script>
export default {
  name: "tracked",
  props: [
    "foodData"
  ],
  data(){
    return {}
  },
  computed:{},
  methods:{},
  components:{}
}
</script>


<style scoped>

</style>