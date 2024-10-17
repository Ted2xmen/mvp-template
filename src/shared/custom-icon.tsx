import { iconMap, Icons } from "@/lib/icons";
import React from "react";

interface IconProps {
  icon: Icons;
  className?: string | undefined;
}

export const CustomIcon: React.FC<IconProps> = ({ icon, className }) => {
  const Icon = iconMap[icon];
  return <Icon className={className + " size-3" || " size-3"} />;
};
