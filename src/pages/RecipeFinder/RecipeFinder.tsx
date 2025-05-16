
import React, { useState, useEffect } from "react";
import { Trash2, ChefHat, Search, Plus } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChartContainer } from "@/components/ui/chart";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import RecipeDetail from "@/components/recipe/RecipeDetail";
import { toast } from "sonner";

// Mock data for recipes based on ingredients
const mockRecipes = [
  {
    id: 1,
    name: "Vegetable Stir Fry",
    ingredients: ["bell pepper", "carrots", "broccoli", "soy sauce", "garlic"],
    matchedIngredients: 3,
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
    matchedIngredients: 2,
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
    matchedIngredients: 4,
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
const commonIngredients = [
  "tomatoes", "onion", "garlic", "chicken", "beef", "pasta", 
  "rice", "potatoes", "bell pepper", "carrots", "broccoli", 
  "spinach", "eggs", "cheese", "milk", "butter", "olive oil", 
  "lemon", "cucumber", "mushrooms"
];

const RecipeFinder = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [suggestedRecipes, setSuggestedRecipes] = useState<any[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<any>(null);

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
      .sort((a, b) => b.matchPercentage - a.matchPercentage);

    setSuggestedRecipes(filtered);
  }, [ingredients]);

  const handleAddIngredient = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputValue.trim() && !ingredients.includes(inputValue.trim().toLowerCase())) {
      setIngredients([...ingredients, inputValue.trim().toLowerCase()]);
      setInputValue("");
      toast.success(`Added ${inputValue.trim()} to your ingredients`);
    }
  };

  const handleRemoveIngredient = (ingredient: string) => {
    setIngredients(ingredients.filter(ing => ing !== ingredient));
  };

  const handleSuggestedIngredient = (ingredient: string) => {
    if (!ingredients.includes(ingredient)) {
      setIngredients([...ingredients, ingredient]);
      toast.success(`Added ${ingredient} to your ingredients`);
    }
  };

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
                <form onSubmit={handleAddIngredient} className="flex gap-2 mb-4">
                  <Input
                    placeholder="Type an ingredient..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="flex-1"
                  />
                  <Button type="submit">
                    <Plus size={18} className="mr-2" />
                    Add
                  </Button>
                </form>

                {ingredients.length > 0 && (
                  <div className="mb-6">
                    <p className="text-sm text-gray-500 mb-2">Your ingredients:</p>
                    <div className="flex flex-wrap gap-2">
                      {ingredients.map((ing, i) => (
                        <Badge key={i} variant="outline" className="px-2 py-1 bg-primary-50 border border-primary-200 text-primary-600 flex items-center gap-1">
                          {ing}
                          <button onClick={() => handleRemoveIngredient(ing)} className="ml-1 hover:text-destructive">
                            <Trash2 size={14} />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                <Separator className="my-4" />

                <div>
                  <p className="text-sm text-gray-500 mb-2">Common ingredients you might have:</p>
                  <ScrollArea className="h-20">
                    <div className="flex flex-wrap gap-2">
                      {commonIngredients.filter(ing => !ingredients.includes(ing)).map((ing, i) => (
                        <Badge 
                          key={i} 
                          variant="outline" 
                          className="px-2 py-1 cursor-pointer hover:bg-primary-100"
                          onClick={() => handleSuggestedIngredient(ing)}
                        >
                          {ing}
                        </Badge>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              </CardContent>
            </Card>

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
                                    {key}: {value}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <Button onClick={() => handleSelectRecipe(recipe)}>
                              View Recipe
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default RecipeFinder;
