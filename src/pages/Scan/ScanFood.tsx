
import React, { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Search, BarcodeScan } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

const ScanFood = () => {
  const [activeTab, setActiveTab] = useState("camera");
  const [scanning, setScanning] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleStartScan = () => {
    setScanning(true);
    // In a real app, this would activate the camera
    setTimeout(() => {
      setScanning(false);
      toast.success("Food identified: Greek Yogurt with Berries (320 calories)");
    }, 2000);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      toast.info(`Searching for "${searchQuery}"...`);
      // In a real app, this would search for foods
    }
  };

  return (
    <DashboardLayout title="Scan Food">
      <div className="space-y-6">
        <Tabs defaultValue="camera" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="camera">Camera</TabsTrigger>
            <TabsTrigger value="search">Search</TabsTrigger>
            <TabsTrigger value="barcode">Barcode</TabsTrigger>
          </TabsList>
          
          <TabsContent value="camera" className="space-y-4">
            <Card className="overflow-hidden">
              <div className="bg-gray-900 w-full h-60 flex items-center justify-center">
                {scanning ? (
                  <div className="text-center text-white">
                    <div className="animate-pulse mb-2">Scanning food...</div>
                    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full mx-auto animate-spin"></div>
                  </div>
                ) : (
                  <div className="text-center text-gray-400">
                    <Camera size={48} className="mx-auto mb-2 opacity-50" />
                    <p>Camera preview will appear here</p>
                  </div>
                )}
              </div>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-4">
                    Point your camera at food to identify it automatically using AI
                  </p>
                  <Button 
                    onClick={handleStartScan}
                    disabled={scanning}
                    className="bg-primary hover:bg-primary-600"
                  >
                    <Camera size={18} className="mr-2" />
                    {scanning ? "Scanning..." : "Start Scanning"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="search" className="space-y-4">
            <Card>
              <CardContent className="p-4 space-y-4">
                <form onSubmit={handleSearch} className="flex gap-2">
                  <Input 
                    placeholder="Search for a food item..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1"
                  />
                  <Button type="submit">
                    <Search size={18} className="mr-2" />
                    Search
                  </Button>
                </form>
                
                <div className="text-center py-8 text-gray-500">
                  <Search size={32} className="mx-auto mb-2 opacity-50" />
                  <p>Search results will appear here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="barcode" className="space-y-4">
            <Card className="overflow-hidden">
              <div className="bg-gray-900 w-full h-60 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <BarcodeScan size={48} className="mx-auto mb-2 opacity-50" />
                  <p>Barcode scanner will appear here</p>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-4">
                    Scan barcodes to quickly identify packaged food items
                  </p>
                  <Button className="bg-primary hover:bg-primary-600">
                    <BarcodeScan size={18} className="mr-2" />
                    Start Barcode Scanning
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default ScanFood;
