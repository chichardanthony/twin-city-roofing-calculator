import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const RoofingCalculator = () => {
  const [inputs, setInputs] = useState({
    baseSquares: 0,
    twoStorySquares: 0,
    steepSquares: 0,
    roofType: 'gable',
    layers: 1,
    isGeringNE: false,
    iceAndWaterLength: 0,
    ridgeVentLength: 0,
    gutter5Length: 0,
    downspout2x3Length: 0,
    hingeExtensions: 0
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: value === '' ? 0 : Number(value)
    }));
  };

  const handleRoofTypeChange = (value) => {
    setInputs(prev => ({
      ...prev,
      roofType: value
    }));
  };

  const handleGeringToggle = () => {
    setInputs(prev => ({
      ...prev,
      isGeringNE: !prev.isGeringNE
    }));
  };

  const results = calculateResults(inputs);

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
