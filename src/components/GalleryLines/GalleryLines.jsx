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
      scrollbar={{ visible: false }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {props.array.map((screen) => {
        return (
          <SwiperSlide>
            <img className="swiper__img" style={{height: props.height, width: props.width}} src={screen.image} alt={screen.name} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default GalleryLines;
