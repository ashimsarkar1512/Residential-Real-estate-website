import {Outlet} from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Root = () => {
            return (
                       <div>
                         <div className="mx-auto max-w-6xl px-5">
                                <Navbar></Navbar>
                                <Outlet></Outlet>   
                                 
                        </div>
                        <div>
                        <Footer></Footer>    
                        </div>
                       </div>
            );
};

export default Root;