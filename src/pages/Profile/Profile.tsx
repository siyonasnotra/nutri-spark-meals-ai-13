
import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  User,
  Goal,
  UtensilsCrossed,
  Activity,
  Weight,
  LogOut,
  Settings,
  Bell,
  Shield,
  ChevronRight,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const ProfileItem = ({
  icon: Icon,
  title,
  value,
  onClick,
}: {
  icon: React.ElementType;
  title: string;
  value: string;
  onClick?: () => void;
}) => {
  return (
    <div
      className="flex items-center justify-between py-3 cursor-pointer hover:bg-gray-50 px-2 rounded-lg transition-colors"
      onClick={onClick}
    >
      <div className="flex items-center gap-4">
        <div className="bg-primary-50 p-2 rounded-full">
          <Icon size={20} className="text-primary" />
        </div>
        <div>
          <h4 className="font-medium text-gray-800">{title}</h4>
          <p className="text-sm text-gray-500">{value}</p>
        </div>
      </div>
      <ChevronRight size={18} className="text-gray-400" />
    </div>
  );
};

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success("Logged out successfully");
    navigate("/");
  };

  return (
    <DashboardLayout title="Profile">
      <div className="space-y-6">
        <Card className="overflow-hidden">
          <div className="bg-gradient-to-r from-primary-400 to-primary-500 p-6 text-white">
            <div className="flex items-center gap-4">
              <div className="bg-white rounded-full p-1">
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-primary text-2xl font-bold">
                  S
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold">Sarah Johnson</h1>
                <p className="opacity-90">sarah.johnson@example.com</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="text-center bg-white/10 rounded-lg p-2">
                <p className="text-sm opacity-90">Weight</p>
                <p className="font-bold">65 kg</p>
              </div>
              <div className="text-center bg-white/10 rounded-lg p-2">
                <p className="text-sm opacity-90">Height</p>
                <p className="font-bold">170 cm</p>
              </div>
              <div className="text-center bg-white/10 rounded-lg p-2">
                <p className="text-sm opacity-90">BMI</p>
                <p className="font-bold">22.5</p>
              </div>
            </div>
          </div>

          <CardContent className="p-4">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Personal Information</h2>

              <ProfileItem
                icon={User}
                title="Personal Details"
                value="Age, gender, measurements"
                onClick={() => toast.info("Edit Personal Details")}
              />

              <ProfileItem
                icon={Goal}
                title="Fitness Goal"
                value="Weight Loss"
                onClick={() => toast.info("Edit Fitness Goal")}
              />

              <ProfileItem
                icon={UtensilsCrossed}
                title="Dietary Preferences"
                value="Vegetarian, Low Carb"
                onClick={() => toast.info("Edit Dietary Preferences")}
              />

              <ProfileItem
                icon={Activity}
                title="Activity Level"
                value="Moderately Active"
                onClick={() => toast.info("Edit Activity Level")}
              />

              <Separator />

              <h2 className="text-lg font-semibold pt-2">Settings</h2>

              <ProfileItem
                icon={Bell}
                title="Notifications"
                value="Meal reminders, tips"
                onClick={() => toast.info("Edit Notifications")}
              />

              <ProfileItem
                icon={Shield}
                title="Privacy"
                value="Data sharing, permissions"
                onClick={() => toast.info("Edit Privacy Settings")}
              />

              <ProfileItem
                icon={Settings}
                title="App Settings"
                value="Units, language, theme"
                onClick={() => toast.info("Edit App Settings")}
              />
            </div>

            <div className="mt-8">
              <Button
                variant="outline"
                className="w-full border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
                onClick={handleLogout}
              >
                <LogOut size={18} className="mr-2" />
                Log Out
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
