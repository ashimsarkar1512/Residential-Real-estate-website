

const Category = () => {
            return (
                        <div className="flex flex-col md:flex-row lg:flex-row gap-5 my-14">

                                    <div className="card  bg-base-100 shadow-xl transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30">
                                                <figure data-aos="flip-left"
                                                            data-aos-easing="ease-out-cubic"
                                                            data-aos-duration="2000" className="px-10 pt-10">
                                                            <img src="https://i.ibb.co/rpw6wnr/Buy-a-home.webp" alt="Shoes" className="rounded-xl" />
                                                </figure>
                                                <div className="card-body items-center text-center" data-aos="fade-up"
                                                            data-aos-duration="3000">
                                                            <h2 className="card-title">Browse homes</h2>
                                                            <p>Find your place with an immersive photo experience and the most listings, including things you wont find anywhere else.</p>
                                                            <div className="card-actions">
                                                                        <button className=" border-2 px-3 py-2 border-blue-400 rounded-md">Browse homes</button>
                                                            </div>
                                                </div>
                                    </div>
                                    <div className="card  bg-base-100 shadow-xl transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30">
                                                <figure data-aos="flip-left"
                                                            data-aos-easing="ease-out-cubic"
                                                            data-aos-duration="2000" className="px-10 pt-10">
                                                            <img src="https://i.ibb.co/2hv0sMf/Rent-a-home.webp" alt="Shoes" className="rounded-xl" />
                                                </figure>
                                                <div className="card-body items-center text-center" data-aos="fade-up"
                                                            data-aos-duration="3000">
                                                            <h2 className="card-title">Rent a home</h2>
                                                            <p>We are creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.</p>
                                                            <div className="card-actions">
                                                                        <button className=" border-2 px-3 py-2 border-blue-400 rounded-md">Rent a home</button>
                                                            </div>
                                                </div>
                                    </div>
                                    <div className="card  bg-base-100 shadow-xl transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30">
                                                <figure data-aos="flip-left"
                                                            data-aos-easing="ease-out-cubic"
                                                            data-aos-duration="2000" className="px-10 pt-10">
                                                            <img src="https://i.ibb.co/rc6WhJD/Sell-a-home.webp" alt="Shoes" className="rounded-xl" />
                                                </figure>
                                                <div className="card-body items-center text-center " data-aos="fade-up"
                                                            data-aos-duration="3000">
                                                            <h2 className="card-title">Sell a home</h2>
                                                            <p>No matter what path you take to sell your home,you know that we can help you navigate a successful sale.</p>
                                                            <div className="card-actions">
                                                                        <button className=" border-2 px-3 py-2 border-blue-400 rounded-md">Sell a home</button>
                                                            </div>
                                                </div>
                                    </div>

                        </div>
            );
};

export default Category;