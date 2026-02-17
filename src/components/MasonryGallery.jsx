import { useEffect, useState } from "react";

//gallery images
import fruits from "../assets/images/home/fruits.webp";
import vegetables from "../assets/images/home/vegetables.webp";
import smoothiePour from "../assets/images/home/smoothie-pour.webp";
import fruitCloseup from "../assets/images/home/fruit-closeup.webp";
import kitchenPrep from "../assets/images/home/kitchen-prep.webp";
import peanutButter from "../assets/images/home/peanut-butter-smoothie.webp";

export default function MasonryGallery() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const galleryItems = [
    { src: fruits, mobile: 16, desktop: 22 },
    { src: vegetables, mobile: 14, desktop: 18 },
    { src: smoothiePour, mobile: 18, desktop: 26 },
    { src: fruitCloseup, mobile: 12, desktop: 16 },
    { src: kitchenPrep, mobile: 16, desktop: 20 },
    { src: peanutButter, mobile: 16, desktop: 20 },
  ];

  return (
    <div
      className="
        grid
        grid-cols-2
        md:grid-cols-4
        gap-4
        auto-rows-[12px]
        md:auto-rows-[8px]
      "
    >
      {galleryItems.map((item, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-2xl bg-gray-100"
          style={{
            gridRowEnd: `span ${isMobile ? item.mobile : item.desktop}`,
          }}
        >
          <img
            src={item.src}
            alt="Fresh healthy food"
            className="absolute inset-0 w-full h-full object-cover
                       transition-transform duration-500 hover:scale-[1.03]"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
