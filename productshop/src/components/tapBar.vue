<template>
  <div class="tapBar">
    <div class="active">今日推荐</div>
    <div>纸尿裤</div>
    <div>母婴专区</div>
    <div>服装</div>
    <div>家居</div>
    <div>小家电</div>
    <div>小家电</div>
    <div>小家电</div>
    <div>小家电</div>

  </div>
</template>
<script>
export default {
  props:{

  },
  components:{

  },
  data(){
    return {
      topList:['今日推荐']
    }
  },
  computed:{

  },
  methods:{

  },
  created(){

  },
  mounted(){

  }
}
</script>
<style scoped lang="scss">
.tapBar{
  // width: 100%;
  display: flex;
  white-space: nowrap;
  height: 100rpx;
  line-height: 100rpx;
  overflow: scroll;
  &::-webkit-scrollbar {               // &在sass中就表示要修饰的父元素即.pics_wall
    display: none;
  }
  >div{
    padding: 0 22rpx;
    height: 100%;
    font-size: 28rpx;
  }
  .active{
    font-weight: 600;
    position: relative;
    &:after{
      content: "";
      width: 36rpx;
      height: 6rpx;
      background: #48CFBA;
      position: absolute;
      bottom:0;
      left:50%;
      transform: translateX(-50%)
    }
  }

}
</style>