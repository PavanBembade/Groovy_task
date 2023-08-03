import { useSelector } from "react-redux";
import { Outlet,Navigate } from "react-router-dom";

const PrivateRoutes=()=>{
    const isAuthenticated =useSelector((state)=>state.auth.isAuthenticated);
    return(
         isAuthenticated ? <Outlet/> : <Navigate to="/register"/>
    )
}

export default PrivateRoutes;