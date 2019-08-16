import request from "../utils/request.js";

// provinceId: 110000
// provinceName: 北京市
// cityId: 110100
// cityName: 北京市
// areaId: 110108
// areaName: 海淀区
// address: 软件园南站北京八维研修学院
// consignee: 悠悠
// consigneePhone: 18911543296
// addressTag: 3
// state: 1

export function getCityData(params) {
  console.log(params)
  return request.post("/api/open/user/address/addAddress/1.0.0", params)
}


//code: undefined
export function preservation(params) {
  return request.post('/api/open/user/address/list/1.0.0', params)
}

