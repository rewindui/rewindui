import * as React from 'react';

export const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center border-4 border-purple-50 shadow shadow-purple-200 rounded-full bg-gradient-to-bl from-purple-100 to-purple-200 p-2 w-16 h-16 mb-4">
        {icon}
      </div>

      <h4 className="font-semibold text-xl text-slate-700 mb-2">{title}</h4>

      <p className="text-lg text-slate-600">{description}</p>
    </div>
  );
};
