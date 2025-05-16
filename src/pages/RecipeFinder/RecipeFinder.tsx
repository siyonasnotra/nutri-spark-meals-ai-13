
import React, { useState } from "react";
import { Search } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RecipeDetail from "@/components/recipe/RecipeDetail";
import { useRecipes } from "@/hooks/useRecipes";
import IngredientInput from "@/components/recipe/IngredientInput";
import RecipeList from "@/components/recipe/RecipeList";
import { commonIngredients } from "@/data/mockRecipes";

const RecipeFinder = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const { suggestedRecipes, selectedRecipe, setSelectedRecipe } = useRecipes(ingredients);

  const handleSelectRecipe = (recipe: any) => {
    setSelectedRecipe(recipe);
  };

  const handleCloseRecipe = () => {
    setSelectedRecipe(null);
  };

  return (
    <DashboardLayout title="Recipe Finder">
      <div className="space-y-6 animate-fade-in">
        {selectedRecipe ? (
          <RecipeDetail recipe={selectedRecipe} onClose={handleCloseRecipe} />
        ) : (
          <>
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold">Recipe Finder</h1>
                <p className="text-gray-600">Find recipes based on ingredients you have</p>
              </div>
            </div>

            <Card className="bg-white shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center gap-2">
                  <Search size={20} className="text-primary" />
                  Add Your Ingredients
                </CardTitle>
              </CardHeader>
              <CardContent>
                <IngredientInput 
                  ingredients={ingredients}
                  setIngredients={setIngredients}
                  commonIngredients={commonIngredients}
                />
              </CardContent>
            </Card>

            <RecipeList 
              suggestedRecipes={suggestedRecipes}
              ingredients={ingredients}
              setIngredients={setIngredients}
              onSelectRecipe={handleSelectRecipe}
            />
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default RecipeFinder;
