<template>
  <div></div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState({
      specialData: state => state.home.specialData
    })
  },
  methods: {
    ...mapActions({
      getSpecial: "home/getSpecial"
    })
  },
  onLoad(options) {
    console.log(options);
    this.getSpecial({ siid: options.businessId });
  },
  mounted() {}
};
</script>
<style scoped lang="">
</style>