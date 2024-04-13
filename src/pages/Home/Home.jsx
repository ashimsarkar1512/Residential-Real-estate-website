import Banner from "./Banner";
import { useLoaderData } from "react-router-dom";
import EstateSection from "./EstateSection/EstateSection";
import Category from "./category/Category";


const Home = () => {
    const esate = useLoaderData();
    console.log(esate);
    return (
        <div>

            <div className="my-10"><Banner></Banner> </div>
            <div className="text-center" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">
                <h1 className="text-3xl font-semibold mb-5">Featured Estate</h1>
                <h2 className="text-2xl font-medium ">Time to put your real estate listing description to work! </h2>
            </div>
            <div className="grid grid-cols-1  lg:grid-cols-3  gap-7 my-10 mb-20">

                {
                    esate.map(singleEsate => <EstateSection key={singleEsate.id} esate={singleEsate}></EstateSection>)
                }

            </div>
            <h2 className="text-2xl font-semibold text-center ">About Zillow s Recommendations</h2>
            <Category></Category>
        </div>
    );
};

export default Home;