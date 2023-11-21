const studentInitial = [];

export const studentReducer = (state = studentInitial, action) => {
  switch (action.type) {
    case "SET_STUDENTS":
      return action.payload;
      break;

    default:
      return state;
      break;
  }
};
