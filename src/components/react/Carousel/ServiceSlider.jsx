import clsx from "clsx";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { motion } from 'framer-motion';

import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

const SERVICES = [
  {
      title: "COMERCIALIZACIÓN DE MEDIOS",
      description: ["(Radio, Prensa, TV): Potenciamos tu visibilidad en los medios tradicionales para llegar a una audiencia más amplia.", "(Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard "],
      imageUrl: "/assets/medios.jpg",
      icon: "fluent:slide-microphone-24-regular"
  },
  {
      title: "COMERCIALIZACIÓN DE MEDIOS",
      description: ["(Radio, Prensa, TV): Potenciamos tu visibilidad en los medios tradicionales para llegar a una audiencia más amplia.", "(Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard "],
      imageUrl: "/assets/medios.jpg",
      icon: "fluent:slide-microphone-24-regular"
  },
  {
      title: "COMERCIALIZACIÓN DE MEDIOS",
      description: ["(Radio, Prensa, TV): Potenciamos tu visibilidad en los medios tradicionales para llegar a una audiencia más amplia.", "(Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard "],
      imageUrl: "/assets/medios.jpg",
      icon: "fluent:slide-microphone-24-regular"
  },
  {
      title: "COMERCIALIZACIÓN DE MEDIOS",
      description: ["(Radio, Prensa, TV): Potenciamos tu visibilidad en los medios tradicionales para llegar a una audiencia más amplia.", "(Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard "],
      imageUrl: "/assets/medios.jpg",
      icon: "fluent:slide-microphone-24-regular"
  },
  {
      title: "COMERCIALIZACIÓN DE MEDIOS",
      description: ["(Radio, Prensa, TV): Potenciamos tu visibilidad en los medios tradicionales para llegar a una audiencia más amplia.", "(Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard "],
      imageUrl: "/assets/medios.jpg",
      icon: "fluent:slide-microphone-24-regular"
  },
]


const ServiceSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clicked, setClicked] = useState(false)
  const [handleCurrentImage, setHanldeCurrentImage] = useState();


  return (
    <div className="w-full absolute mx-auto top-[30%] py-40">
        <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={60}
            slidesPerView={'auto'}
            navigation
            pagination={{ clickable: true }}
            loop
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex * 3 / 3)}
            //  onSwiper={(swiper) => console.log(swiper)}            
        >

            {SERVICES.map((props, index) => {
                return (
                <SwiperSlide key={index} style={{
                    width: currentIndex === index ? "50%" :  "20%",
                    height: currentIndex === index ? "360px" : "120px",
                    transition: "all",
                }}>
                    <Item {...props} />
                </SwiperSlide>
                );
            })}
        </Swiper>

    </div>
  );
};

const Item = ({
  imageUrl,
  description, 
  title,
  icon,
  expanded
}) => {
  return (
    <article id="service" class="service bg-gradient-to-b h-[26rem] min-w-80 hover:min-w-[70%] duration-500 group overflow-hidden transition-all from-zinc-800/80 to-zinc-950/80 backdrop-blur-2xl py-4 px-6 rounded-xl border border-white/10 flex flex-col hover:flex-row gap-10">
    <aside class="flex flex-col gap-4 items-center justify-between h-full w-fit">
        <header class={clsx("flex w-fit flex-col gap-2 items-center justify-between group-hover:flex-row group-hover:items-start")}>
            <div class="w-14 h-14 whitespace-break-spaces bg-violet-600 rounded-lg flex items-center justify-center flex-grow">
                <Icon icon={icon} width="32" client:load />
            </div>
            <h3 class="text-center group-hover:block hidden group-hover:text-start font-semibold text-xl group-hover:text-lg">{title}</h3>
        </header>
        <h3 class="block group-hover:hidden text-center group-hover:text-start font-semibold text-xl group-hover:text-lg">{title}</h3>
        
        <div class="group-hover:block hidden min-w-56">
            {description.map((text) => <p class="mb-2">{text}</p>)}
        </div>
        <button class="bg-white w-fit text-zinc-800 whitespace-nowrap px-8 py-3 rounded-full">
            Adquirir Servicios
        </button>
    </aside>
    
    <img src={imageUrl} class="group-hover:block hidden rounded-xl" alt="" />
</article>
  );
};

const Button = (props) => {
  return (
    <button
      {...props}
      className={clsx(
        "w-12 h-12 bg-none border backdrop-blur-xl border-white rounded-full flex items-center justify-center z-10 !text-white",
        props.className
      )}
    >
      {props.children}
    </button>
  );
};

export default ServiceSlider;
