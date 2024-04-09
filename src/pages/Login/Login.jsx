import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

import { useForm } from "react-hook-form";


const Login = () => {

      const {signInUser}=useContext(AuthContext)


      const {
        register,
        handleSubmit,
        
        formState: { errors },
      } = useForm ()

           const handleLogin=data=>{
            const {email,password}=data;

            signInUser(email,password)
            .then(result=>{
              console.log(result.user);
            })
            .catch(error=>{
              console.error(error)
            })
            }
          
            return (
                        <div>
                                 <div className=" ">
                                    <h2 className="text-3xl text-center my-10">Please login</h2>
      <form onSubmit={handleSubmit(handleLogin)}  className=" md:w-3/4 lg:1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" {...register("email", { required: true })}  />
          {errors.email && <span className="text-red-700">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" {...register("password", { required: true })} />

          {errors.password && <span className="text-red-700">This field is required</span>}
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="text-center mt-4">Dont have an account <Link className=" text-blue-600 font-bold" to='/register'>Register</Link></p>
    </div>    
                        </div>
            );
};

export default Login;