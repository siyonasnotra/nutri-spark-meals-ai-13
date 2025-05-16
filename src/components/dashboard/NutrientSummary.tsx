
import React from "react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";

interface Nutrient {
  name: string;
  current: number;
  target: number;
  unit: string;
  color: string;
}

const NutrientSummary = () => {
  const nutrients: Nutrient[] = [
    {
      name: "Calories",
      current: 1450,
      target: 2000,
      unit: "kcal",
      color: "bg-secondary-400",
    },
    {
      name: "Protein",
      current: 75,
      target: 120,
      unit: "g",
      color: "bg-info-400",
    },
    {
      name: "Carbs",
      current: 130,
      target: 200,
      unit: "g",
      color: "bg-primary-400",
    },
    {
      name: "Fat",
      current: 45,
      target: 65,
      unit: "g",
      color: "bg-accent-400",
    },
  ];

  return (
    <Card className="shadow-sm">
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-3">Today's Nutrients</h3>
        <div className="space-y-3">
          {nutrients.map((nutrient) => (
            <div key={nutrient.name} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="font-medium">{nutrient.name}</span>
                <span className="text-gray-600">
                  {nutrient.current} / {nutrient.target} {nutrient.unit}
                </span>
              </div>
              <div className="nutrient-progress">
                <div
                  className={`h-full ${nutrient.color} rounded-full`}
                  style={{
                    width: `${Math.min(
                      100,
                      (nutrient.current / nutrient.target) * 100
                    )}%`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default NutrientSummary;
