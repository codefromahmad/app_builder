const initialState = {
  features: [],
  customFeatures: [],
  cost: null,
  duration: null,
  currentFeature: null,
};

const features = (state = initialState, action) => {
  switch (action.type) {
    case "setFeatures":
      return {
        ...state,
        features: action.payload,
      };
    case "setCurrentFeature":
      return {
        ...state,
        currentFeature: action.payload,
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
  return {
    type: "deleteFeatures",
  };
};

export const setCurrentFeature = (currentFeature) => {
  return {
    type: "setCurrentFeature",
    payload: currentFeature,
  };
};
