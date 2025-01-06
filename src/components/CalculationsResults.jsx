import React from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  Separator 
} from "@/components/ui";

const ResultRow = ({ label, value, bold = false }) => {
  if (value === 0) return null;
  return (
    <div className={`flex justify-between ${bold ? 'font-bold' : ''}`}>
      <span>{label}:</span>
      <span>${value.toFixed(2)}</span>
    </div>
  );
};

const CalculationResults = ({ results }) => {
  // Rest of the component remains the same
  // ...
};

export default CalculationResults;
