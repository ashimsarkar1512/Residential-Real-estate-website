import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Navbar = () => {

          const {user,logOut}=useContext(AuthContext)


          const handleSignOut=()=>{
               logOut()
               .then()
               .catch()
          }


            const navLinks=<>
            <li className="mr-3"><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/update'>Update-Profile</NavLink></li>
            <li><NavLink to='/about'>More-About</NavLink></li>
            </>
   return (
       <div className="navbar  rounded-md bg-blue-500 mt-3">
       <div className="navbar-start">
         <div className="dropdown">
           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
           </div>
           <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {
               navLinks
             }
           </ul>
         </div>
         <a className="btn btn-ghost text-xl">HomeCrafters</a>
       </div>
       <div className="navbar-center hidden lg:flex">
         <ul className="menu menu-horizontal px-1">
          {
               navLinks
          }
         </ul>
       </div>
       <div className="navbar-end">
         
       {
        user?
       <div className="flex gap-3">
         <div className="dropdown dropdown-hover">
     <div tabIndex={0} role="button" ><img className="w-8 rounded-full" src={user?.photoURL ||'https://i.ibb.co/BCWmFS4/unnamed.jpg'} alt="" /></div>
         <ul tabIndex={0} className="dropdown-content z-[1] menu  shadow bg-base-100 rounded w-24">
          <li className=" font-bold"><a>{user?.displayName || "user name not found"}</a></li>
         
        </ul>
          </div>
        <button  onClick={handleSignOut} className="text-sm border bg-blue-400">signOut</button>
       </div>
        :
         <Link to='/login'><button className="text-sm p-2 rounded-md  border bg-green-500">Login</button></Link>
       }
      
       </div>
     </div>
   );
};

export default Navbar;