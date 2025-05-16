
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Plus, Minus } from "lucide-react";

const WaterTracker = () => {
  const [glasses, setGlasses] = useState(4);
  const targetGlasses = 8;

  const addGlass = () => {
    setGlasses((prev) => Math.min(prev + 1, targetGlasses));
  };

  const removeGlass = () => {
    setGlasses((prev) => Math.max(prev - 1, 0));
  };

  return (
    <Card className="shadow-sm bg-info-50">
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg text-info-600">Water Intake</h3>
            <p className="text-sm text-info-700">
              {glasses} of {targetGlasses} glasses
            </p>
          </div>
          <span className="text-3xl">💧</span>
        </div>

        <Progress
          value={(glasses / targetGlasses) * 100}
          className="h-2 mt-3 bg-info-100"
        >
          <div className="h-full bg-info-400 rounded-full" />
        </Progress>

        <div className="flex justify-between items-center mt-4">
          <Button
            variant="outline"
            size="sm"
            className="rounded-full"
            onClick={removeGlass}
            disabled={glasses <= 0}
          >
            <Minus size={16} />
          </Button>
          <div className="flex-1 mx-3 text-center">
            <div className="text-info-600 text-xl font-medium">
              {Math.round((glasses / targetGlasses) * 100)}%
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="rounded-full"
            onClick={addGlass}
            disabled={glasses >= targetGlasses}
          >
            <Plus size={16} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default WaterTracker;
