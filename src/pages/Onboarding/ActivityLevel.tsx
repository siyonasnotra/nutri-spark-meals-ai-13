
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ActivityLevel {
  id: string;
  title: string;
  description: string;
  icon: string;
  examples: string;
}

interface ActivityLevelProps {
  onDataChange: (level: string) => void;
  initialLevel?: string;
}

const ActivityLevel = ({ onDataChange, initialLevel }: ActivityLevelProps) => {
  const [selectedLevel, setSelectedLevel] = useState(initialLevel || "");

  const activityLevels: ActivityLevel[] = [
    {
      id: "sedentary",
      title: "Sedentary",
      description: "Little to no exercise",
      icon: "🛋️",
      examples: "Desk job, minimal walking",
    },
    {
      id: "lightly-active",
      title: "Lightly Active",
      description: "Light exercise 1-3 days/week",
      icon: "🚶",
      examples: "Walking, light housework",
    },
    {
      id: "moderately-active",
      title: "Moderately Active",
      description: "Moderate exercise 3-5 days/week",
      icon: "🚴",
      examples: "Jogging, recreational sports",
    },
    {
      id: "very-active",
      title: "Very Active",
      description: "Hard exercise 6-7 days/week",
      icon: "🏃",
      examples: "Daily intense training",
    },
    {
      id: "extra-active",
      title: "Extra Active",
      description: "Very hard exercise & physical job",
      icon: "🏋️",
      examples: "Professional athlete, construction worker",
    },
  ];

  const handleSelectLevel = (levelId: string) => {
    setSelectedLevel(levelId);
    onDataChange(levelId);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">Activity Level</h1>
        <p className="text-gray-600 mt-2">
          Select your typical daily activity level
        </p>
      </div>

      <div className="space-y-3">
        {activityLevels.map((level) => (
          <Card
            key={level.id}
            className={cn(
              "p-4 cursor-pointer hover:shadow-md transition-all",
              selectedLevel === level.id
                ? "border-2 border-primary bg-primary-50"
                : "border border-gray-200"
            )}
            onClick={() => handleSelectLevel(level.id)}
          >
            <div className="flex items-center">
              <div className="text-3xl mr-4">{level.icon}</div>
              <div className="flex-1">
                <h3 className="font-medium">{level.title}</h3>
                <p className="text-sm text-gray-500">{level.description}</p>
                <p className="text-xs text-gray-400 mt-1">
                  Examples: {level.examples}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ActivityLevel;
