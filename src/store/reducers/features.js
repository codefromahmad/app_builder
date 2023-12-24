const initialState = {
  features: ["feature1", "feature2", "feature3"],
};

const features = (state = initialState, action) => {
  switch (action.type) {
    case "setFeatures":
      return {
        ...state,
        features: action.payload,
      };

    default:
      return state;
  }
};

export default features;
