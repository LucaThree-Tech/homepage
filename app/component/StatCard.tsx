import React from "react";
import { Meteors } from "./aceternity-ui/meteors";

interface StatCardProps {
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label }) => {
  return (
    <div className="relative bg-black/30 backdrop-blur-sm border border-gray-800 rounded-lg p-4 text-white overflow-hidden">
      <div className="relative z-10">
        <h3 className="text-4xl font-bold">{value}</h3>
        <p className="text-2xl text-gray-400">{label}</p>
      </div>
      <Meteors number={100} className="absolute inset-0" />
    </div>
  );
};

export default StatCard;
