import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  Separator 
} from "@/components/ui";

// Import custom components
import RoofConfigForm from './RoofConfigForm';
import AdditionalComponentsForm from './AdditionalComponentsForm';
import GuttersForm from './GuttersForm';
import CalculationResults from './CalculationResults';

const RoofingCalculator = () => {
  // Your existing state and calculation logic remains the same
  // ...

  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>Twin City Roofing Calculator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <RoofConfigForm 
            inputs={inputs}
            onInputChange={handleInputChange}
            onRoofTypeChange={handleRoofTypeChange}
            onGeringToggle={handleGeringToggle}
          />
          <Separator />
          <AdditionalComponentsForm 
            inputs={inputs}
            onInputChange={handleInputChange}
          />
          <Separator />
          <GuttersForm 
            inputs={inputs}
            onInputChange={handleInputChange}
          />
          <Separator />
          <CalculationResults results={results} />
        </CardContent>
      </Card>
    </div>
  );
};

export default RoofingCalculator;
