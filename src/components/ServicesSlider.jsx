// ServicesSlider.jsx
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  {
    title: "Weddings",
    image: "https://source.unsplash.com/1600x900/?wedding",
  },
  {
    title: "Surprise Events",
    image: "https://source.unsplash.com/1600x900/?surprise,party",
  },
  {
    title: "Corporate Events",
    image: "https://source.unsplash.com/1600x900/?corporate,event",
  },
  {
    title: "Education Events",
    image: "https://source.unsplash.com/1600x900/?education,seminar",
  },
  {
    title: "Spiritual Gatherings",
    image: "https://source.unsplash.com/1600x900/?spiritual,temple",
  },
];

export default function ServicesSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (
    <section className="h-[75vh] overflow-hidden">
      <Slider {...settings}>
        {services.map((service, index) => (
          <div key={index} className="relative h-[75vh] w-full">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h2 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
                {service.title}
              </h2>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
