import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Provider/AuthProvider";

    

const UpdateProfile = () => {
  
       const {updateUserProfile}=useContext(AuthContext)
     
          const handleUpdateProfile=e=>{
            e.preventDefault()
            const name=e.target.name.value
            const photo=e.target.photo.value
            
            updateUserProfile(name,photo,{
              displayName:name,
              photoURL:photo
            })
           
          }
      

        
      
           return (
                <div>
                  <Helmet>
                    <title> Update Profile</title>
                  </Helmet>
                    <div className="hero my-5">
                  <div className="hero-content flex-col ">
                    <div className="text-center ">
                      <h1 className="text-4xl font-bold">Update Profile</h1>
                      
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                      <form onSubmit={handleUpdateProfile}  className="card-body">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Name</span>
                          </label>
                          <input type="text" name="name"  className="input input-bordered"  required  />
                        </div>
                      
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">photo URL</span>
                          </label>
                          <input type="text" name="photo"  className="input input-bordered"  required    />
                        </div>
                      
                        <div className="form-control mt-6">
                          <button  type="submit" className="btn btn-primary">submit</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                </div>
            );
};

export default UpdateProfile;