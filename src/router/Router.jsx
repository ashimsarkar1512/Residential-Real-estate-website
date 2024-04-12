import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NotFound from "../pages/Not found/NotFound";
import EstateDetails from "../pages/EstateDetails/EstateDetails";
import PrivateRoute from "./privateRoute/PrivateRoute";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";

 

 const router=createBrowserRouter([
            {
                        path:"/",
                        element:<Root></Root>,
                        errorElement:<NotFound></NotFound>,
                        children:[
                              {
                                    path:"/",
                                    element:<Home></Home>,
                                    loader:()=>fetch('/Residential.json')
                              },
                              {
                                     path:"/update",
                                     element:<UpdateProfile></UpdateProfile>
                              },
                              {
                                 path:'/estate/:id',
                                 element:<PrivateRoute><EstateDetails></EstateDetails></PrivateRoute>,
                                 loader:()=>fetch('/Residential.json')


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