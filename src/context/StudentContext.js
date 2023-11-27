import { createContext, useReducer } from "react";

export const StudentContextObject = createContext();

const studentReducer = (state, action) => {
  switch (action.type) {
    case "add_student":
      return [...state, action.payload];
      break;

    case "delete_student":
      return state.filter((s) => s.id !== action.payload);
      break;

    case "edit_student":
      return state.map((s) => {
        if (s.id === action.payload.id) {
          return action.payload;
        }
        return s;
      });
      break;

    default:
      return state;
      break;
  }
};

const StudentContextProvider = ({ children }) => {
  const [students, dispatchStudents] = useReducer(studentReducer, [
    { id: 1, name: "ali" },
    { id: 2, name: "Tarık" },
    { id: 3, name: "Hande" },
    { id: 4, name: "Burak" },
    { id: 5, name: "Yeliz" },
  ]);

  // const valueToShare = {
  //   students,
  //   dispatchStudents,
  // };

  return (
    <StudentContextObject.Provider value={{ students, dispatchStudents }}>
      {children}
    </StudentContextObject.Provider>
  );
};

export default StudentContextProvider;
