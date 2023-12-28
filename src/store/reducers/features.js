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

    default:
      return state;
  }
};

export default features;
