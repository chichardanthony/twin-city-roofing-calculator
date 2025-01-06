import React from 'react';
import { 
  Label, 
  Input, 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue, 
  Checkbox 
} from "@/components/ui";

const RoofConfigForm = ({ 
  inputs, 
  onInputChange, 
  onRoofTypeChange, 
  onGeringToggle 
}) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Roof Configuration</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label>Roof Type</Label>
          <Select value={inputs.roofType} onValueChange={onRoofTypeChange}>
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
            onCheckedChange={onGeringToggle}
          />
          <Label htmlFor="gering">Property in Gering, NE</Label>
        </div>
        {/* Rest of the component remains the same */}
      </div>
    </div>
  );
};

export default RoofConfigForm;
