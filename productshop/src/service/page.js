import request from "../utils/request.js"
//分类页
export function getCategoryList(params){
    console.log(params)
    return request.post("/api/open/product/category/sub/1",{parentId:0})
}
//分类接口
export function sortInterface(params){
    console.log(params)
    return request.post("/api/open/product/category/query/1.0.0",)
}
//按分类查询商品
export function classifyProduct(params){
    return request.post("/api/open/product/category/productList/1.0.0",{params})
}