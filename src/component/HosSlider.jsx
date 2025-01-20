import Slider from "react-slick";

import "./Slider.css";
import HospitalSlide from "./HospitalSlide";

const HosSlider = () => {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true
      };
    

  return (
    <div className="bg-white rounded-sm slider-container">
      <Slider {...settings}>
        <div>
          <HospitalSlide />
        </div>
        <div>
          <HospitalSlide />
        </div>
        <div>
          <HospitalSlide />
        </div>
        <div>
          <HospitalSlide />
        </div>
      </Slider>
    </div>
  );
};

export default HosSlider;
