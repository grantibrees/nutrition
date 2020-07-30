import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from "../router"

const _api = axios.create({
  baseURL: "https://trackapi.nutritionix.com/v2/",
  timeout: 3000,
  headers: {
    "x-app-key": "8ef567b77b1690f6c1a93c36bd9ca712",
    "x-app-id": "3772de6c"
  }
});

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeFood: [],
    brandedResults: [],
    commonResults: [],
    brandedTrackedFoods: [],
    commonTrackedFoods: [],
  },
  mutations: {
    setActiveFood(state, activeFood) {
      state.activeFood = activeFood
    },
    setBrandedResults(state, brandedResults) {
      state.brandedResults = brandedResults
    },
    setCommonResults(state, commonResults) {
      state.commonResults = commonResults
    },
    setBrandedTrackedFoods(state, brandedTrackedFoods) {
      state.brandedTrackedFoods.unshift(brandedTrackedFoods)
    },
    setCommonTrackedFoods(state, commonTrackedFoods) {
      state.commonTrackedFoods.unshift(commonTrackedFoods)
    }
  },
  actions: {
    // SECTION Search Results
    async getFood({ commit, dispatch }, queryInput) {
      let res = await _api.get("search/instant?query=" + queryInput)
      console.log(res);
      commit("setBrandedResults", res.data.branded)
      commit("setCommonResults", res.data.common)
    },

    moveFoodItemToTracker({commit, dispatch}, payload) {
     if (payload.type == "branded"){
      commit("setBrandedTrackedFoods", payload.data)
     } else {
      commit("setCommonTrackedFoods", payload.data)
     }
    }
  },
  modules: {
  },
})
