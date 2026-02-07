import tropicalBowl from "../assets/images/home/tropicalBowl.webp";
import berryBowl from "../assets/images/home/berry-bowl.webp";
import greenDetoxSmoothie from "../assets/images/home/green-detox-smoothie.webp";
import freshVeggiesalad from "../assets/images/home/fresh-veggie-salad.webp";
import peanutButterSmoothie from "../assets/images/home/peanut-butter-smoothie.webp";

export const menu = {
  bowls: [
    {
      id: 1,
      name: "Tropical Fruit Bowl",
      description: "Mango, pineapple, banana, seasonal fruits",
      price: "₹199",
      image: tropicalBowl,
    },
    {
      id: 2,
      name: "Berry Bliss Bowl",
      description: "Strawberry, blueberry, banana",
      price: "₹229",
      image: berryBowl,
    },
  ],

  smoothies: [
    {
      id: 3,
      name: "Green Detox Smoothie",
      description: "Spinach, apple, cucumber, mint",
      price: "₹179",
      image: greenDetoxSmoothie,
    },
    {
      id: 4,
      name: "Peanut Butter Smoothie",
      description: "Banana, peanut butter, dates",
      price: "₹199",
      image: peanutButterSmoothie,
    },
  ],

  salads: [
    {
      id: 5,
      name: "Fresh Veggie Salad",
      description: "Lettuce, cucumber, tomato, olive oil",
      price: "₹149",
      image: freshVeggiesalad,
    },
  ],
};
