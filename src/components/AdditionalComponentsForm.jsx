import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const AdditionalComponentsForm = ({ inputs, onInputChange }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Additional Components</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {inputs.isGeringNE && (
          <div>
            <Label>Ice & Water Shield Length (LF)</Label>
            <Input
              type="number"
              name="iceAndWaterLength"
              value={inputs.iceAndWaterLength || ''}
              onChange={onInputChange}
              min="0"
            />
          </div>
        )}
        <div>
          <Label>Ridge Vent Length (LF)</Label>
          <Input
            type="number"
            name="ridgeVentLength"
            value={inputs.ridgeVentLength || ''}
            onChange={onInputChange}
            min="0"
          />
        </div>
      </div>
    </div>
  );
};

export default AdditionalComponentsForm;
