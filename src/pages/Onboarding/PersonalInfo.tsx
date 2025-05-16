
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface PersonalInfoProps {
  onDataChange: (data: {
    age: string;
    weight: string;
    height: string;
    gender: string;
  }) => void;
  initialData?: {
    age: string;
    weight: string;
    height: string;
    gender: string;
  };
}

const PersonalInfo = ({ onDataChange, initialData }: PersonalInfoProps) => {
  const [formData, setFormData] = useState({
    age: initialData?.age || "",
    weight: initialData?.weight || "",
    height: initialData?.height || "",
    gender: initialData?.gender || "male",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | string,
    field?: string
  ) => {
    if (typeof e === "string" && field) {
      // For radio button
      const updatedData = { ...formData, [field]: e };
      setFormData(updatedData);
      onDataChange(updatedData);
    } else if (typeof e !== "string") {
      // For input fields
      const { name, value } = e.target;
      const updatedData = { ...formData, [name]: value };
      setFormData(updatedData);
      onDataChange(updatedData);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">Personal Information</h1>
        <p className="text-gray-600 mt-2">
          This helps us create a personalized nutrition plan for you
        </p>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="age">Age</Label>
            <Input
              id="age"
              name="age"
              type="number"
              placeholder="Years"
              value={formData.age}
              onChange={handleChange}
              className="w-full"
              min="12"
              max="120"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="weight">Weight</Label>
            <div className="relative">
              <Input
                id="weight"
                name="weight"
                type="number"
                placeholder="kg"
                value={formData.weight}
                onChange={handleChange}
                className="w-full"
                min="30"
                max="300"
              />
              <div className="absolute inset-y-0 right-3 flex items-center text-gray-400 pointer-events-none">
                kg
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="height">Height</Label>
          <div className="relative">
            <Input
              id="height"
              name="height"
              type="number"
              placeholder="cm"
              value={formData.height}
              onChange={handleChange}
              className="w-full"
              min="100"
              max="250"
            />
            <div className="absolute inset-y-0 right-3 flex items-center text-gray-400 pointer-events-none">
              cm
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="gender">Gender</Label>
          <RadioGroup
            value={formData.gender}
            onValueChange={(value) => handleChange(value, "gender")}
            className="flex space-x-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="male" />
              <Label htmlFor="male">Male</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="female" />
              <Label htmlFor="female">Female</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="other" id="other" />
              <Label htmlFor="other">Other</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
