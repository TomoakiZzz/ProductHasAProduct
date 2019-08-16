<template>
    <div class="btn">
      <button @click="clickNewAress">新增收货地址</button>
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

        }
    },
    computed:{

    },
    methods:{
        clickNewAress(){
             wx.navigateTo({
                 url: "/pages/receiverAddress/main"
            })
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
 .btn{
     width: 100%;
     height: 100%;
     background: #f3f7f7;
     padding-top:100rpx;
     button{
        //  margin-top:200rpx;
         width: 95%;
         font-size: 36rpx;
         background: cyan;
         color:#fff;
     }
 }
</style>