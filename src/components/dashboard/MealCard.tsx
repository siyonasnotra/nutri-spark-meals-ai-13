
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";

interface Nutrient {
  name: string;
  amount: number;
  unit: string;
}

interface MealCardProps {
  mealType: string;
  title: string;
  description: string;
  imageUrl: string;
  calories: number;
  nutrients: Nutrient[];
  time: string;
}

const MealCard = ({
  mealType,
  title,
  description,
  imageUrl,
  calories,
  nutrients,
  time,
}: MealCardProps) => {
  return (
    <Card className="overflow-hidden shadow-sm hover-scale">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-32 md:h-full object-cover"
          />
        </div>
        <CardContent className="flex-1 p-4">
          <div className="flex justify-between items-start">
            <div>
              <Badge variant="outline" className="mb-2 bg-gray-100">
                {mealType} • {time}
              </Badge>
              <h3 className="font-medium text-lg">{title}</h3>
              <p className="text-sm text-gray-600 mt-1 mb-3">{description}</p>
            </div>
            <Button variant="outline" size="icon" className="rounded-full">
              <Edit size={16} />
            </Button>
          </div>

          <div className="flex flex-wrap gap-2 mt-2">
            <Badge className="bg-secondary text-white">
              {calories} kcal
            </Badge>
            {nutrients.map((nutrient) => (
              <Badge
                key={nutrient.name}
                variant="outline"
                className="bg-gray-50"
              >
                {nutrient.name}: {nutrient.amount}
                {nutrient.unit}
              </Badge>
            ))}
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default MealCard;
