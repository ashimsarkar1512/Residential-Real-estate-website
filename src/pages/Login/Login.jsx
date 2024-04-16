import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import './login.css'
import { FcGoogle } from "react-icons/fc";

const Login = () => {

       const [loginFailed,setLoginFailed]=useState('')
       const [loginSuccess,setLoginSuccess]=useState('')
       const [showPassword,setShowPassword]=useState(false);
       const location=useLocation();
       const navigate=useNavigate();


      const {signInUser,googleLogin,githubLogin}=useContext(AuthContext)


      const {
        register,
        handleSubmit,
        
        formState: { errors },
      } = useForm ()

           const handleLogin=data=>{
           
            const {email,password}=data;

            if (password.length<6){
              setLoginFailed (toast.error('password at list 6 characters'))
              return;
            }
            else if(!/[A-Z]/.test(password)){
              setLoginFailed (toast.error('password should be one uppercase'))
              return;
            }
            else if(!/[a-z]/.test(password)){
              setLoginFailed (toast.error('password should be one lowercase'))
              return;
            }
               

            signInUser(email,password)
            .then(result=>{
              console.log(result.user); 
              setLoginSuccess(toast.success('Login successfully'))

            setTimeout(()=>{
              navigate(location?.state? location.state:'/')
            },3000);
            })
            .catch(error=>{
              console.error(error)
              setLoginFailed(toast.error("log in failed"))
            })
            }

            const handleSocialLogin=socialProvider=>{
              socialProvider()
              .then(result=>{
                if(result.user){
                  setLoginSuccess(toast.success("login successfully "))
                  setTimeout(()=>{
                    navigate(location?.state? location.state:'/')
                  },3000);
                }
              
              })
            }
          
            return (
                        <div className="glass my-5 ">
                          <Helmet>
                            <title> Login page</title>
                          </Helmet>
                                 <div className=" form my-3  ">
                                    <h2 className="text-3xl text-center   ">Please login</h2>
      <form onSubmit={handleSubmit(handleLogin)}  className=" rounded-md md:w-3/2 lg:3/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input text-black input-bordered" {...register("email", { required: true })}  />
          {errors.email && <span className="text-red-700">This field is required</span>}
        </div>
        <div className="form-control relative">
                      <label className="label">
                        <span className="label-text text-white">Password</span>
                      </label>
                      <input   type={ showPassword? "text":"password"}
                       placeholder="password" name="password"
                        className="input text-black input-bordered" {...register("password", { required: true })} />
                      {errors.password && <span className="text-red-700">This field is required</span>}
                      <span className="absolute right-5 bottom-4" onClick={()=>setShowPassword(!showPassword)}>
                        {
                          showPassword? <FaEyeSlash className="text-black"></FaEyeSlash>:<FaEye className="text-black"></FaEye>
                        }
                        </span>
                       
                    </div>
        <div className="form-control mt-6">
          <button className="btn btn-secondary">Login</button>
        </div>
      </form>
      <p className="text-center text-xl my-3"> An new account <Link className=" text-green-600 font-bold" to='/register'>Register</Link></p>
       
    <ToastContainer></ToastContainer>
                <p className="text-2xl font-semibol my-2 text-center">OR</p>  
                <hr className="my-3" />
           <div className="flex mb-5 justify-center mx-auto gap-8 "> 

          

            <button
            onClick={()=>handleSocialLogin(googleLogin)}
             className=" text-5xl"><FcGoogle /></button>
            <button
            onClick={()=>handleSocialLogin(githubLogin)}
             className="text-5xl"><FaGithub /></button>
           </div>
           </div>
                        </div>
            );
};

export default Login;