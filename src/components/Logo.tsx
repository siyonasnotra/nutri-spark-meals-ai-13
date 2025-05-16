
import React from "react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  type?: "full" | "icon";
}

const Logo = ({ size = "md", type = "full" }: LogoProps) => {
  const sizes = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-4xl",
  };

  if (type === "icon") {
    return (
      <div className="flex items-center justify-center">
        <div className={`font-bold ${sizes[size]} text-primary`}>
          N
          <span className="text-secondary">●</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <div className={`font-bold ${sizes[size]} text-primary flex items-center`}>
        Nutri
        <span className="text-secondary relative -top-0.5">●</span>
        <span className="text-primary">AI</span>
      </div>
    </div>
  );
};

export default Logo;
