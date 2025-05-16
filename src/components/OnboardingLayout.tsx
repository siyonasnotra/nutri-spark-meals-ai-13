
import React, { useState, ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface OnboardingLayoutProps {
  children: ReactNode;
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrevious: () => void;
  nextDisabled?: boolean;
}

const OnboardingLayout = ({ 
  children, 
  currentStep, 
  totalSteps,
  onNext,
  onPrevious,
  nextDisabled = false
}: OnboardingLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary-50 to-secondary-50 p-4 md:p-6">
      <div className="w-full max-w-lg mx-auto mt-8 mb-4">
        <div className="flex justify-between items-center mb-6">
          <button 
            onClick={onPrevious}
            disabled={currentStep === 1}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-full",
              currentStep === 1 ? "invisible" : "text-gray-600 hover:text-primary"
            )}
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Back</span>
          </button>
          <div className="text-center">
            <h2 className="font-semibold text-primary text-md">Step {currentStep} of {totalSteps}</h2>
          </div>
          <button 
            onClick={onNext}
            disabled={nextDisabled}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-full",
              nextDisabled 
                ? "bg-gray-200 text-gray-400 cursor-not-allowed" 
                : "bg-primary text-white hover:bg-primary-600"
            )}
          >
            <span className="hidden sm:inline">Next</span>
            <ArrowRight size={16} />
          </button>
        </div>
        <div className="flex gap-1 mb-8">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div 
              key={i} 
              className={cn(
                "flex-1 h-1 rounded-full transition-all duration-300",
                i < currentStep ? "bg-primary" : "bg-gray-200"
              )}
            />
          ))}
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-lg mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-8 animate-enter">
          {children}
        </div>
      </div>

      <div className="text-center mt-8 text-sm text-gray-500">
        <p>© 2025 NutriAI. All rights reserved.</p>
      </div>
    </div>
  );
};

export default OnboardingLayout;
