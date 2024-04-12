import Banner from "./Banner";
import {useLoaderData} from "react-router-dom";
import EstateSection from "./EstateSection/EstateSection";


const Home = () => {
       const esate =useLoaderData();
       console.log(esate);
            return (
                        <div>
                            
                               <Banner></Banner>  

                               <div className="grid grid-cols-3 gap-7 my-10 ">

                               {
                                   esate.map(singleEsate=><EstateSection key={singleEsate.id} esate={singleEsate}></EstateSection>)
                               }  
                                   
                              </div>   
                        </div>
            );
};

export default Home;