<template>
  <div class="counter-warp">
    <p>home9090909090</p>
    <button @click="clickdl">90099009090909</button>
  </div>
</template>

<script>
// Use Vuex
import store from './store'

export default {
  computed: {
    count () {
      return store.state.count
    }
  },
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    },
    clickdl(){
      wx.navigateTo({
        url: "/pages/special/main"
      });
    }
  }
}
</script>

<style>

</style>
