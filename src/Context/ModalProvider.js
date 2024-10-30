import { useState, createContext } from "react";
import data from '../data.js'

const ModalContext = createContext();

function ModalProvider({ children }) {
    const [showModal, setShowModal] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [currentStudent, setCurrentStudent] = useState({ name: '', age: '', class: '', phone: '' })
    const [listStudent, setListStudent] = useState(data);

    const addStudent = (st) => {
        setListStudent({...listStudent, st})
    }

    const updateStudent = (st) => {
        setListStudent({...listStudent, st})
    }

    return (
        <ModalContext.Provider value={{ showModal, setShowModal, isEditMode, setIsEditMode, currentStudent, setCurrentStudent, listStudent, setListStudent }}>
            {children}
        </ModalContext.Provider>
    )

}

export { ModalProvider, ModalContext }