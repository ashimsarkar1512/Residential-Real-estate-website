import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NotFound from "../pages/Not found/NotFound";

 

 const router=createBrowserRouter([
            {
                        path:"/",
                        element:<Root></Root>,
                        errorElement:<NotFound></NotFound>,
                        children:[
                              {
                                    path:"/",
                                    element:<Home></Home>
                              },
                              {
                                    path:"/login",
                                    element:<Login></Login>
                              }  ,
                              {
                                    path:"/register",
                                    element:<Register></Register>
                              }   
                        ]
            }
 ])

 export default router;