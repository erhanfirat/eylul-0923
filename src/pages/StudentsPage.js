import { useEffect, useReducer, useState } from "react";

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

const StudentsPage = () => {
  const [students, dispatchStudents] = useReducer(studentReducer, [
    { id: 1, name: "ali" },
    { id: 2, name: "Tarık" },
    { id: 3, name: "Hande" },
    { id: 4, name: "Burak" },
    { id: 5, name: "Yeliz" },
  ]);
  const [newStudent, setNewStudent] = useState({
    id: null,
    name: "",
  });

  useEffect(() => {
    console.log("students:", students);
  }, [students]);

  return (
    <div>
      <ul>
        {students.map((student, i) => (
          <li key={i}>
            {student.name}{" "}
            <button onClick={() => setNewStudent({ ...student })}>
              Düzenle
            </button>
            <button
              onClick={() =>
                dispatchStudents({
                  type: "delete_student",
                  payload: student.id,
                })
              }
            >
              Sil
            </button>
          </li>
        ))}
      </ul>
      <input
        onChange={(e) =>
          setNewStudent({ id: newStudent.id, name: e.target.value })
        }
        value={newStudent.name}
        placeholder="Student's name..."
      />
      <button
        onClick={() => {
          if (newStudent.id) {
            // edit
            dispatchStudents({
              type: "edit_student",
              payload: newStudent,
            });
          } else {
            // add
            dispatchStudents({
              type: "add_student",
              payload: {
                id: Math.round(Math.random() * 999999999),
                name: newStudent.name,
              },
            });
          }

          setNewStudent({
            id: null,
            name: "",
          });
        }}
      >
        Save Student
      </button>
    </div>
  );
};

export default StudentsPage;
