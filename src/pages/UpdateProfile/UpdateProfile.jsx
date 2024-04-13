
    

const UpdateProfile = () => {

     

     
      
           return (
                  <div className="hero my-5">
                  <div className="hero-content flex-col ">
                    <div className="text-center ">
                      <h1 className="text-4xl font-bold">Update Profile</h1>
                      
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                      <form  className="card-body">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Name</span>
                          </label>
                          <input type="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Email</span>
                          </label>
                          <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">photo URL</span>
                          </label>
                          <input type="photo" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                      
                        <div className="form-control mt-6">
                          <button className="btn btn-primary">submit</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
            );
};

export default UpdateProfile;