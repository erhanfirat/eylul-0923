const userInitial = {
  name: "",
  email: "",
  language: "tr",
  theme: "light",
};

export const userReducer = (state = userInitial, action) => {
  switch (action.type) {
    case "SET_USER_NAME":
      return { ...state, name: action.payload };
      break;

    case "SET_USER_EMAIL":
      return { ...state, email: action.payload };

    case "CHANGE_LANG":
      return { ...state, language: action.payload };

    default:
      return state;
      break;
  }
};
