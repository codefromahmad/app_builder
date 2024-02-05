const initialState = {
  features: [],
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

    case "setCost":
      return {
        ...state,
        cost: action.payload,
      };

    case "setDuration":
      return {
        ...state,
        duration: action.payload,
      };

    default:
      return state;
  }
};

export default features;
