import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Estimate Summary</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Heritage Class 3 */}
        <Card>
          <CardHeader>
            <CardTitle>Heritage Class 3</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <ResultRow label="Base Tear Off" value={results.baseCalc.tearOff} />
              {results.baseCalc.extraLayer > 0 && (
                <ResultRow label="Extra Layer Tear Off" value={results.baseCalc.extraLayer} />
              )}
              <ResultRow label="Base Application" value={results.heritage.application} />
              <ResultRow label="Two Story Tear Off" value={results.heritage.twoStory.tearOff} />
              <ResultRow label="Two Story Application" value={results.heritage.twoStory.on} />
              <ResultRow label="Steep Tear Off" value={results.heritage.steep.tearOff} />
              <ResultRow label="Steep Application" value={results.heritage.steep.on} />
              <ResultRow label="Ice & Water Shield" value={results.heritage.iceAndWater} />
              <ResultRow label="Ridge Vent" value={results.heritage.ridgeVent} />
              <Separator className="my-2" />
              <ResultRow 
                label="Total (without Gutters)" 
                value={results.heritage.totalNoGutters} 
                bold={true}
              />
            </div>
          </CardContent>
        </Card>

        {/* Legacy Class IV */}
        <Card>
          <CardHeader>
            <CardTitle>Legacy Class IV</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <ResultRow label="Base Tear Off" value={results.baseCalc.tearOff} />
              {results.baseCalc.extraLayer > 0 && (
                <ResultRow label="Extra Layer Tear Off" value={results.baseCalc.extraLayer} />
              )}
              <ResultRow label="Base Application" value={results.legacy.application} />
              <ResultRow label="Two Story Tear Off" value={results.legacy.twoStory.tearOff} />
              <ResultRow label="Two Story Application" value={results.legacy.twoStory.on} />
              <ResultRow label="Steep Tear Off" value={results.legacy.steep.tearOff} />
              <ResultRow label="Steep Application" value={results.legacy.steep.on} />
              <ResultRow label="Ice & Water Shield" value={results.legacy.iceAndWater} />
              <ResultRow label="Ridge Vent" value={results.legacy.ridgeVent} />
              <Separator className="my-2" />
              <ResultRow 
                label="Total (without Gutters)" 
                value={results.legacy.totalNoGutters} 
                bold={true}
              />
            </div>
          </CardContent>
        </Card>

        {/* Gutters & Downspouts */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Gutters & Downspouts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <ResultRow label="5\" Gutters" value={results.guttersAndDownspouts.gutters} />
              <ResultRow label="2x3\" Downspouts" value={results.guttersAndDownspouts.downspouts} />
              <ResultRow label="Hinge Extensions" value={results.guttersAndDownspouts.hingeExtensions} />
              <Separator className="my-2" />
              <ResultRow 
                label="Total Gutters & Downspouts" 
                value={results.guttersAndDownspouts.total} 
                bold={true}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CalculationResults;
