
import { useState, useEffect } from "react";
import { Recipe } from "@/types/recipe";
import { mockRecipes } from "@/data/mockRecipes";

export const useRecipes = (ingredients: string[]) => {
  const [suggestedRecipes, setSuggestedRecipes] = useState<Recipe[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  // Effect to filter recipes based on ingredients
  useEffect(() => {
    if (ingredients.length === 0) {
      setSuggestedRecipes([]);
      return;
    }

    // Filter recipes based on ingredients match
    const filtered = mockRecipes.map(recipe => {
      const matched = recipe.ingredients.filter(ing => 
        ingredients.some(userIng => ing.toLowerCase().includes(userIng.toLowerCase()))
      );
      
      return {
        ...recipe,
        matchedIngredients: matched.length,
        matchPercentage: Math.round((matched.length / recipe.ingredients.length) * 100)
      };
    }).filter(recipe => recipe.matchedIngredients > 0)
      .sort((a, b) => b.matchPercentage! - a.matchPercentage!);

    setSuggestedRecipes(filtered);
  }, [ingredients]);

  return {
    suggestedRecipes,
    selectedRecipe,
    setSelectedRecipe,
  };
};
