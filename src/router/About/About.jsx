import { Helmet } from "react-helmet-async";


const About = () => {
            return (
                        <div className="flex flex-col md:flex-col lg:flex-row gap-5 my-10"> 
                        <Helmet>
                          <title>More About</title>
                        </Helmet>

                       <div className="card  bg-base-100 shadow-xl">
                     
                        <div className="card-body items-center text-center">
                          <h2 className="card-title">FORECLOCURES</h2>
                          <p>Search more than 1.4 million foreclocures,preforeclocures,bankruptcy and text lien listings convenently in one place</p>
                       
                        </div>
                        <figure className="px-10 pb-7">
                          <img src="https://i.ibb.co/rbDcMyL/icon-usa.png" alt="Shoes" className="rounded-xl" />
                        </figure>
                      </div> 
                       <div className="card bg-base-100 shadow-xl">
                     
                        <div className="card-body items-center text-center">
                          <h2 className="card-title">CONTRACTS</h2>
                          <p>Home sales packages are available for each state and can be previewed before purchanged and all forms are sold with a satisfaction guarantee.</p>
                       
                        </div>
                        <figure className="px-10 pb-7 ">
                          <img src="https://i.ibb.co/D40p4sd/icon-contract.png" alt="Shoes" className="rounded-xl" />
                        </figure>
                      </div> 
                       <div className="card  bg-base-100 shadow-xl">
                     
                        <div className="card-body items-center text-center">
                          <h2 className="card-title">SIGNS & MORE</h2>
                          <p>The FSBO store offers additional tools to help you successfully sell your home</p>
                       
                        </div>
                        <figure className="px-10 pb-7 ">
                          <img src="https://i.ibb.co/w4HHFsQ/icon-signs.png" alt="Shoes" className="rounded-xl" />
                        </figure>
                      </div> 


                        </div>
            );
};

export default About;