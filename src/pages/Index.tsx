
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Logo from "@/components/Logo";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto px-4 py-8">
          <header className="flex justify-between items-center py-4">
            <Logo size="md" />
            <Button
              variant="outline"
              onClick={() => navigate("/login")}
              className="border-primary text-primary hover:bg-primary-50"
            >
              Login
            </Button>
          </header>

          <div className="flex flex-col md:flex-row items-center gap-8 mt-12 md:mt-20">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Your Personal{" "}
                <span className="text-primary">AI Nutrition Assistant</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-md">
                Effortlessly track your meals, get personalized nutrition plans, and achieve your health goals with our AI-powered platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => navigate("/onboarding")}
                  size="lg"
                  className="bg-primary hover:bg-primary-600 text-white"
                >
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => navigate("/dashboard")}
                  className="border-primary text-primary hover:bg-primary-50"
                >
                  Demo View
                </Button>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-primary-200 rounded-full absolute -z-10 -right-10 -top-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&w=500&q=80"
                  alt="Healthy food with nutrition tracking"
                  className="rounded-2xl shadow-lg max-w-xs md:max-w-sm relative z-10"
                />
              </div>
            </div>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">📷</div>
              <h3 className="text-xl font-semibold mb-2">Food Recognition</h3>
              <p className="text-gray-600">
                Snap a photo of your meal and let AI identify and log your food automatically.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">🍽️</div>
              <h3 className="text-xl font-semibold mb-2">Smart Meal Plans</h3>
              <p className="text-gray-600">
                Get personalized meal suggestions based on your preferences and goals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">🛒</div>
              <h3 className="text-xl font-semibold mb-2">Grocery Lists</h3>
              <p className="text-gray-600">
                Auto-generate shopping lists based on your weekly meal plans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-8 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Logo size="sm" />
              <p className="text-sm text-gray-500 mt-2">
                Healthy eating simplified with AI
              </p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-600 hover:text-primary">
                Privacy
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                Terms
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                Contact
              </a>
            </div>
          </div>
          <div className="text-center mt-6 text-sm text-gray-500">
            © 2025 NutriAI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
