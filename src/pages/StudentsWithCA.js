import { useContext, useEffect, useState } from "react";
import { StudentContextObject } from "../context/StudentContext";

const StudentsWithCA = () => {
  const { students, dispatchStudents } = useContext(StudentContextObject);
  const [newStudent, setNewStudent] = useState({
    id: null,
    name: "",
  });

  useEffect(() => {
    console.log("students:", students);
  }, [students]);

  return (
    <div>
      <h1>Students with Context API</h1>
      <hr />
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

export default StudentsWithCA;
