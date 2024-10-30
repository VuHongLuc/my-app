import "./Table.css"
import { useContext, useState } from "react";
import { ModalContext } from "../../Context/ModalProvider.js";

function Table() {
  
  const MContext = useContext(ModalContext);
  const handleEdit = (student) =>{
    MContext.setIsEditMode(true);
    MContext.setShowModal(true);
    MContext.setCurrentStudent( {name: student.name, age: student.age, class: student.class, phone: student.phone });
  }

  return (
    <table className="student-table">
      <thead>
        <tr>
          <th>STT</th>
          <th>Tên</th>
          <th>Tuổi</th>
          <th>Lớp</th>
          <th>SĐT</th>
          <th>Quản lý</th>
        </tr>
      </thead>
      <tbody>
        {MContext.listStudent.map((student,index) => (
          <tr key={index}>
            <td>{index}</td>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.class}</td>
            <td>{student.phone}</td>
            <td className="btn-table">
              <button type="button" className="btn btn-management btn-edit" onClick={() => handleEdit(student)}>Edit</button>
              <button type="button" className="btn btn-management btn-delete" onClick={() => MContext.setListStudent(MContext.listStudent.filter(st => st.id !== student.id))}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
