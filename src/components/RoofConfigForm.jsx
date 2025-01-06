import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const RoofConfigForm = () => {
  const [inputs, setInputs] = React.useState({
    baseSquares: 0,
    twoStorySquares: 0,
    steepSquares: 0,
    roofType: 'gable',
    layers: 1,
    isGeringNE: false
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

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Roof Configuration</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label>Roof Type</Label>
          <Select value={inputs.roofType} onValueChange={handleRoofTypeChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select roof type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gable">Gable (1.10)</SelectItem>
              <SelectItem value="simpleHip">Simple Hip (1.13)</SelectItem>
              <SelectItem value="complexHip">Complex Hip (1.18)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox 
            id="gering"
            checked={inputs.isGeringNE}
            onCheckedChange={handleGeringToggle}
          />
          <Label htmlFor="gering">Property in Gering, NE</Label>
        </div>

        <div>
          <Label>Base Squares</Label>
          <Input
            type="number"
            name="baseSquares"
            value={inputs.baseSquares || ''}
            onChange={handleInputChange}
            min="0"
          />
        </div>
        <div>
          <Label>Number of Layers</Label>
          <Input
            type="number"
            name="layers"
            value={inputs.layers}
            onChange={handleInputChange}
            min="1"
          />
        </div>
        <div>
          <Label>Two Story Squares</Label>
          <Input
            type="number"
            name="twoStorySquares"
            value={inputs.twoStorySquares || ''}
            onChange={handleInputChange}
            min="0"
          />
        </div>
        <div>
          <Label>Steep Squares</Label>
          <Input
            type="number"
            name="steepSquares"
            value={inputs.steepSquares || ''}
            onChange={handleInputChange}
            min="0"
          />
        </div>
      </div>
    </div>
  );
};

export default RoofConfigForm;
