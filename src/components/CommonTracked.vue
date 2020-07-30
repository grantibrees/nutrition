<template>
  <div class="trackedCommon">
    <h3>{{foodData.food_name}}</h3>
    <h3>{{foodData.serving_qty}} {{foodData.serving_unit}}</h3>
    <img class="img-thumbnail" :src="foodData.photo.thumb" />
  </div>
</template>

<script>
export default {
  name: 'common',
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