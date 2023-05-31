import axiosfetchPublic from '../../../config/axios'

const API = {
  BylistMarca: async () => {
    const URL = `/marcas/listmarc/`
    const result: any = await axiosfetchPublic(URL)    
    return result.data
  },
}

export default API
