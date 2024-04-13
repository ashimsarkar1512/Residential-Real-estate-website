import { Link } from "react-router-dom";

const EstateSection = ({ esate }) => {
      const { estate_title, image, segment_name, id, description, price, status, area, location, button_text } = esate
      return (
            
            <div>

                  
                  <div className="card  bg-base-100 shadow-xl">
                        <figure data-aos="flip-left"
                              data-aos-easing="ease-out-cubic"
                              data-aos-duration="2000"><img src={image} alt="Shoes" /></figure>
                        <div className="card-body" >
                              <h2 data-aos="fade-up"
                          data-aos-duration="3000" className="card-title">{estate_title}</h2>
                              <h1 data-aos="fade-up"
                          data-aos-duration="2000" className="font-bold">{segment_name}</h1>
                              <p data-aos="fade-up"
                          data-aos-duration="1000" >{description}</p>
                              <div data-aos="fade-up"
                          data-aos-duration="500"  className="flex">
                                    <p>{price}</p>
                                    <p>{status}</p>
                                    <p>{area}</p>
                              </div>
                              <p data-aos="fade-up"
                          data-aos-duration="1000" >{location}</p>

                              <Link to={`/estate/${id}`}><button data-aos="fade-up"
                          data-aos-duration="4000" className="bg-green-600 p-3 w-full rounded-xl">{button_text}</button></Link>
                        </div>
                  </div>
            </div>
      );
};

export default EstateSection;