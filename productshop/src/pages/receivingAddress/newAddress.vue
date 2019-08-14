<template>
    <div>
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
                 url:'/pages/goodsDetail/main'
            })
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>