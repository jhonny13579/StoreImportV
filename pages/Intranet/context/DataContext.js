import {createContext,useState} from 'react';


export  const DataContext = createContext();

/*const dataFix = {
    students:[],
    student :{},
    apoderado: {}
}
const dataUser = localStorage.getItem('userLogin');

if(dataUser!=null && dataUser!="" && typeof dataUser !='undefined'){
    dataFix.apoderado = (dataUser!=null && dataUser!="")?JSON.parse(dataUser):{};
}*/
//const dataFix = null;

export const DataProvider = ({children}) =>{
    // const isMobile = this.props.__isMobile;
    const [data, setData] = useState();
    return (            
            <DataContext.Provider value={{data, setData}}>
                {children}
            </DataContext.Provider>  
    );
}