import "./GalleryLines.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { A11y } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([A11y]);

const GalleryLines = (props) => {
  return (
    <Swiper
      spaceBetween={0}
      effect="fade"
      slidesPerView={1}
      allowTouchMove={true}
      scrollbar={ false }
      
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    > {props.array.map((image)=> {
      return (
        <SwiperSlide key={image}>
        <img className="swiper__img" style={{height: props.height, width: props.width}} src={image} alt={image} key={image} />
        </SwiperSlide>
      )
    })}
    
    </Swiper>
  );
};

export default GalleryLines;
