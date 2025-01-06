import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const GuttersForm = ({ inputs, onInputChange }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Gutters and Downspouts</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label>5" Gutter Length (LF)</Label>
          <Input
            type="number"
            name="gutter5Length"
            value={inputs.gutter5Length || ''}
            onChange={onInputChange}
            min="0"
          />
        </div>
        <div>
          <Label>2x3" Downspout Length (LF)</Label>
          <Input
            type="number"
            name="downspout2x3Length"
            value={inputs.downspout2x3Length || ''}
            onChange={onInputChange}
            min="0"
          />
          <span className="text-sm text-gray-500">Rounds to nearest 10 LF</span>
        </div>
        <div>
          <Label>Hinge Extensions</Label>
          <Input
            type="number"
            name="hingeExtensions"
            value={inputs.hingeExtensions || ''}
            onChange={onInputChange}
            min="0"
          />
        </div>
      </div>
    </div>
  );
};

export default GuttersForm;
