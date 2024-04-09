import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";



const Register = () => {
              
       const {createUser}=useContext(AuthContext);



       const {
        register,
        handleSubmit,formState: { errors },
      } = useForm ();

      const handleRegister= data =>{
        const {email,password}=data;

         createUser(email,password)
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
                                                <h2 className="text-3xl text-center my-10">Please Register</h2>
                  <form onSubmit={handleSubmit(handleRegister)} className=" md:w-3/4 lg:1/2 mx-auto">
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
                      <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" {...register("name", { required: true })} />
                      {errors.name && <span className="text-red-700">This field is required</span>}
                    </div>
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
                      <button className="btn btn-primary">Register</button>
                    </div>
                  </form>
                  <p className="text-center my-6">All ready have an account <Link className=" text-blue-600 font-bold" to='/login'>Login</Link></p>
                </div>
                                    
                        </div>
            );
};

export default Register;