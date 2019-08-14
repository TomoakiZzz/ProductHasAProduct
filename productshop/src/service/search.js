import request from "../utils/request"
export function searchShop(params){
    return request.post("/api/open/search/query/1.0.0",params)
}