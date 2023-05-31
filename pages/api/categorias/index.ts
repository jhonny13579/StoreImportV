import axiosfetchPublic from '../../../config/axios'

const API = {
  BylistCategory: async () => {
    const URL = `/categorias/list/`
    const result: any = await axiosfetchPublic(URL)    
    // console.log("verrrrraaaaaa", result.data);
    return result.data
  },
}

export default API
