
import React, { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

interface IngredientInputProps {
  ingredients: string[];
  setIngredients: React.Dispatch<React.SetStateAction<string[]>>;
  commonIngredients: string[];
}

const IngredientInput: React.FC<IngredientInputProps> = ({
  ingredients,
  setIngredients,
  commonIngredients,
}) => {
  const [inputValue, setInputValue] = useState("");

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

  return (
    <>
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
            {commonIngredients
              .filter(ing => !ingredients.includes(ing))
              .map((ing, i) => (
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
    </>
  );
};

export default IngredientInput;
