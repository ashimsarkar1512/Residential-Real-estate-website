
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay,  Navigation } from 'swiper/modules';


const Banner = () => {
            return (
                        <>
                          <Swiper
                            spaceBetween={20}
                            centeredSlides={true}
                            autoplay={{
                             
                              disableOnInteraction: false,
                            }}
                           
                            navigation={true}
                            modules={[Autoplay, Navigation]}
                            className="mySwiper"
                          >
                            <div className='mt-10'>
                            <SwiperSlide><img src="https://i.ibb.co/tKFgvj1/pexels-robert-so-14074856.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide><img src="https://i.ibb.co/0DntBTm/pexels-pixabay-248837.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide><img src="https://i.ibb.co/crY7chn/pexels-pixabay-259637.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide><img src="https://i.ibb.co/KrZMqmy/pexels-pixabay-314937-1.jpg" alt="" /></SwiperSlide>
                           
                            </div>
                           
                          </Swiper>
                        </>
                      );
                    
                    
};

export default Banner;