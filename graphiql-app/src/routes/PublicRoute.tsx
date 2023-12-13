import { Navigate, Outlet } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/consts";
import { isAuth } from "../utils/flag";

function PublicRoute() {
    
    return !isAuth ? <Navigate to={LOGIN_ROUTE}/> : <Outlet/>

    
}
export default PublicRoute;