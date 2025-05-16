
import React, { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus, ChevronDown, ChevronUp } from "lucide-react";
import { toast } from "sonner";

interface GroceryCategory {
  name: string;
  expanded: boolean;
  items: {
    id: string;
    name: string;
    checked: boolean;
  }[];
}

const Grocery = () => {
  const [newItem, setNewItem] = useState("");
  const [categories, setCategories] = useState<GroceryCategory[]>([
    {
      name: "Fruits & Vegetables",
      expanded: true,
      items: [
        { id: "1", name: "Spinach (200g)", checked: false },
        { id: "2", name: "Broccoli (1 head)", checked: false },
        { id: "3", name: "Apples (6)", checked: false },
        { id: "4", name: "Bananas (bunch)", checked: false },
        { id: "5", name: "Avocados (2)", checked: false },
      ],
    },
    {
      name: "Protein",
      expanded: true,
      items: [
        { id: "6", name: "Chicken breast (500g)", checked: false },
        { id: "7", name: "Eggs (dozen)", checked: false },
        { id: "8", name: "Greek yogurt (500g)", checked: false },
        { id: "9", name: "Tofu (firm, 1 block)", checked: false },
      ],
    },
    {
      name: "Grains & Pantry",
      expanded: true,
      items: [
        { id: "10", name: "Brown rice (1kg)", checked: false },
        { id: "11", name: "Quinoa (500g)", checked: false },
        { id: "12", name: "Oats (1kg)", checked: false },
        { id: "13", name: "Olive oil (500ml)", checked: false },
      ],
    },
  ]);

  const handleToggleCategory = (categoryIndex: number) => {
    setCategories(
      categories.map((category, index) => {
        if (index === categoryIndex) {
          return { ...category, expanded: !category.expanded };
        }
        return category;
      })
    );
  };

  const handleToggleItem = (categoryIndex: number, itemId: string) => {
    setCategories(
      categories.map((category, index) => {
        if (index === categoryIndex) {
          return {
            ...category,
            items: category.items.map((item) => {
              if (item.id === itemId) {
                return { ...item, checked: !item.checked };
              }
              return item;
            }),
          };
        }
        return category;
      })
    );
  };

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (newItem.trim()) {
      // In a real app, we'd categorize this automatically
      const firstCategory = [...categories];
      firstCategory[0].items.push({
        id: Date.now().toString(),
        name: newItem,
        checked: false,
      });
      setCategories(firstCategory);
      setNewItem("");
      toast.success(`Added ${newItem} to your grocery list`);
    }
  };

  return (
    <DashboardLayout title="Grocery List">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Grocery List</h1>
          <p className="text-sm text-gray-500">
            Based on your meal plan for the week
          </p>
        </div>

        <form onSubmit={handleAddItem} className="flex gap-2">
          <Input
            placeholder="Add new item..."
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" className="bg-primary hover:bg-primary-600">
            <Plus size={18} className="mr-2" />
            Add
          </Button>
        </form>

        <div className="space-y-4">
          {categories.map((category, categoryIndex) => (
            <Card key={category.name} className="overflow-hidden">
              <div
                className="bg-secondary-50 p-4 flex justify-between items-center cursor-pointer"
                onClick={() => handleToggleCategory(categoryIndex)}
              >
                <h3 className="font-semibold text-secondary-800">
                  {category.name}{" "}
                  <span className="text-gray-500 text-sm">
                    ({category.items.length} items)
                  </span>
                </h3>
                {category.expanded ? (
                  <ChevronUp size={20} className="text-gray-500" />
                ) : (
                  <ChevronDown size={20} className="text-gray-500" />
                )}
              </div>
              {category.expanded && (
                <CardContent className="p-4">
                  <div className="space-y-2">
                    {category.items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-md"
                      >
                        <Checkbox
                          checked={item.checked}
                          onCheckedChange={() =>
                            handleToggleItem(categoryIndex, item.id)
                          }
                          id={`item-${item.id}`}
                        />
                        <label
                          htmlFor={`item-${item.id}`}
                          className={`flex-1 ${
                            item.checked ? "line-through text-gray-400" : ""
                          }`}
                        >
                          {item.name}
                        </label>
                      </div>
                    ))}
                    {category.items.length === 0 && (
                      <p className="text-gray-500 text-center py-2">
                        No items in this category
                      </p>
                    )}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Grocery;
