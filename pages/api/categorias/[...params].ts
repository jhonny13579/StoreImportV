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
    case 'list': {
      try {
        const URL = apiPath.categoria.PATH_ListarByCategory
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
  }
}

export default handler
