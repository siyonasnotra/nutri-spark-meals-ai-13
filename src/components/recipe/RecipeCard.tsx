
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Recipe } from "@/types/recipe";

interface RecipeCardProps {
  recipe: Recipe;
  onSelectRecipe: (recipe: Recipe) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onSelectRecipe }) => {
  return (
    <Card key={recipe.id} className="hover-scale cursor-pointer overflow-hidden">
      <CardContent className="p-0">
        <div 
          className="h-40 bg-cover bg-center" 
          style={{ backgroundImage: `url(${recipe.image})` }}
        >
          <div className="w-full h-full bg-black bg-opacity-20 p-4 flex flex-col justify-end">
            <Badge className="self-start bg-primary mb-2">
              {recipe.matchPercentage}% match
            </Badge>
            <h3 className="text-lg font-medium text-white">{recipe.name}</h3>
          </div>
        </div>
        <div className="p-4">
          <p className="text-sm text-gray-500 mb-2">
            {recipe.prepTime} prep · {recipe.cookTime} cooking · {recipe.calories} calories
          </p>
          <div className="flex flex-col">
            <div className="mb-3">
              <h4 className="text-sm font-medium mb-1">Nutrition</h4>
              <div className="flex gap-2">
                {Object.entries(recipe.nutrients).map(([key, value]) => (
                  <Badge key={key} variant="outline" className="capitalize">
                    {key}: {String(value)}
                  </Badge>
                ))}
              </div>
            </div>
            <Button onClick={() => onSelectRecipe(recipe)}>
              View Recipe
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
