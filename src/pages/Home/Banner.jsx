import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Banner = () => {
            return (
                        <div className='my-7'>
                                    <Swiper

                                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                                spaceBetween={50}
                                                slidesPerView={1}
                                                navigation
                                                pagination={{ clickable: true }}
                                               
                                                onSwiper={(swiper) => console.log(swiper)}
                                                onSlideChange={() => console.log('slide change')}
                                    >
                                                <SwiperSlide><img className='' src="https://i.ibb.co/qkxMn2z/pexels-binyamin-mellish-186077.jpg" alt="" /></SwiperSlide>
                                                <SwiperSlide><img src="https://i.ibb.co/L6pwB3H/pexels-max-vakhtbovycn-5997994.jpg" alt="" /></SwiperSlide>
                                                <SwiperSlide><img src="https://i.ibb.co/QMp1QYg/pexels-pixabay-248837.jpg" alt="" /></SwiperSlide>
                                                <SwiperSlide><img src="https://i.ibb.co/mFCF3Tg/pexels-pixabay-280229.jpg" alt="" /></SwiperSlide>
                                                
                                    </Swiper>
                        </div>
            );
};

export default Banner;