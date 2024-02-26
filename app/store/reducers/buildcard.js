const initialState = {
  recentBuildCard: null,
};

const buildcard = (state = initialState, action) => {
  switch (action.type) {
    case "setRecentBuildCard":
      return {
        ...state,
        recentBuildCard: action.payload,
      };

    case "deleteBuildCard":
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export default buildcard;

export const setRecentBuildCard = (buildcard) => ({
  type: "setRecentBuildCard",
  payload: buildcard,
});

export const deleteBuildCard = () => {
  console.log("Deleting build card...");
  return {
    type: "deleteBuildCard",
  };
};
