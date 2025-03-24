// // components/HeroSlider/HeroSlider.jsx
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
// import { Button } from "@mui/material";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "swiper/css/effect-fade";
// import "./HeroSlider.css";

// const HeroSlider = ({ slides }) => {
//   return (
//     <div className="hero-slider">
//       <Swiper
//         spaceBetween={0}
//         slidesPerView={1}
//         centeredSlides={true}
//         effect={"fade"}
//         autoplay={{
//           delay: 5000,
//           disableOnInteraction: false,
//         }}
//         // pagination={{
//         //   clickable: true,
//         // }}
//         // navigation={true}
//         modules={[Autoplay, Pagination, Navigation, EffectFade]}
//         className="mySwiper"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index} className="swiper-slide">
//             {console.log(slide.image)} {/* Check if the image path is valid */}
//             <div
//               className="hero-slide"
//               style={{ backgroundImage: `url(${slide.image})` }}
//             >
//               <div className="hero-overlay"></div>
//               <div className="hero-content">
//                 <div className="hero-subtitle">{slide.subtitle}</div>
//                 <h1 className="hero-title">{slide.title}</h1>
//                 {slide.description && (
//                   <p className="hero-description">{slide.description}</p>
//                 )}
//                 {slide.button && (
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     href={slide.button.url}
//                     className="mui-button hero-button"
//                   >
//                     {slide.button.text}
//                   </Button>
//                 )}
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default HeroSlider;


// components/HeroSlider/HeroSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Button } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./HeroSlider.css";

const HeroSlider = ({ slides, language = "english" }) => {
  const localizedSlides = slides.home[language].heroSlides; // Now correct after [0] fix above

  return (
    <div className="hero-slider">
      <Swiper
        effect="fade"
        autoplay={{ delay: 5000 }}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper"
      >
        {localizedSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero-slide"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="hero-overlay"></div>
              <div className="hero-content">
                <div className="hero-subtitle">{slide.subtitle}</div>
                <h1 className="hero-title">{slide.title}</h1>
                {slide.button && (
                  <a href={slide.button.url}>
                    <button className="mui-button hero-button">
                      {slide.button.text}
                    </button>
                  </a>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
