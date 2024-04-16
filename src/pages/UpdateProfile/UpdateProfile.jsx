import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Provider/AuthProvider";
import"./updateProfile.css"
import auth from "../../firebase/firebase.config";
import { updateProfile } from "firebase/auth";

    

const UpdateProfile = () => {
        
     
     
          const handleUpdateProfile=e=>{
            e.preventDefault()
            const name=e.target.name.value
            const photo=e.target.photo.value
           

            updateProfile(auth.currentUser, {
              displayName: name, photoURL:photo
            }).then(() => {
              
              window.location.reload()
            }).catch(() => {
             
            });
            
           
          }
      

        
      
           return (
                <div data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="3000" className="update my-5">
                  <Helmet>
                    <title> Update Profile</title>
                  </Helmet>
                    <div className="my-5 profile">
                  <div data-aos="fade-up"
                   data-aos-duration="3000" className=" flex-col ">
                    <div className="text-center ">
                      <h1 className="text-4xl font-bold text-white mt-5">Update Profile</h1>
                      
                    </div>
                    <div className=" shrink-0 w-full max-w-sm shadow-2xl">
                      <form   onSubmit={handleUpdateProfile}  className="card-body">
                        <div className="form-control">
                          <label className="label"> 
                            <span className="label-text text-white">Name</span>
                          </label>
                          <input type="text" name="name" placeholder="Name" className="input input-bordered"  required  />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text text-white">Email</span>
                          </label>
                          <input type="email" name="email" placeholder="Email" className="input input-bordered"  required  />
                        </div>
                      
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text text-white">photo URL</span>
                          </label>
                          <input type="text" name="photo" placeholder="photo" className="input input-bordered"  required    />
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