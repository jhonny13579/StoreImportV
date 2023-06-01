import axiosfetchPublic from '../../../config/axios'

const API = {
  BylistMarca: async () => {
    const URL = `/marcas/listmarc/`
    const result: any = await axiosfetchPublic(URL)    
    return result.data
  },

  SaveMarcaProd: async (item: any) => {
    const URL = '/marcas/savemarca';
    try {
      const result: any = await axiosfetchPublic.post(URL, item);
      console.log("verrrrr", result.data);
      return result.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  UpdateMarcaProd: async (item: any) => {
    const URL = '/marcas/updatemarca';
    try {
      const result: any = await axiosfetchPublic.post(URL, item);
     
      return result.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  DisabledMarcaProd: async (item: any) => {
    const URL = '/marcas/disabledemarca';
    try {
      const result: any = await axiosfetchPublic.post(URL, item);
     
      return result.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
}

export default API
