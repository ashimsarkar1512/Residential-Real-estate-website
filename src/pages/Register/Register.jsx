import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye,FaEyeSlash } from 'react-icons/fa';



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
          setRegisterError (toast.error('password should be 6 characters'))
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
         .then(result=>{
          console.log(result.user);
          setSuccess(toast.success('register successfully'))
         })
         .catch(error=>{
          console.error(error)
          setRegisterError (toast.error(error.message))
         })
        
        
        } 
    

      

         
            return (
                        <div>
                                    <div className=" ">
                                                <h2 className="text-3xl text-center my-6">Please Register</h2>
                  <form onSubmit={handleSubmit(handleRegister)} className=" md:w-1/2 lg:1/2 mx-auto">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input type="text" placeholder="Name" name="name" className="input input-bordered" {...register("name", { required: true })} />
                      {errors.name && <span className="text-red-700">This field is required</span>}
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Photo URL</span>
                      </label>
                      <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" {...register("photo", { required: true })} />
                      {errors.photo && <span className="text-red-700">This field is required</span>}
                    </div>
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