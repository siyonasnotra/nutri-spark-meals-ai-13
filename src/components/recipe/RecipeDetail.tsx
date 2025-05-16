
import React from "react";
import { ChevronLeft, Clock, Egg } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

interface NutrientData {
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
}

interface Recipe {
  id: number;
  name: string;
  image: string;
  ingredients: string[];
  matchedIngredients?: number;
  matchPercentage?: number;
  prepTime: string;
  cookTime: string;
  calories: number;
  nutrients: NutrientData;
  steps: string[];
}

interface RecipeDetailProps {
  recipe: Recipe;
  onClose: () => void;
}

const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipe, onClose }) => {
  const handleSaveRecipe = () => {
    toast.success(`${recipe.name} saved to your favorites`);
  };

  const handleAddToMealPlan = () => {
    toast.success(`${recipe.name} added to your meal plan`);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <Button
        variant="ghost"
        className="gap-1"
        onClick={onClose}
      >
        <ChevronLeft size={16} />
        Back to recipes
      </Button>

      <div
        className="h-60 bg-cover bg-center rounded-lg relative"
        style={{ backgroundImage: `url(${recipe.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 rounded-lg" />
        <div className="absolute bottom-0 left-0 p-6">
          <h1 className="text-3xl font-bold text-white">{recipe.name}</h1>
          <div className="flex items-center gap-2 mt-2">
            <Badge className="bg-primary">
              {recipe.calories} calories
            </Badge>
            <div className="flex items-center text-white gap-1">
              <Clock size={16} />
              <span className="text-sm">{recipe.prepTime} prep · {recipe.cookTime} cooking</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4">Ingredients</h2>
              <ul className="space-y-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Egg size={18} className="text-primary mt-0.5" />
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4">Instructions</h2>
              <ol className="space-y-4">
                {recipe.steps.map((step, index) => (
                  <li key={index}>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center font-medium">
                        {index + 1}
                      </div>
                      <p>{step}</p>
                    </div>
                    {index < recipe.steps.length - 1 && <Separator className="mt-4" />}
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-lg font-semibold mb-3">Nutritional Info</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm">
                    <span>Calories</span>
                    <span className="font-medium">{recipe.calories} kcal</span>
                  </div>
                </div>
                
                {Object.entries(recipe.nutrients).map(([key, value]) => (
                  <div key={key}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="capitalize">{key}</span>
                      <span className="font-medium">{value}g</span>
                    </div>
                    <div className="nutrient-progress">
                      <div 
                        className={`h-full ${
                          key === 'protein' ? 'bg-blue-500' :
                          key === 'carbs' ? 'bg-green-500' :
                          key === 'fat' ? 'bg-yellow-500' : 'bg-purple-500'
                        }`}
                        style={{ width: `${Math.min((Number(value) / 60) * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-3">
            <Button onClick={handleAddToMealPlan} className="w-full">
              Add to Meal Plan
            </Button>
            <Button variant="outline" onClick={handleSaveRecipe} className="w-full">
              Save Recipe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
