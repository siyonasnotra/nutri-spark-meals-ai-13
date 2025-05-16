
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Goal {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface FitnessGoalsProps {
  onDataChange: (goal: string) => void;
  initialGoal?: string;
}

const FitnessGoals = ({ onDataChange, initialGoal }: FitnessGoalsProps) => {
  const [selectedGoal, setSelectedGoal] = useState(initialGoal || "");

  const goals: Goal[] = [
    {
      id: "weight-loss",
      title: "Weight Loss",
      description: "Reduce body fat and reach a healthier weight",
      icon: "⚖️",
    },
    {
      id: "muscle-gain",
      title: "Muscle Gain",
      description: "Build muscle mass and increase strength",
      icon: "💪",
    },
    {
      id: "maintenance",
      title: "Maintenance",
      description: "Maintain your current weight and improve health",
      icon: "🔄",
    },
    {
      id: "balanced-diet",
      title: "Balanced Diet",
      description: "Focus on overall nutritional balance",
      icon: "🥗",
    },
  ];

  const handleSelectGoal = (goalId: string) => {
    setSelectedGoal(goalId);
    onDataChange(goalId);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">Your Fitness Goal</h1>
        <p className="text-gray-600 mt-2">
          Select the primary goal for your nutrition journey
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {goals.map((goal) => (
          <Card
            key={goal.id}
            className={cn(
              "p-4 cursor-pointer hover:shadow-md transition-all hover-scale",
              selectedGoal === goal.id
                ? "border-2 border-primary bg-primary-50"
                : "border border-gray-200"
            )}
            onClick={() => handleSelectGoal(goal.id)}
          >
            <div className="flex flex-col items-center text-center p-4">
              <span className="text-4xl mb-3">{goal.icon}</span>
              <h3 className="font-medium text-lg mb-1">{goal.title}</h3>
              <p className="text-sm text-gray-500">{goal.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FitnessGoals;
