const initialState = {
  user: null,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "setUser":
      return {
        ...state,
        user: action.payload,
      };

    case "deleteUser":
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export default user;

export const setUser = (userData) => ({
  type: "setUser",
  payload: userData,
});

export const deleteUser = () => {
  console.log("Deleting user...");
  return {
    type: "deleteUser",
  };
};
