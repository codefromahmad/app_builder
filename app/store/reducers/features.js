const initialState = {
  features: [],
  customFeatures: [],
  cost: null,
  duration: null,
};

const features = (state = initialState, action) => {
  switch (action.type) {
    case "setFeatures":
      return {
        ...state,
        features: action.payload,
      };
    case "addFeature":
      return {
        ...state,
        features: [action.payload, ...state.features],
      };

    case "removeFeature":
      const updatedFeatures = state.features.filter(
        (selectedFeature) => selectedFeature !== action.payload
      );
      console.log(updatedFeatures, "updatedFeatures from redux");
      return {
        ...state,
        features: updatedFeatures,
      };

    case "addFeatures":
      return {
        ...state,
        features: [...action.payload, ...state.features],
      };
    case "setCustomFeatures":
      return {
        ...state,
        customFeatures: action.payload,
      };

    case "addCustomFeature":
      return {
        ...state,
        customFeatures: [action.payload, ...state.customFeatures],
      };

    case "removeCustomFeature":
      const updateCustomFeatures = state.customFeatures.filter(
        (selectedFeature) => selectedFeature.id !== action.payload
      );
      console.log(updateCustomFeatures, "updateCustomFeatures from redux");
      return {
        ...state,
        customFeatures: updateCustomFeatures,
      };

    case "deleteFeatures":
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export default features;

export const deleteFeatures = () => {
  console.log("Deleting features...");
  return {
    type: "deleteFeatures",
  };
};
