
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";
import { useNavigate } from "react-router-dom";

const QuickScan = () => {
  const navigate = useNavigate();
  
  return (
    <Card className="shadow-sm bg-gradient-to-r from-primary-50 to-primary-100">
      <CardContent className="p-4 flex justify-between items-center">
        <div>
          <h3 className="font-semibold text-lg text-primary-800">Log a Meal</h3>
          <p className="text-sm text-primary-700">
            Scan food or enter manually
          </p>
        </div>
        <Button 
          onClick={() => navigate("/scan")}
          className="bg-primary hover:bg-primary-600"
        >
          <Camera size={18} className="mr-2" /> Scan Food
        </Button>
      </CardContent>
    </Card>
  );
};

export default QuickScan;
