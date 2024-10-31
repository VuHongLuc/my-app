import "./Modal.css";
import { ModalContext } from "../../Context/ModalProvider";
import { useContext, useRef } from "react";

function Modal() {
    const MContext = useContext(ModalContext);

    const nameRef = useRef();
    const ageRef = useRef();
    const classRef = useRef();
    const phoneRef = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const phoneRegex = /^(0|\+84)\d{9}$/i;
        if(typeof(+nameRef.current.value) != 'string'){
            alert("Tên phải là chuỗi");
        }else if (ageRef.current.value< 0 || ageRef.current.value >120){
            alert("Tuổi không đúng");
        } else if (!phoneRegex.test(phoneRef.current.value)){
            alert("Số điện thoại không đúng");
        }else{
            MContext.setListStudent([
                {
                    id: MContext.listStudent.length + 1,
                    name: nameRef.current.value,
                    age: ageRef.current.value,
                    class: classRef.current.value,
                    phone: phoneRef.current.value,
                },
                ...MContext.listStudent])
        }
    }

    return (
        <div className="form-modal">
            <form
                onSubmit={handleFormSubmit}
            >
                <h2>{MContext.isEditMode ? 'Chỉnh Sửa Sinh Viên' : 'Thêm Sinh Viên'}</h2>
                <label>
                    Tên:
                    <input
                        type="text"
                        name="name"
                        defaultValue={MContext.currentStudent.name}
                        ref={nameRef}
                        required
                    />
                </label>
                <label>
                    Tuổi:
                    <input
                        type="number"
                        name="age"
                        defaultValue={MContext.currentStudent.age}
                        ref={ageRef}
                        required
                    />
                </label>
                <label>
                    Lớp:
                    <input
                        type="text"
                        name="class"
                        defaultValue={MContext.currentStudent.class}
                        ref={classRef}
                        required
                    />
                </label>
                <label>
                    Phone:
                    <input
                        type="text"
                        name="phone"
                        defaultValue={MContext.currentStudent.phone}
                        ref={phoneRef}
                        required
                    />
                </label>
                <div className="btn-group">
                    <button className="btn btn-save" type="submit">{MContext.isEditMode ? 'Save' : 'Add'}</button>
                    <button className="btn btn-cancel" type="button" onClick={() => MContext.setShowModal(false)}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default Modal;
