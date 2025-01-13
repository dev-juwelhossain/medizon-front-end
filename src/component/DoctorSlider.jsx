import Slider from "react-slick";
import SingleSlide from "./SingleSlide";
import "./Slider.css";

const DoctorSlider = () => {
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
    <div className="slider-container rounded-sm bg-white">
      <Slider {...settings}>
        <div>
          <SingleSlide />
        </div>
        <div>
          <SingleSlide />
        </div>
        <div>
          <SingleSlide />
        </div>
        <div>
          <SingleSlide />
        </div>
      </Slider>
    </div>
  );
};

export default DoctorSlider;
