import axios from "axios";

import Constantes from "../../utils/Constantes"

const API = {

  ValidaLogin: async (login) => {
    try {


      const response = await axios.post(
        "http://rinconcito-001-site1.btempurl.com/apiMarket/api/Login/ValidarLogin",
             
               login
             
      );
      console.log("response",response)
      if (response.data.Code=== 200) {
        


          const dataResponse = response.data
          
          if(response.data.Code ===200){
            console.log("EXITOOO")
            console.log(dataResponse,"responseAASDAS")
            return dataResponse
          }else{

            console.log("else de data response")
          }

          console.log(dataResponse,"dataResponse")
      
      }


    } catch (error) {
      console.error("Ocurrió un error en la solicitud:", error);
    }
  },

};

export default API;
