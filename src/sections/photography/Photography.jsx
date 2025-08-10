// Import Swiper React components
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Typed from "typed.js";

// import required modules
import { Pagination } from "swiper";

import photos from "./data";
import Testimonial from "./Photograph";
import "./photography.css";

const Testimonials = () => {
    return (
        <section id="photography">
            <h2>Bee4Brendan Photography</h2>
            <p>Vision Is The Art Of Seeing What Is Invisible To Others</p>
            <div className="container">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    breakpoints={{
                        601: { slidesPerView: 2 },
                        1025: { slidesPerView: 3 },
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    autoplay={true}
                    className="mySwiper"
                >
                    {photos.map((photo) => (
                        <SwiperSlide key={photo.id}>
                            <Testimonial testimonial={photo} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;
