import fruits from "../assets/images/home/fruits.jpg";
import vegetables from "../assets/images/home/vegetables.jpg";
import smoothiePour from "../assets/images/home/smoothie-pour.jpg";
import fruitCloseup from "../assets/images/home/fruit-closeup.jpg";
import kitchenPrep from "../assets/images/home/kitchen-prep.jpg";

export default function MasonryGallery() {
  const galleryItems = [
    { src: fruits, span: 22 },
    { src: vegetables, span: 18 },
    { src: smoothiePour, span: 26 },
    { src: fruitCloseup, span: 16 },
    { src: kitchenPrep, span: 20 },
  ];

  return (
    <div
      className="
        grid
        grid-cols-2
        md:grid-cols-4
        gap-4
        auto-rows-[8px]
      "
    >
      {galleryItems.map((item, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-2xl bg-gray-100"
          style={{ gridRowEnd: `span ${item.span}` }}
        >
          <img
            src={item.src}
            alt="Fresh healthy food"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
