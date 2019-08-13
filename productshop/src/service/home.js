import request from "../utils/request.js"
export function getHomeData(){
    return request.post("/api/open/page/home/list/1.0.0")
}
export function getCategoryList(params){
    console.log(params)
    return request.post("/api/open/product/category/sub/1",{parentId:0})
}