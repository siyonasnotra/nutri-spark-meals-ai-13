
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Logo from "@/components/Logo";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center py-4">
          <Logo size="md" />
        </header>

        <div className="flex-1 flex flex-col items-center justify-center py-20">
          <div className="text-center space-y-6 max-w-md">
            <div className="text-8xl font-bold text-primary">404</div>
            <h1 className="text-3xl font-bold text-gray-900">Page not found</h1>
            <p className="text-gray-600">
              Sorry, we couldn't find the page you're looking for. It might have been
              moved or doesn't exist.
            </p>
            <div className="pt-4">
              <Button
                onClick={() => navigate("/")}
                className="bg-primary hover:bg-primary-600"
              >
                Go back home
              </Button>
            </div>
          </div>
        </div>
      </div>

      <footer className="py-6 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          © 2025 NutriAI. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default NotFound;
