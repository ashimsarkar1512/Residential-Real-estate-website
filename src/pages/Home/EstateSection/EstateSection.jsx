import { Link } from "react-router-dom";

const EstateSection = ({ esate }) => {
      const { estate_title,image,segment_name, id,description,price,status,area,location,button_text } = esate
      return (
            <div>
                  <div className="card  bg-base-100 shadow-xl">
                        <figure><img src={image} alt="Shoes" /></figure>
                        <div className="card-body">
                              <h2 className="card-title">{estate_title}</h2>
                              <h1 className="font-bold">{segment_name}</h1>
                              <p>{description}</p>
                              <div className="flex">
                                    <p>{price}</p>
                                    <p>{status}</p>
                                    <p>{area}</p>
                              </div>
                              <p>{location}</p>

                              <Link to={`/estate/${id}`}><button className="bg-green-600 p-3 w-full rounded-xl">{button_text}</button></Link>
                        </div>
                  </div>
            </div>
      );
};

export default EstateSection;