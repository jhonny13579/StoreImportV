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
        const cacheKey = params.join('-'); // Genera una clave única basada en los parámetros de la solicitud
        const cachedResult = cache.get(cacheKey);

        if (cachedResult) {
          // Si el resultado está en la caché, lo devuelve directament  e
          return res.status(200).json(cachedResult);
        }

        console.log("cachedResult",cachedResult)
        const URL = apiPath.marcas.PATH_ListarByMarca
        const apiCall: AxiosInstance = axiosCreate(Api)        
        const { data } = await apiCall(URL)
        const result = data.Data.lresponse

        cache.set(cacheKey, result, 5 * 60);

        res.status(200).json(result)
        // console.log("resultadoooo",result)
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error en la solicitud' });
      }
      break
    }
    
    default:
      res.status(404).json({ error: 'Ruta no encontrada' });
      break;
  
  }
}

export default handler
