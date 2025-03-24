import { createContext, useEffect, useState } from "react"


  export const AuthConPro=  createContext();



export default function AuthContext({children}) {
 
  const [UserToken, setUserToken] = useState(null);


  useEffect(function(){
    const ktn =localStorage.getItem('ktn')

    if(ktn != null){
        setUserToken(ktn);

    }


  },[])
  
  
  
  
    return (
        <AuthConPro.Provider value={{
            setUserToken,
            UserToken,
            

        }}>
        {children}
        </AuthConPro.Provider>
   
  )
}
