import clsx from "clsx";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const resource = [
  "assets/carousel/proyecto-1.png",
  "assets/carousel/proyecto-2.png",
  "assets/carousel/proyecto-4.png",
  "assets/carousel/proyecto-5.png",
  "assets/carousel/proyecto-1.png",
  "assets/carousel/proyecto-2.png",
  "assets/carousel/proyecto-4.png",
  "assets/carousel/proyecto-5.png",
  "assets/carousel/proyecto-1.png",
  "assets/carousel/proyecto-2.png",
  "assets/carousel/proyecto-4.png",
  "assets/carousel/proyecto-5.png",
  "assets/carousel/proyecto-1.png",
  "assets/carousel/proyecto-2.png",
  "assets/carousel/proyecto-4.png",
  "assets/carousel/proyecto-5.png",
  "assets/carousel/proyecto-1.png",
  "assets/carousel/proyecto-2.png",
  "assets/carousel/proyecto-4.png",
  "assets/carousel/proyecto-5.png",
  "assets/carousel/proyecto-1.png",
  "assets/carousel/proyecto-2.png",
  "assets/carousel/proyecto-4.png",
  "assets/carousel/proyecto-5.png",
];

const WIDTH = 250;  

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [clicked, setClicked] = useState(false)
  const [images, setImages] = useState(resource);
  const [handleCurrentImage, setHanldeCurrentImage] = useState();

    const handlePrev = () => {
        setClicked(true)
        if (currentIndex === 0) return;
        setCurrentIndex(currentIndex - 1);
    };

    const handleNext = () => {
        setClicked(true)
        if (currentIndex === images.length + 1) return;
        setCurrentIndex(currentIndex + 1);
    };

  useEffect(() => {

    const interval = !clicked ? setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000) : setInterval(() => {
        setClicked(false)
      }, 5000)
  
    return () => clearInterval(interval);

  }, [currentIndex, clicked]);

  return (
    <div
        className="max-w-screen-content m-auto items-center justify-center flex flex-col gap-12 overflow-hidden relative transition-transform"
    >
        <h2 class="font-semibold uppercase text-4xl whitespace-nowrap">
            MIRA ALGUNOS DE NUESTROS PROYECTOS MAS DESTACADOS
        </h2>

        <div
            className={clsx(
            "transition-transform gap-4 flex flex-row items-center justify-start p-10 rounded-xl relative duration-700"
            // translate
            )}
            style={{ transform: `translateX(-${currentIndex * 336}px)` }}
        >
            <div
            className={clsx(
                "flex gap-4 items-center transition-transform duration-300"
            )}
            >
            {images.map((url, index) => {
                return (
                  <CarouseItem
                      key={index}
                      url={url}
                      className={clsx({
                      "!h-[550px]": currentIndex === index,
                      })}
                  />
                );
            })}
            </div>
        </div>
        <div className="absolute flex gap-12 top-20 -translate-x-[100%]" >
            <Button className="left-4" onClick={handlePrev}>
                <Icon icon="solar:arrow-left-line-duotone" width={32} />
            </Button>
            <Button className="right-4" onClick={handleNext}>
                <Icon icon="solar:arrow-right-line-duotone" width={32} />
            </Button>
        </div>
    </div>
  );
};

const CarouseItem = ({
  url,
  className,
}) => {
  return (
    <img
      src={url}
      className={clsx(
        "w-80 h-80 object-cover rounded-xl transition-all duration-700",
        className
      )}
    />
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

export default Carousel;
