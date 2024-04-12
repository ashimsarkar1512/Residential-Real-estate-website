import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from "react-icons/fa";


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
              setLoginFailed (toast.error('password should be 6 characters'))
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

               navigate(location?.state? location.state:'/')
            })
            .catch(error=>{
              console.error(error)
              setLoginFailed(toast.error(error.message))
            })
            }

            const handleSocialLogin=socialProvider=>{
              socialProvider()
              .then(result=>{
                if(result.user){
                   navigate(location?.state || '/');
                }
              
              })
            }
          
            return (
                        <div>
                                 <div className=" ">
                                    <h2 className="text-3xl text-center my-6 ">Please login</h2>
      <form onSubmit={handleSubmit(handleLogin)}  className=" border-2 p-3 rounded-md md:w-1/2 lg:1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" {...register("email", { required: true })}  />
          {errors.email && <span className="text-red-700">This field is required</span>}
        </div>
        <div className="form-control relative">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input type={showPassword? "text":"password"}
                       placeholder="password" name="password"
                        className="input input-bordered" {...register("password", { required: true })} />
                      {errors.password && <span className="text-red-700">This field is required</span>}
                      <span className="absolute right-5 bottom-4" onClick={()=>setShowPassword(!showPassword)}>
                        {
                          showPassword? <FaEye></FaEye>:<FaEyeSlash></FaEyeSlash>
                        }
                        </span>
                       
                    </div>
        <div className="form-control mt-6">
          <button className="btn btn-secondary">Login</button>
        </div>
      </form>
      <p className="text-center my-2">Dont have an account <Link className=" text-purple-600 font-bold" to='/register'>Register</Link></p>
    </div>    
    <ToastContainer></ToastContainer>
                <p className="text-2xl font-semibold text-yellow-800 my-2 text-center">social Login</p>  
           <div className="flex mb-5 justify-center mx-auto gap-16 "> 

          

            <button
            onClick={()=>handleSocialLogin(googleLogin)}
             className="btn text-primary bg-white btn-outline border-2 my-2">Google</button>
            <button
            onClick={()=>handleSocialLogin(githubLogin)}
             className="btn text-secondary bg-white btn-outline border-2 my-2">Github</button>
           </div>
                        </div>
            );
};

export default Login;