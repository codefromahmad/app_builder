const initialState = {
  features: [],
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

    case "addFeatures":
      return {
        ...state,
        features: [...action.payload, ...state.features],
      };

    default:
      return state;
  }
};

export default features;
