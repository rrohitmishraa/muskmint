// salads
import fruitSalad from "../assets/images/menu/salads/fruit-salad.webp";
import veggieSalad from "../assets/images/menu/salads/veggie-salad.webp";
import mixSproutsSalad from "../assets/images/menu/salads/mix-sprouts-salad.webp";
import sproutsSaladBoiled from "../assets/images/menu/salads/sprouts-salad-boiled.webp";
import chickpeaSalad from "../assets/images/menu/salads/chickpea-salad.webp";
import creamySoyaSalad from "../assets/images/menu/salads/creamy-soya-salad.webp";
import masalaCornPaneerSalad from "../assets/images/menu/salads/masala-corn-paneer-salad.webp";
import thaiChoppedSalad from "../assets/images/menu/salads/thai-chopped-salad.webp";

//smoothies - classic fruit
import berryBliss from "../assets/images/menu/smoothies/berry-bliss.webp";
import tropicalParadise from "../assets/images/menu/smoothies/tropical-paradise.webp";
import greenGoodness from "../assets/images/menu/smoothies/green-goodness.webp";
import strawberryBananaSmoothie from "../assets/images/menu/smoothies/strawberry-banana-smoothie.webp";
import cantaloupeLimeSmoothie from "../assets/images/menu/smoothies/cantaloupe-lime-smoothie.webp";
import pineappleCoconut from "../assets/images/menu/smoothies/pineapple-coconut.webp";
import mangoSmoothie from "../assets/images/menu/smoothies/mango-smoothie.webp";

//smoothies - protein packed
import peanutButterSmoothie from "../assets/images/menu/smoothies/peanut-butter-smoothie.webp";
import mochaProteinSmoothie from "../assets/images/menu/smoothies/mocha-protein-smoothie.webp";
import bananaOatsSmoothie from "../assets/images/menu/smoothies/banana-oats-smoothie.webp";

//smothies - refreshers
import watermelonMintCooler from "../assets/images/menu/smoothies/watermelon-mint-cooler.webp";
import cucumberLimeChill from "../assets/images/menu/smoothies/cucumber-lime-chill.webp";

export const menu = {
  salads: [
    {
      id: 1,
      name: "Fruit Salad",
      description:
        "Grapes, pineapple, papaya, guava, strawberry, orange, banana",
      price: 129,
      image: fruitSalad,
    },
    {
      id: 2,
      name: "Veggie Salad",
      description: "Fresh seasonal vegetables and fruits",
      price: 139,
      image: veggieSalad,
    },
    {
      id: 3,
      name: "Mix Sprouts Salad",
      description: "Paneer, mixed sprouts and fresh vegetables",
      price: 159,
      image: mixSproutsSalad,
    },
    {
      id: 4,
      name: "Sprouts Salad (Boiled)",
      description: "Boiled sprouts with paneer and fresh vegetables",
      price: 179,
      image: sproutsSaladBoiled,
    },
    {
      id: 5,
      name: "Chickpea Salad",
      description: "Chickpeas, cucumber and tomatoes",
      price: 129,
      image: chickpeaSalad,
    },
    {
      id: 6,
      name: "Creamy Soya Salad",
      description: "Soya chunks, paneer and yogurt dressing",
      price: 189,
      image: creamySoyaSalad,
    },
    {
      id: 7,
      name: "Masala Corn Paneer Salad",
      description: "Paneer, sweet corn, cucumber and tomatoes",
      price: 199,
      image: masalaCornPaneerSalad,
    },
    {
      id: 8,
      name: "Thai Chopped Salad",
      description: "Cabbage, cucumber, green onion, carrots, tofu and cashews",
      price: 189,
      image: thaiChoppedSalad,
    },
  ],

  smoothies: {
    classicFruit: [
      {
        id: 9,
        name: "Berry Bliss",
        description: "Strawberries, blueberries and banana",
        price: 229,
        image: berryBliss,
      },
      {
        id: 10,
        name: "Tropical Paradise",
        description: "Mango, banana, honey and lime juice",
        price: 149,
        image: tropicalParadise,
      },
      {
        id: 11,
        name: "Green Goodness",
        description: "Spinach, green apple, kiwi and coconut water",
        price: 149,
        image: greenGoodness,
      },
      {
        id: 12,
        name: "Strawberry Banana Smoothie",
        description: "Strawberry, banana, yogurt, milk and cinnamon",
        price: 179,
        image: strawberryBananaSmoothie,
      },
      {
        id: 13,
        name: "Cantaloupe Lime Smoothie",
        description: "Cantaloupe, lime juice and natural sweetener",
        price: 129,
        image: cantaloupeLimeSmoothie,
      },
      {
        id: 14,
        name: "Pineapple Coconut",
        description: "Pineapple, coconut water and lime juice",
        price: 179,
        image: pineappleCoconut,
      },
      {
        id: 15,
        name: "Mango Smoothie",
        description: "Mango, yogurt and milk",
        price: 129,
        image: mangoSmoothie,
      },
    ],

    proteinPacked: [
      {
        id: 16,
        name: "Peanut Butter Smoothie",
        description: "Peanut butter, banana, yogurt and protein powder",
        price: 129,
        image: peanutButterSmoothie,
      },
      {
        id: 17,
        name: "Mocha Protein Smoothie",
        description: "Cocoa powder, oats, banana and coffee",
        price: 169,
        image: mochaProteinSmoothie,
      },
      {
        id: 18,
        name: "Banana Oats Smoothie",
        description: "Banana, oats, yogurt and chocolate powder",
        price: 169,
        image: bananaOatsSmoothie,
      },
    ],

    refreshers: [
      {
        id: 19,
        name: "Watermelon Mint Cooler",
        description: "Fresh watermelon, mint leaves and lime juice",
        price: 129,
        image: watermelonMintCooler,
      },
      {
        id: 20,
        name: "Cucumber Lime Chill",
        description: "Cucumber, lime, spinach and ginger",
        price: 129,
        image: cucumberLimeChill,
      },
    ],
  },
};
