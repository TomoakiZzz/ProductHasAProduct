<template>
  <div class="counter-warp">
    <p>home</p>
  
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
  components:{
   
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>

</style>
