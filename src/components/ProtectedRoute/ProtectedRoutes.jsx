import { useEffect, useState } from "react";
import Loader from '../../components/Loading/Loadre'
import { supabase } from "../Supabase/SubapaseClient";
import { Navigate, Outlet } from "react-router-dom";


export default function ProtectedRoutes() {

    const [user,setUser]       = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        const checkUser = async()=> {
            const {data,error} = await supabase.auth.getUser();
            if(!error){
                setUser(data?.user || null)
            }
            setLoading(false)
        }
        checkUser()
        
    },[])
  
    
  if(loading){
    return <Loader />
  }

  if(!user){
    document.querySelector('.sign-prombet').style.visibility = 'visible';
   return <Navigate to='/' state={{to : '/checkout'}} replace />
  }

  return <Outlet />
}
