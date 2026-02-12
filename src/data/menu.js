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
    {
      id: 6,
      name: "Protein Power Bowl",
      description: "Banana, apple, chia seeds, peanut butter",
      price: "₹249",
      image: tropicalBowl,
    },
    {
      id: 7,
      name: "Classic Papaya Bowl",
      description: "Fresh papaya, pomegranate, mint",
      price: "₹169",
      image: tropicalBowl,
    },
    {
      id: 8,
      name: "Apple Cinnamon Bowl",
      description: "Apple slices, cinnamon, honey drizzle",
      price: "₹189",
      image: tropicalBowl,
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
    {
      id: 9,
      name: "Mango Mint Smoothie",
      description: "Fresh mango, mint, yogurt",
      price: "₹189",
      image: berryBowl,
    },
    {
      id: 10,
      name: "Chocolate Banana Smoothie",
      description: "Banana, cocoa, almond milk",
      price: "₹219",
      image: berryBowl,
    },
    {
      id: 11,
      name: "Strawberry Oats Smoothie",
      description: "Strawberry, oats, honey",
      price: "₹209",
      image: berryBowl,
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
    {
      id: 12,
      name: "Greek Salad",
      description: "Lettuce, olives, cucumber, feta",
      price: "₹229",
      image: freshVeggiesalad,
    },
    {
      id: 13,
      name: "Chickpea Protein Salad",
      description: "Chickpeas, onion, tomato, lemon dressing",
      price: "₹199",
      image: freshVeggiesalad,
    },
    {
      id: 14,
      name: "Paneer Power Salad",
      description: "Grilled paneer, lettuce, bell peppers",
      price: "₹249",
      image: freshVeggiesalad,
    },
  ],

  juices: [
    {
      id: 15,
      name: "Fresh Orange Juice",
      description: "Cold-pressed seasonal oranges",
      price: "₹129",
      image: freshVeggiesalad,
    },
    {
      id: 16,
      name: "Watermelon Cooler",
      description: "Fresh watermelon with mint",
      price: "₹119",
      image: freshVeggiesalad,
    },
    {
      id: 17,
      name: "ABC Juice",
      description: "Apple, beetroot, carrot",
      price: "₹149",
      image: freshVeggiesalad,
    },
  ],

  addOns: [
    {
      id: 18,
      name: "Chia Seeds",
      description: "Add extra chia seeds to any bowl",
      price: "₹20",
      image: freshVeggiesalad,
    },
    {
      id: 19,
      name: "Protein Scoop",
      description: "Plant-based protein add-on",
      price: "₹40",
      image: freshVeggiesalad,
    },
    {
      id: 20,
      name: "Extra Peanut Butter",
      description: "Extra serving of peanut butter",
      price: "₹30",
      image: freshVeggiesalad,
    },
  ],
};
