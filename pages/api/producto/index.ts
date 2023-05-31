import axiosfetchPublic from '../../../config/axios'

const API = {
  BylistProductoImage: async (code: string) => {
    const URL = `/producto/listproducto/${code}`
    const result: any = await axiosfetchPublic(URL)    
    return result.data
  },

  BylistProductUpdate: async (code1: string, code2:string) => {
    const URL = `/producto/listproducupdate/${code1}/${code2}`
    const result: any = await axiosfetchPublic(URL)    
    return result.data
  },

 ByListProducRecomendado: async (item: any) => {

  const URL = '/producto/listproducid';

  try {
    const result: any = await axiosfetchPublic.post(URL, item);
    console.log("verrrrr", result.data);
    return result.data;
  } catch (error) {
    console.log(error);
    return null;
  }
},

BylistProductoNegocio: async (code: string) => {
  const URL = `/producto/listproducbynegocio/${code}`
  const result: any = await axiosfetchPublic(URL)    
  return result.data
},

BylistProductoInactive: async (code: string) => {
  const URL = `/producto/listproducinactive/${code}`
  const result: any = await axiosfetchPublic(URL)    
  return result.data
},
};



export default API
