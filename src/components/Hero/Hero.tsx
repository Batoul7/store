import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import SlideImg1 from '../../assets/sliderImg/st.webp'
import SlideImg2 from '../../assets/sliderImg/s1.webp'
import SlideImg3 from '../../assets/sliderImg/s3.webp'
import SlideImg4 from '../../assets/sliderImg/s4.webp'
import SlideImg5 from '../../assets/sliderImg/s5.webp'


const sliderData = [
  {
    title: "Timeless Men's Fashion",
    description: "Discover a refined collection of men's fashion that blends comfort with sophistication for every occasion.",
    image: SlideImg2,
  },
  {
    title: "Smart Tech, Smarter Living",
    description: "Explore the latest electronic devices and innovative gadgets designed to enhance your everyday life.",
    image: SlideImg1,
  },
  {
    title: "Elegant Women's Style",
    description: "Shop the finest selection of women's fashion, designed to keep you trendy and elegant in every season.",
    image: SlideImg3,
  },
  {
    title: "Luxury in Every Detail",
    description: "Indulge in exquisite jewelry collections that embody elegance, sophistication, and timeless beauty.",
    image: SlideImg4,
  },
  {
    title: "Trendy & Urban Wear",
    description: "Express your unique style with our trendy and contemporary fashion pieces designed for modern youth.",
    image: SlideImg5,
  },
];



const Carousel: React.FC = () => {
  const [background, setBackground] = useState(sliderData[0].image);
  const [title, setTitle] = useState(sliderData[0].title);
  const [description, setDescription] = useState(sliderData[0].description);
  
  const sliderRef = useRef<Slider | null>(null);

  const handlePrev = () => sliderRef.current?.slickPrev();
  const handleNext = () => sliderRef.current?.slickNext();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "100px",
    nextArrow: <></>,
    prevArrow: <></>,
    beforeChange: (_: number, next: number) => {
      setBackground(sliderData[next].image);
      setTitle(sliderData[next].title);
      setDescription(sliderData[next].description);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow:1,
          centerPadding: "10px", 
        },
      },
    ],
  };

  return (
    <div
    className="relative w-full flex items-center justify-center transition-all duration-500 ease-in-out h-auto md:h-[calc(100vh-121px)] bg-cover bg-center"
    style={{
      backgroundImage: `url(${background})`,
    }}
    >
      <div className="container mx-auto">
        <div className="absolute inset-0 bg-blue-200/25"></div>
        <div className="relative w-full mx-auto z-10 flex flex-col md:flex-row items-center justify-between gap-5 md:gap-10 p-5">
          <div className="w-full md:w-1/2  text-center md:text-left md:mb-0 bg-black/50 p-5 flex flex-col gap-4 ">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-400">{title}</h1>
            <p className="text-base md:text-lg text-white">{description}</p>
            <button className="w-fit mx-auto md:mx-0 px-3 py-2 border border-blue-400 text-white rounded-lg hover:bg-blue-400 transition">
              Read More
            </button>
          </div>

          <div className="w-full md:w-1/2">
            <Slider ref={(slider) => (sliderRef.current = slider)} {...settings}>
              {sliderData.map((item, index) => (
                <div key={index} className="px-2">
                  <div className="relative h-[250px] md:h-[300px] rounded-xl overflow-hidden shadow-lg">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-xl" />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="absolute bottom-0 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
          <button onClick={handlePrev} className="text-blue-400 w-9 h-9 bg-white/60 hover:bg-blue-400 hover:text-white cursor-pointer">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button onClick={handleNext} className="text-blue-400 w-9 h-9 bg-white/60 hover:bg-blue-400  hover:text-white cursor-pointer">
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
