import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

// import { doJobSearch } from "@/store/jobPostSlice";
// import { useDispatch } from "react-redux";
// import { useTranslation } from "react-i18next";

const SliderThree = ({
  jobCategoryValue,
  setShowing,
  jobCategoryName,
  dropdownValue,
  workTypeValue,
  page,
  setPage,
}) => {
  const slideCount = 16; // Total number of slides
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const slider = sliderRef.current;

    if (slider) {
      slider.slickGoTo(0); // Start from the first slide
    }
  }, []);
  const handleBeforeChange = (current, next) => {
    setCurrentSlide(next);
  };

  const handleNextSlide = () => {
    if (currentSlide !== slideCount - 1) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrevSlide = () => {
    if (currentSlide !== 0) {
      sliderRef.current.slickPrev();
    }
  };
  const renderCustomDots = () => {
    const dots = [];
    for (let i = 0; i < Math.ceil(slideCount / 6); i++) {
      dots.push(
        <div
          key={i}
          className={`custom-dot ${
            currentSlide >= i * 6 && currentSlide < (i + 1) * 6 ? "active" : ""
          }`}
          onClick={() => sliderRef.current.slickGoTo(i * 6)}
        ></div>
      );
    }
    return dots;
  };

  // const handleScroll = (event) => {
  //   const delta = event.deltaY;
  //   if (delta > 0) {
  //     sliderRef.current.slickNext();
  //   } else if (delta < 0) {
  //     sliderRef.current.slickPrev();
  //   }
  // };

  // const handleSlideDrag = (isDragging) => {
  //   const bodyElement = document.querySelector('body');
  //   bodyElement.style.overflow = isDragging ? 'hidden' : 'auto';
  // }
  useEffect(() => {
    const handleWheelScroll = (event) => {
      event.preventDefault();
      const delta = event.deltaY;
      if (delta > 0) {
        sliderRef.current.slickNext();
      } else if (delta < 0) {
        sliderRef.current.slickPrev();
      }
    };

    const sliderContainer = sliderRef.current.innerSlider.list;
    sliderContainer.addEventListener("wheel", handleWheelScroll, {
      passive: false,
    });

    return () => {
      sliderContainer.removeEventListener("wheel", handleWheelScroll);
    };
  }, []);

  const CustomPrevArrow = ({ onClick }) => (
    <button
      // disabled={slideCount === 0}
      className="slick-arrow"
      onClick={onClick}
    >
      <SlArrowLeft />
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button
      // disabled={currentSlide === slideCount - 1}
      className="slick-arrow-right"
      onClick={onClick}
    >
      <SlArrowRight />
    </button>
  );

  // const handleBeforeChange = (current, next) => {
  //   setCurrentSlide(next);
  // };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    // centerMode: true,
    // centerPadding: "50px",
    // initialSlide: currentSlide,
    // afterChange: (index) => setCurrentSlide(index),
    // prevArrow: currentSlide === 0 ? <PrevArrow /> : <CustomPrevArrow />,
    // nextArrow: currentSlide === slideCount - 1 ? null : <CustomNextArrow />,

    prevArrow: <CustomPrevArrow onClick={handlePrevSlide} />,
    nextArrow: <CustomNextArrow onClick={handleNextSlide} />,
    beforeChange: handleBeforeChange,

    // customPaging: (i) => <div className="h-1 bg-gray-300 my-3" key={i} />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  };


  return (
    <div
      className=" mt-2 lg:mt-12"
      // onWheel={handleScroll}
    >
      <Slider
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
        className="lg:mx-14 2xl:mx-28 bg-white px-12 w-[640px] ml-[-40px] md:-ml-0 md:w-auto flex justify-center items-center"
        {...settings}
        ref={sliderRef}
      >
    
        <div
          onClick={() => sliderSearch("Tourism / Hospitality")}
          className="slider-container bg-[#00b0b01c] backdrop-blur rounded-[5px]"
        >
          <p className="text-lg text-black leading-5 font-bold pt-2">
            Tourism / Hospitality
          </p>
        </div>{" "}
        <div
          className="slider-container bg-[#00b0b01c] backdrop-blur rounded-[5px]"
        >
          <p className="text-lg text-black leading-5 font-bold pt-2">
            Transport / Logistics
          </p>
        </div>{" "}
        <div
          onClick={() => sliderSearch("Customer Service")}
          className="slider-container bg-[#00b0b01c] backdrop-blur rounded-[5px]"
        >
          <p className="text-lg text-white leading-5 font-bold pt-2">
            Customer Service
          </p>
        </div>{" "}
        <div
          className="slider-container bg-[#00b0b01c] backdrop-blur rounded-[5px]"
        >
          <p className="text-lg text-white leading-5 font-bold pt-2">
            Education / Trainings
          </p>
        </div>{" "}
        <div
          className="slider-container bg-[#00b0b01c] backdrop-blur rounded-[5px]"
        >
          <p className="text-lg text-white leading-5 font-bold pt-2">
            Finance / Audit
          </p>
        </div>{" "}
        <div
          className="slider-container bg-[#00b0b01c] backdrop-blur rounded-[5px]"
        >
          <p className="text-lg text-white leading-5 font-bold pt-2">
            Medicine / Healthcare
          </p>
        </div>{" "}
        <div
          className="slider-container bg-[#00b0b01c] backdrop-blur rounded-[5px]"
        >
          <p className="text-lg text-white leading-5 font-bold pt-2">Others</p>
        </div>
      </Slider>
      <div className="custom-dots-container">{renderCustomDots()}</div>
    </div>
  );
};

export default SliderThree;
