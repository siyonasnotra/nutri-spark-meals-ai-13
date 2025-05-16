
import React from "react";
import { ChefHat } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import RecipeCard from "@/components/recipe/RecipeCard";
import { Recipe } from "@/types/recipe";

interface RecipeListProps {
  suggestedRecipes: Recipe[];
  ingredients: string[];
  setIngredients: React.Dispatch<React.SetStateAction<string[]>>;
  onSelectRecipe: (recipe: Recipe) => void;
}

const RecipeList: React.FC<RecipeListProps> = ({ 
  suggestedRecipes, 
  ingredients,
  setIngredients,
  onSelectRecipe 
}) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        <ChefHat size={20} className="text-secondary" /> 
        Suggested Recipes
        {suggestedRecipes.length > 0 && (
          <Badge variant="outline" className="ml-2">
            {suggestedRecipes.length} found
          </Badge>
        )}
      </h2>

      {suggestedRecipes.length === 0 ? (
        <Card className="bg-gray-50 border-dashed">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <ChefHat size={48} className="text-gray-300 mb-4" />
            <p className="text-gray-500 text-center">
              {ingredients.length === 0 
                ? "Add some ingredients to get recipe suggestions" 
                : "No recipes found with your current ingredients"}
            </p>
            {ingredients.length > 0 && (
              <Button 
                variant="link" 
                className="mt-2" 
                onClick={() => setIngredients([])}
              >
                Clear ingredients and start over
              </Button>
            )}
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {suggestedRecipes.map((recipe) => (
            <RecipeCard 
              key={recipe.id} 
              recipe={recipe} 
              onSelectRecipe={onSelectRecipe} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeList;
