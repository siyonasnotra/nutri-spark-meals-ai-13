
import React, { useState } from "react";
import { ArrowLeft, Clock, ChefHat, Flame, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ChartContainer } from "@/components/ui/chart";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

interface RecipeDetailProps {
  recipe: any;
  onClose: () => void;
}

const COLORS = ['#4CAF50', '#FF9800', '#9C27B0', '#2196F3'];

const RecipeDetail = ({ recipe, onClose }: RecipeDetailProps) => {
  const [activeTab, setActiveTab] = useState("ingredients");
  
  const nutritionData = [
    { name: 'Protein', value: recipe.nutrients.protein },
    { name: 'Carbs', value: recipe.nutrients.carbs },
    { name: 'Fat', value: recipe.nutrients.fat },
    { name: 'Fiber', value: recipe.nutrients.fiber }
  ];
  
  const chartConfig = {
    protein: { label: 'Protein', theme: { light: '#4CAF50', dark: '#4CAF50' } },
    carbs: { label: 'Carbs', theme: { light: '#FF9800', dark: '#FF9800' } },
    fat: { label: 'Fat', theme: { light: '#9C27B0', dark: '#9C27B0' } },
    fiber: { label: 'Fiber', theme: { light: '#2196F3', dark: '#2196F3' } }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center space-x-4">
        <Button variant="ghost" onClick={onClose} className="p-0 h-auto">
          <ArrowLeft size={20} className="mr-2" />
          Back to recipes
        </Button>
      </div>

      <div 
        className="h-48 md:h-64 bg-cover bg-center rounded-lg relative"
        style={{ backgroundImage: `url(${recipe.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg"></div>
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h1 className="text-2xl md:text-3xl font-bold">{recipe.name}</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Tabs defaultValue="ingredients" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
              <TabsTrigger value="instructions">Instructions</TabsTrigger>
              <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
            </TabsList>
            
            <TabsContent value="ingredients" className="animate-fade-in">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Ingredients</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {recipe.ingredients.map((ingredient: string, i: number) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="min-w-4 mt-1">
                          <div className="h-2 w-2 rounded-full bg-primary mt-1"></div>
                        </div>
                        <span className="text-gray-700">{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="instructions" className="animate-fade-in">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Preparation Steps</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-4">
                    {recipe.steps.map((step: string, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-primary-100 text-primary font-medium text-sm">
                          {i + 1}
                        </div>
                        <span className="text-gray-700">{step}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="nutrition" className="animate-fade-in">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Nutritional Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-60">
                      <ChartContainer
                        config={chartConfig}
                        className="h-full"
                      >
                        <PieChart>
                          <Pie
                            data={nutritionData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {nutritionData.map((_, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                          <Legend />
                        </PieChart>
                      </ChartContainer>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-primary-50 rounded-md p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <Flame size={16} className="text-primary" />
                          <span className="font-medium">Calories</span>
                        </div>
                        <p className="text-2xl font-semibold">{recipe.calories}</p>
                      </div>
                      
                      <div className="space-y-2">
                        {nutritionData.map((item, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <span className="text-gray-600">{item.name}</span>
                            <Badge variant="outline" style={{ color: COLORS[index % COLORS.length], borderColor: COLORS[index % COLORS.length] }}>
                              {item.value}g
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Recipe Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-secondary" />
                <div>
                  <p className="text-sm text-gray-500">Preparation Time</p>
                  <p className="font-medium">{recipe.prepTime}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <ChefHat size={18} className="text-secondary" />
                <div>
                  <p className="text-sm text-gray-500">Cooking Time</p>
                  <p className="font-medium">{recipe.cookTime}</p>
                </div>
              </div>
              
              <Separator />
              
              <div className="flex items-center gap-2">
                <BarChart size={18} className="text-secondary" />
                <div>
                  <p className="text-sm text-gray-500">Difficulty</p>
                  <p className="font-medium">Easy</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Button className="w-full">Save Recipe</Button>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
