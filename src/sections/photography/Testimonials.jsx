// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"

// import required modules
import { Pagination } from "swiper"


import photos from './data'
import Testimonial from "./Testimonial";
import './testimonials.css'


const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>Best of Bee4Brendan Photography</h2>
      <p>
      A memory is a photograph taken by the heart to make a special moment last eternally. 
      </p>
      <div className="container">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          601: {slidesPerView: 2},
          1025: {slidesPerView: 3}
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={true}
        className="mySwiper"
      >
        {
          photos.map(photo => (
            <SwiperSlide key={photo.id}>
              <Testimonial testimonial={photo}/>
            </SwiperSlide>
          ))
        }
      </Swiper>
      </div>
    </section>
  )
}

export default Testimonials