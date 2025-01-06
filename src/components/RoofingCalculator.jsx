import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Import our component definitions from above
const RoofingCalculator = () => {
  const [inputs, setInputs] = useState({
    // Project Configuration
    baseSquares: 0,
    twoStorySquares: 0,
    steepSquares: 0,
    roofType: 'gable',
    layers: 1,
    isGeringNE: false,
    
    // Additional Components
    iceAndWaterLength: 0,
    ridgeVentLength: 0,
    
    // Gutters and Downspouts
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

  // Calculate results using the utility functions
  const results = {
    baseCalc: {
      tearOff: inputs.baseSquares * 75,
      extraLayer: inputs.layers > 1 ? inputs.baseSquares * 20 : 0
    },
    heritage: {
      application: Math.ceil(inputs.baseSquares * (inputs.roofType === 'gable' ? 1.10 : inputs.roofType === 'simpleHip' ? 1.13 : 1.18)) * 300,
      twoStory: {
        tearOff: inputs.twoStorySquares * 20,
        on: Math.ceil(inputs.twoStorySquares * (inputs.roofType === 'gable' ? 1.10 : inputs.roofType === 'simpleHip' ? 1.13 : 1.18)) * 20
      },
      steep: {
        tearOff: inputs.steepSquares * 20,
        on: Math.ceil(inputs.steepSquares * (inputs.roofType === 'gable' ? 1.10 : inputs.roofType === 'simpleHip' ? 1.13 : 1.18)) * 20
      },
      iceAndWater: inputs.isGeringNE ? inputs.iceAndWaterLength * 2 : 0,
      ridgeVent: inputs.ridgeVentLength * 7,
      totalNoGutters: 0 // Will be calculated below
    },
    legacy: {
      application: Math.ceil(inputs.baseSquares * (inputs.roofType === 'gable' ? 1.10 : inputs.roofType === 'simpleHip' ? 1.13 : 1.18)) * 385,
      twoStory: {
        tearOff: inputs.twoStorySquares * 20,
        on: Math.ceil(inputs.twoStorySquares * (inputs.roofType === 'gable' ? 1.10 : inputs.roofType === 'simpleHip' ? 1.13 : 1.18)) * 20
      },
      steep: {
        tearOff: inputs.steepSquares * 20,
        on: Math.ceil(inputs.steepSquares * (inputs.roofType === 'gable' ? 1.10 : inputs.roofType === 'simpleHip' ? 1.13 : 1.18)) * 20
      },
      iceAndWater: inputs.isGeringNE ? inputs.iceAndWaterLength * 2 : 0,
      ridgeVent: inputs.ridgeVentLength * 7,
      totalNoGutters: 0 // Will be calculated below
    },
    guttersAndDownspouts: {
      gutters: inputs.gutter5Length * 9.75,
      downspouts: Math.ceil(inputs.downspout2x3Length / 10) * 10 * 9.75,
      hingeExtensions: inputs.hingeExtensions * 12,
      total: (inputs.gutter5Length * 9.75) + 
             (Math.ceil(inputs.downspout2x3Length / 10) * 10 * 9.75) + 
             (inputs.hingeExtensions * 12)
    }
  };

  // Calculate totals
  results.heritage.totalNoGutters = 
    results.baseCalc.tearOff + 
    results.baseCalc.extraLayer + 
    results.heritage.application +
    results.heritage.twoStory.tearOff + 
    results.heritage.twoStory.on +
    results.heritage.steep.tearOff + 
    results.heritage.steep.on +
    results.heritage.iceAndWater + 
    results.heritage.ridgeVent;

  results.legacy.totalNoGutters = 
    results.baseCalc.tearOff + 
    results.baseCalc.extraLayer + 
    results.legacy.application +
    results.legacy.twoStory.tearOff + 
    results.legacy.twoStory.on +
    results.legacy.steep.tearOff + 
    results.legacy.steep.on +
    results.legacy.iceAndWater + 
    results.legacy.ridgeVent;

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
