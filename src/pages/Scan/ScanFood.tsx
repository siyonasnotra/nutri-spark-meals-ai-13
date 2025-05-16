
import React, { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, BarcodeIcon } from "lucide-react";

const ScanFood = () => {
  const [isScanning, setIsScanning] = useState(false);

  const startScanning = () => setIsScanning(true);
  const stopScanning = () => setIsScanning(false);

  return (
    <DashboardLayout title="Scan Food">
      <div className="space-y-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Scan to Log</h2>
        </div>

        {/* Camera preview / scan area */}
        <Card className="overflow-hidden border-2 border-dashed border-primary-200 relative aspect-square md:aspect-video">
          <CardContent className="p-0 flex items-center justify-center h-full bg-gray-100">
            {isScanning ? (
              // Mock camera view
              <div className="w-full h-full relative bg-black">
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <p className="animate-pulse">Scanning...</p>
                </div>
                <Button 
                  variant="secondary" 
                  className="absolute bottom-4 right-4 z-10" 
                  onClick={stopScanning}
                >
                  Cancel
                </Button>
              </div>
            ) : (
              <div className="text-center p-6">
                <div className="mb-6 flex justify-center">
                  <Camera size={64} className="text-primary-300" />
                </div>
                <h3 className="text-xl font-medium mb-2">Scan Your Food</h3>
                <p className="text-gray-500 mb-6">Take a photo of your meal or scan a barcode to log it instantly</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={startScanning}>
                    <Camera size={18} className="mr-2" />
                    Take Photo
                  </Button>
                  <Button variant="outline" onClick={startScanning}>
                    <BarcodeIcon size={18} className="mr-2" />
                    Scan Barcode
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Recent scans section */}
        <div className="mt-8">
          <h3 className="text-xl font-medium mb-4">Recent Scans</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Would be populated from history */}
            <Card className="hover-scale">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-md bg-gray-200"></div>
                  <div>
                    <h4 className="font-medium">Greek Yogurt</h4>
                    <p className="text-sm text-gray-500">Today, 8:30 AM</p>
                    <p className="text-xs text-primary-500 font-medium">120 calories</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover-scale">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-md bg-gray-200"></div>
                  <div>
                    <h4 className="font-medium">Whole Grain Toast</h4>
                    <p className="text-sm text-gray-500">Today, 8:35 AM</p>
                    <p className="text-xs text-primary-500 font-medium">180 calories</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ScanFood;
