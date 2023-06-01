import { axiosCreate, axiosfetchPrivateEmail } from '../../../config/axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { apiPath } from './../../../consts/path'
import { objecApi } from '../../../consts/storageConst'
import { AxiosInstance } from 'axios'
import NodeCache from 'node-cache';
type Data = {}

const { Api } = objecApi

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { params }: any = req.query
  const cache = new NodeCache();
  switch (params[0]) {
    case 'listmarc': {
      try { 
       
        const URL = apiPath.marcas.PATH_ListarByMarca
        const apiCall: AxiosInstance = axiosCreate(Api)        
        const { data } = await apiCall(URL)
        const result = data.Data.lresponse
        res.status(200).json(result)
      
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error en la solicitud' });
      }
      break
    }
    
    case 'savemarca': {
      try {
        const item = req.body
        const URL = apiPath.marcas.PATH_SaveMarcas
        const apiCall: AxiosInstance = axiosCreate(Api)
        const {data} = await apiCall.post(URL, item)
        const result = data.Data.lresponse
        console.log("xxxxxx",result)
        res.status(200).json(result)
      
      } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
      }
      break
    }
    case 'updatemarca': {
      try {
        const item = req.body
        const URL = apiPath.marcas.PATH_UpdateMarca
        const apiCall: AxiosInstance = axiosCreate(Api)
        const {data} = await apiCall.post(URL, item)
        const result = data.Data.lresponse
     
        res.status(200).json(result)
      
      } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
      }
      break
    }
    case 'disabledemarca': {
      try {
        const item = req.body
        const URL = apiPath.marcas.PATH_DisabledMarca
        const apiCall: AxiosInstance = axiosCreate(Api)
        const {data} = await apiCall.post(URL, item)
        const result = data.Data.lresponse
     
        res.status(200).json(result)
      
      } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
      }
      break
    }
    default:
      res.status(404).json({ error: 'Ruta no encontrada' });
      break;
  
  }
}

export default handler
