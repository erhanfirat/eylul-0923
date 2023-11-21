const userInitial = {
  name: "",
  email: "",
};

export const userReducer = (state = userInitial, action) => {
  switch (action.type) {
    case "SET_USER_NAME":
      return { ...state, name: action.payload };
      break;

    case "SET_USER_EMAIL":
      return { ...state, email: action.payload };

    default:
      return state;
      break;
  }
};
