import { createContext , useState } from "react";

const AuthContext = createContext({});
const DeveloperContext=createContext({});

export const AuthProvider = ({children})=>{
   // const [auth,setAuth] = useState({});
    const [devId,setDevId]=useState({});
    

    return (<DeveloperContext.Provider value={{devId,setDevId}}>
        {children}
    </DeveloperContext.Provider>)
}
export default DeveloperContext;