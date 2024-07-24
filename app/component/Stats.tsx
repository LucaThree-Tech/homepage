import React from "react";

const Stats = () => {
  return (
    <section className="w-full bg-black text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        <StatItem value="+$152B" label="Total value enabled" />
        <StatItem value="+12M" label="Data-feed updates" />
        <StatItem value="+24" label="Networks we support" />
        <StatItem value="+$22M" label="Raised" />
      </div>
    </section>
  );
};

const StatItem = ({ value, label }: { value: string; label: string }) => {
  return (
    <div className="text-center">
      <h3 className="text-4xl font-bold">{value}</h3>
      <p className="text-sm mt-2">{label}</p>
    </div>
  );
};

export default Stats;
