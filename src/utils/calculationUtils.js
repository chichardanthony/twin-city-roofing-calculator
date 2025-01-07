const calculateResults = (inputs) => {
  const getWasteFactor = (roofType) => {
    switch(roofType) {
      case 'gable': return 1.10;
      case 'simpleHip': return 1.13;
      case 'complexHip': return 1.18;
      default: return 1.10;
    }
  };

  const wasteFactor = getWasteFactor(inputs.roofType);
  
  // Base calculations
  const baseCalc = {
    tearOff: inputs.baseSquares * 75,
    extraLayer: inputs.layers > 1 ? inputs.baseSquares * 20 : 0
  };

  // Heritage calculations
  const heritage = {
    application: Math.ceil(inputs.baseSquares * wasteFactor) * 300,
    twoStory: {
      tearOff: inputs.twoStorySquares * 20,
      on: Math.ceil(inputs.twoStorySquares * wasteFactor) * 20
    },
    steep: {
      tearOff: inputs.steepSquares * 20,
      on: Math.ceil(inputs.steepSquares * wasteFactor) * 20
    },
    iceAndWater: inputs.isGeringNE ? inputs.iceAndWaterLength * 2 : 0,
    ridgeVent: inputs.ridgeVentLength * 7
  };

  // Legacy calculations
  const legacy = {
    application: Math.ceil(inputs.baseSquares * wasteFactor) * 385,
    twoStory: {
      tearOff: inputs.twoStorySquares * 20,
      on: Math.ceil(inputs.twoStorySquares * wasteFactor) * 20
    },
    steep: {
      tearOff: inputs.steepSquares * 20,
      on: Math.ceil(inputs.steepSquares * wasteFactor) * 20
    },
    iceAndWater: inputs.isGeringNE ? inputs.iceAndWaterLength * 2 : 0,
    ridgeVent: inputs.ridgeVentLength * 7
  };

  // Gutters calculations
  const guttersAndDownspouts = {
    gutters: inputs.gutter5Length * 9.75,
    downspouts: Math.ceil(inputs.downspout2x3Length / 10) * 10 * 9.75,
    hingeExtensions: inputs.hingeExtensions * 12,
    total: (inputs.gutter5Length * 9.75) + 
           (Math.ceil(inputs.downspout2x3Length / 10) * 10 * 9.75) + 
           (inputs.hingeExtensions * 12)
  };

  // Calculate totals
  heritage.totalNoGutters = 
    baseCalc.tearOff + 
    baseCalc.extraLayer + 
    heritage.application +
    heritage.twoStory.tearOff + 
    heritage.twoStory.on +
    heritage.steep.tearOff + 
    heritage.steep.on +
    heritage.iceAndWater + 
    heritage.ridgeVent;

  legacy.totalNoGutters = 
    baseCalc.tearOff + 
    baseCalc.extraLayer + 
    legacy.application +
    legacy.twoStory.tearOff + 
    legacy.twoStory.on +
    legacy.steep.tearOff + 
    legacy.steep.on +
    legacy.iceAndWater + 
    legacy.ridgeVent;

  return {
    baseCalc,
    heritage,
    legacy,
    guttersAndDownspouts
  };
};
