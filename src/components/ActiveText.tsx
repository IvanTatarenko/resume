import React from "react";

interface ActiveTextProps {
  label: string;
  isActive: boolean;
}

export const ActiveText: React.FC<ActiveTextProps> = ({ label, isActive }) => {
  return <p style={{ color: isActive ? "green" : "white" }}>{label}</p>;
};
