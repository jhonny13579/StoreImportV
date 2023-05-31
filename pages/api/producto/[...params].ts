import { axiosCreate, axiosfetchPrivateEmail } from '../../../config/axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { apiPath } from './../../../consts/path'
import { objecApi } from '../../../consts/storageConst'
import { AxiosInstance } from 'axios'

type Data = {}

const { Api } = objecApi

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { params }: any = req.query

  switch (params[0]) {
    case 'listproducto': {
      try {
            
        const URL = apiPath.productos.PATH_ListarByProductoByImagen(params[1])
        const apiCall: AxiosInstance = axiosCreate(Api)    
        const { data } = await apiCall(URL)
        const result = data.Data.lresponse
        res.status(200).json(result)
        // console.log("resultadoooo",result)
      } catch (error) {
        console.log(error)
      }
      break
    }
    case 'listproducid': {
      try {
      
        console.log("resultadooooaaaaa")

        const item = req.body
        const URL = apiPath.productos.PATH_ListarProductRecomendado
        const apiCall: AxiosInstance = axiosCreate(Api)
        const {data} = await apiCall.post(URL, item)
        const result = data.Data.lresponse
        console.log("resultadooooaaaaa",result)
        res.status(200).json(result)
      
      } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
      }

      break
    }
    case 'listproducupdate': {
      try {
      
      

       
        const URL = apiPath.productos.PATH_GetProductsActualizados(params[1],params[2])
        const apiCall: AxiosInstance = axiosCreate(Api)
        const { data } = await apiCall(URL)
        const result = data.Data.lresponse
        console.log("resultadooooaaaaa",result)
        res.status(200).json(result)
      
      } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
      }

      break
    }
    case 'listproducbynegocio': {
      try {
      
 

       
        const URL = apiPath.productos.PATH_ListarProductosByNegocio(params[1])
        const apiCall: AxiosInstance = axiosCreate(Api)
        const { data } = await apiCall(URL)
        const result = data.Data.lresponse
     
        res.status(200).json(result)
      
      } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
      }

      break
    }
    case 'listproducinactive': {
      try {
      
    
       
        const URL = apiPath.productos.PATH_ListarProductosInactives(params[1])
        const apiCall: AxiosInstance = axiosCreate(Api)
        const { data } = await apiCall(URL)
        const result = data.Data.lresponse
      
        res.status(200).json(result)
      
      } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
      }

      break
    }
    default:
      res.status(404).json({ error: 'Not Found' });
      break;
  }
}

export default handler
