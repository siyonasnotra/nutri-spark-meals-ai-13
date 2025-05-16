
export interface RecipeNutrient {
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
}

export interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  matchedIngredients?: number;
  matchPercentage?: number;
  image: string;
  prepTime: string;
  cookTime: string;
  calories: number;
  nutrients: RecipeNutrient;
  steps: string[];
}
