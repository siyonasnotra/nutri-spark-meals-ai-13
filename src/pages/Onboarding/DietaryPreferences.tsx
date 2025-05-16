
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";

interface DietaryPreference {
  id: string;
  label: string;
  description: string;
}

interface DietaryPreferencesProps {
  onDataChange: (preferences: string[]) => void;
  initialPreferences?: string[];
}

const DietaryPreferences = ({
  onDataChange,
  initialPreferences = [],
}: DietaryPreferencesProps) => {
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>(
    initialPreferences
  );

  const preferences: DietaryPreference[] = [
    {
      id: "vegan",
      label: "Vegan",
      description: "No animal products",
    },
    {
      id: "vegetarian",
      label: "Vegetarian",
      description: "No meat or fish",
    },
    {
      id: "pescatarian",
      label: "Pescatarian",
      description: "Vegetarian diet with seafood",
    },
    {
      id: "gluten-free",
      label: "Gluten-Free",
      description: "No wheat, barley, or rye",
    },
    {
      id: "dairy-free",
      label: "Dairy-Free",
      description: "No milk or milk products",
    },
    {
      id: "keto",
      label: "Ketogenic",
      description: "Low carb, high fat diet",
    },
    {
      id: "paleo",
      label: "Paleo",
      description: "Based on foods from Paleolithic era",
    },
    {
      id: "low-sodium",
      label: "Low Sodium",
      description: "Reduced salt intake",
    },
  ];

  const handleTogglePreference = (prefId: string) => {
    setSelectedPreferences((prev) => {
      const newSelection = prev.includes(prefId)
        ? prev.filter((id) => id !== prefId)
        : [...prev, prefId];
      
      onDataChange(newSelection);
      return newSelection;
    });
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">Dietary Preferences</h1>
        <p className="text-gray-600 mt-2">
          Select any dietary preferences or restrictions you follow
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {preferences.map((pref) => (
          <Card 
            key={pref.id}
            className="p-4 hover:bg-gray-50 cursor-pointer"
            onClick={() => handleTogglePreference(pref.id)}
          >
            <div className="flex items-center space-x-3">
              <Checkbox
                id={pref.id}
                checked={selectedPreferences.includes(pref.id)}
                onCheckedChange={() => handleTogglePreference(pref.id)}
              />
              <div className="flex-1">
                <Label
                  htmlFor={pref.id}
                  className="text-sm font-medium block cursor-pointer"
                >
                  {pref.label}
                </Label>
                <p className="text-xs text-gray-500">{pref.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      <p className="text-sm text-center text-gray-500 mt-4">
        You can update these preferences anytime in your profile settings
      </p>
    </div>
  );
};

export default DietaryPreferences;
