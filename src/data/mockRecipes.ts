
import { Recipe } from "@/types/recipe";

// Mock data for recipes based on ingredients
export const mockRecipes: Recipe[] = [
  {
    id: 1,
    name: "Vegetable Stir Fry",
    ingredients: ["bell pepper", "carrots", "broccoli", "soy sauce", "garlic"],
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=60",
    prepTime: "15 mins",
    cookTime: "10 mins",
    calories: 320,
    nutrients: {
      protein: 12,
      carbs: 45,
      fat: 9,
      fiber: 8
    },
    steps: [
      "Heat oil in a wok or large frying pan over high heat.",
      "Add garlic and stir for 30 seconds until fragrant.",
      "Add vegetables and stir-fry for 5-7 minutes until crisp-tender.",
      "Add soy sauce and other seasonings.",
      "Serve hot with rice or noodles."
    ]
  },
  {
    id: 2,
    name: "Mediterranean Salad",
    ingredients: ["cucumber", "tomatoes", "red onion", "feta cheese", "olive oil", "lemon juice"],
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=60",
    prepTime: "15 mins",
    cookTime: "0 mins",
    calories: 250,
    nutrients: {
      protein: 8,
      carbs: 15,
      fat: 18,
      fiber: 5
    },
    steps: [
      "Dice cucumber, tomatoes, and red onion.",
      "Combine vegetables in a large bowl.",
      "Crumble feta cheese over the vegetables.",
      "Drizzle with olive oil and lemon juice.",
      "Season with salt, pepper, and oregano.",
      "Toss gently and serve."
    ]
  },
  {
    id: 3,
    name: "Lemon Garlic Pasta",
    ingredients: ["pasta", "garlic", "lemon", "olive oil", "parmesan cheese", "parsley"],
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=500&q=60",
    prepTime: "5 mins",
    cookTime: "15 mins",
    calories: 480,
    nutrients: {
      protein: 14,
      carbs: 65,
      fat: 16,
      fiber: 3
    },
    steps: [
      "Cook pasta according to package directions.",
      "In a pan, sauté minced garlic in olive oil until fragrant.",
      "Add lemon zest and juice to the pan.",
      "Drain pasta and add to the pan, tossing to coat.",
      "Stir in grated parmesan cheese and chopped parsley.",
      "Season with salt and pepper to taste."
    ]
  },
];

// Common ingredients for suggestions
export const commonIngredients = [
  "tomatoes", "onion", "garlic", "chicken", "beef", "pasta", 
  "rice", "potatoes", "bell pepper", "carrots", "broccoli", 
  "spinach", "eggs", "cheese", "milk", "butter", "olive oil", 
  "lemon", "cucumber", "mushrooms"
];
