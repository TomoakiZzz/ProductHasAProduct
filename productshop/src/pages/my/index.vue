<template>
  <div class="my-warp">
    <div class="myTop">

    </div>
    <div class="myBottom">

    </div>
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
    }
  }
}
</script>

<style lang="scss" scoped>
.my-warp{
  width:100%;
  height:100%;
}
.myBottom{
  width: 1590rpx;
  height:500rpx;
  background: #ccc;

}
</style>
