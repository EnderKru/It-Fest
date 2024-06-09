import { MainPage } from "../pages/mainPage/mainPage";
import  RegisterPage  from "../pages/auth/auth";
import { NoPage } from "../pages/noPage/noPage";
import { createBrowserRouter } from "react-router-dom";

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <MainPage /> 
    },
    {
        path: '/signup',
        element: <RegisterPage/>
    },
 {
        path: '/*',
        element: <NoPage/> 
    },

]);