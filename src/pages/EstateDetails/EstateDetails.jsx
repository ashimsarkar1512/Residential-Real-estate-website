import { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, useLoaderData } from "react-router-dom"

const EstateDetails = () => {
      const estateDetails = useLoaderData();
      console.log(estateDetails)
      const { id } = useParams()
      const [details, setDetails] = useState([]);

      useEffect(() => {
            const findDetails = estateDetails.find((item) => item.id === id)
            setDetails(findDetails)
      }, [])
      console.log(details)

      const { estate_title, image, segment_name, description, price, status, area, location, facilities } = details
      return (

            <section className=" dark:text-gray-800">
                  <Helmet>
                        <title>Estate Details</title>
                  </Helmet>
                  <div className="container max-w-6xl my-5  mx-auto space-y-6 sm:space-y-12">
                        < a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                              <img data-aos="fade-right"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine" src={image} alt="" className="object-cover h-80 rounded sm:h-96 lg:col-span-6  dark:bg-gray-500" />
                              <div data-aos="fade-left"
                                    data-aos-anchor="#example-anchor"
                                    data-aos-offset="500"
                                    data-aos-duration="500" className="p-6 space-y-2 lg:col-span-6">
                                    <h3 className="text-2xl font-semibold ">{estate_title}</h3>
                                    <h1 className="text-xl font-medium">{segment_name}</h1>
                                    <p>{description}</p>

                                    <p>Price : {price}</p>
                                    <p>Status : {status}</p>
                                    <p>area : {area}</p>

                                    <p>Location : {location}</p>
                                    <div>
                                          facilities :
                                          {facilities?.map(facilitie => <li key={facilitie} className="mr-3 rounded-sm "> {facilitie}</li>)}
                                    </div>
                              </div>
                        </a>


                  </div>
            </section>
      );
};

export default EstateDetails;