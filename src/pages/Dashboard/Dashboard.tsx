
import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import NutrientSummary from "@/components/dashboard/NutrientSummary";
import MealCard from "@/components/dashboard/MealCard";
import WaterTracker from "@/components/dashboard/WaterTracker";
import QuickScan from "@/components/dashboard/QuickScan";

const Dashboard = () => {
  // Mock data for meals
  const meals = [
    {
      id: 1,
      mealType: "Breakfast",
      title: "Greek Yogurt Bowl",
      description: "Greek yogurt with berries, honey, and granola",
      imageUrl: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=500&q=60",
      calories: 380,
      time: "8:00 AM",
      nutrients: [
        { name: "Protein", amount: 22, unit: "g" },
        { name: "Carbs", amount: 45, unit: "g" },
        { name: "Fat", amount: 12, unit: "g" },
      ],
    },
    {
      id: 2,
      mealType: "Lunch",
      title: "Grilled Chicken Salad",
      description: "Grilled chicken breast with mixed greens and avocado",
      imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=60",
      calories: 450,
      time: "12:30 PM",
      nutrients: [
        { name: "Protein", amount: 35, unit: "g" },
        { name: "Carbs", amount: 25, unit: "g" },
        { name: "Fat", amount: 18, unit: "g" },
      ],
    },
    {
      id: 3,
      mealType: "Dinner",
      title: "Salmon with Vegetables",
      description: "Baked salmon fillet with roasted vegetables",
      imageUrl: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=500&q=60",
      calories: 520,
      time: "7:00 PM",
      nutrients: [
        { name: "Protein", amount: 38, unit: "g" },
        { name: "Carbs", amount: 30, unit: "g" },
        { name: "Fat", amount: 25, unit: "g" },
      ],
    },
  ];

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <DashboardLayout title="Dashboard">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Hello, Sarah!</h1>
            <p className="text-gray-600">{formattedDate}</p>
          </div>
        </div>

        <QuickScan />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <NutrientSummary />
          </div>
          <div>
            <WaterTracker />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Today's Meal Plan</h2>
          <div className="space-y-4">
            {meals.map((meal) => (
              <MealCard key={meal.id} {...meal} />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
