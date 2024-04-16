import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye,FaEyeSlash } from 'react-icons/fa';
import { Helmet } from "react-helmet-async";
import './register.css'



const Register = () => {

  const [registerError,setRegisterError]=useState('')
  const [success,setSuccess]=useState('')
  const [showPassword,setShowPassword]=useState(false);
              
       const {createUser}=useContext(AuthContext);



       const {
        register,
        handleSubmit,formState: { errors },
      } = useForm ();

     const handleRegister= data =>{
        const {email,password}=data;

        if (password.length<6){
          setRegisterError (toast.error('password at list 6 characters'))
          return;
        }
        else if(!/[A-Z]/.test(password)){
          setRegisterError (toast.error('password should be one uppercase'))
          return;
        }
        else if(!/[a-z]/.test(password)){
          setRegisterError (toast.error('password should be one lowercase'))
          return;
        }
           
        setRegisterError('')
        setSuccess(' ')
         createUser(email,password)
         .then(()=>{
          setSuccess(toast.success('register successfully'))
         })
         .catch(error=>{
          console.error(error)
          setRegisterError (toast.error(error.message))
         })
        
        
        } 
    

      

         
            return (
                        <div className="register my-4">
                          <Helmet>
                            <title>Register Page</title>
                          </Helmet>
                                    <div className=" register-page ">
                                                <h2 className="text-3xl text-center">Please Register</h2>
                  <form onSubmit={handleSubmit(handleRegister)} className="   md:w-3/2 lg:3/2 mx-auto">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white">Name</span>
                      </label>
                      <input type="text" placeholder="Name" name="name" className="input text-black input-bordered" {...register("name", { required: true })} />
                      {errors.name && <span className="text-red-700">This field is required</span>}
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white ">Photo URL</span>
                      </label>
                      <input type="text" placeholder="Photo URL" name="photo" className="input text-black input-bordered" {...register("photo", { required: true })} />
                      {errors.photo && <span className="text-red-700">This field is required</span>}
                    </div>
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
                      <input type={showPassword? "text":"password"}
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
                      <button className="btn btn-primary">Register</button>
                    </div>
                  </form>
                  
                  <p className="text-center my-6">All ready have an account <Link className=" text-secondary font-bold" to='/login'>Login</Link></p>
                </div>
                <ToastContainer></ToastContainer>
                                    
                        </div>
            );
};

export default Register;