
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OnboardingLayout from "@/components/OnboardingLayout";
import PersonalInfo from "./PersonalInfo";
import FitnessGoals from "./FitnessGoals";
import DietaryPreferences from "./DietaryPreferences";
import ActivityLevel from "./ActivityLevel";
import CreateAccount from "./CreateAccount";
import { toast } from "sonner";

const OnboardingFlow = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  const [userData, setUserData] = useState({
    personal: {
      age: "",
      weight: "",
      height: "",
      gender: "male",
    },
    fitnessGoal: "",
    dietaryPreferences: [] as string[],
    activityLevel: "",
    account: {
      name: "",
      email: "",
      password: "",
    },
  });

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // In a real app, we would save the user data to a database
      console.log("User data:", userData);
      toast.success("Profile created successfully!");
      navigate("/dashboard");
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const isNextDisabled = () => {
    switch (currentStep) {
      case 1:
        return !userData.personal.age || !userData.personal.weight || !userData.personal.height;
      case 2:
        return !userData.fitnessGoal;
      case 3:
        return userData.dietaryPreferences.length === 0;
      case 4:
        return !userData.activityLevel;
      case 5:
        return !userData.account.name || !userData.account.email || !userData.account.password;
      default:
        return false;
    }
  };

  return (
    <OnboardingLayout
      currentStep={currentStep}
      totalSteps={totalSteps}
      onNext={handleNext}
      onPrevious={handlePrevious}
      nextDisabled={isNextDisabled()}
    >
      {currentStep === 1 && (
        <PersonalInfo
          onDataChange={(data) => setUserData({ ...userData, personal: data })}
          initialData={userData.personal}
        />
      )}
      {currentStep === 2 && (
        <FitnessGoals
          onDataChange={(goal) => setUserData({ ...userData, fitnessGoal: goal })}
          initialGoal={userData.fitnessGoal}
        />
      )}
      {currentStep === 3 && (
        <DietaryPreferences
          onDataChange={(prefs) => setUserData({ ...userData, dietaryPreferences: prefs })}
          initialPreferences={userData.dietaryPreferences}
        />
      )}
      {currentStep === 4 && (
        <ActivityLevel
          onDataChange={(level) => setUserData({ ...userData, activityLevel: level })}
          initialLevel={userData.activityLevel}
        />
      )}
      {currentStep === 5 && (
        <CreateAccount
          onDataChange={(data) => setUserData({ ...userData, account: data })}
          initialData={userData.account}
        />
      )}
    </OnboardingLayout>
  );
};

export default OnboardingFlow;
