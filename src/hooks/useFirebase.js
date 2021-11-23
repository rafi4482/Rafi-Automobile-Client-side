import { useEffect, useState } from "react"
import { getAuth,signInWithPopup,onAuthStateChanged, signOut, GoogleAuthProvider } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase=()=>{

const [user,setUser] = useState({})
const[isloading,setIsLoading]=useState(true)
const auth = getAuth();
const googleProvider=new GoogleAuthProvider()


const signInUsingGoogle = ()=>{
 signInWithPopup(auth, googleProvider)
 .then(result=>{
     console.log(result.user)
 })
}
  
const logOut=()=>{
    setIsLoading(true)
    signOut(auth)
    .then(()=>{})
    .finally(()=>setIsLoading(false))
        
}

useEffect(()=>{

    onAuthStateChanged(auth, (user) => {
        if (user) {        
         setUser(user)          
        }
        else{
            setUser({}) 
        }
        setIsLoading(false)
      });
      return
},[])

return{
    user,
    isloading,
    logOut,
    signInUsingGoogle,
    
}

}

export default useFirebase