import ajax from './ajax'
//获取首页数据接口
export const reqHome = ()=>ajax.get(`/product/home`)