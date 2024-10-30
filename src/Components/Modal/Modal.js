import "./Modal.css";
import { ModalContext } from "../../Context/ModalProvider";
import { useContext } from "react";

function Modal() {
    const MContext = useContext(ModalContext);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        MContext.setIsEditMode(false);
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
                        value={MContext.student.name}
                        // onChange={handleInputChange}
                        required
                    />
                </label>
                <label>
                    Tuổi:
                    <input
                        type="number"
                        name="age"
                        value={MContext.student.age}
                        // onChange={handleInputChange}
                        required
                    />
                </label>
                <label>
                    Lớp:
                    <input
                        type="text"
                        name="class"
                        value={MContext.student.class}
                        // onChange={handleInputChange}
                        required
                    />
                </label>
                <label>
                    Phone:
                    <input
                        type="text"
                        name="phone"
                        value={MContext.student.phone}
                        // onChange={handleInputChange}
                        required
                    />
                </label>
                <div className="btn-group">
                    <button className="btn btn-save" type="submit">Save</button>
                    <button className="btn btn-cancel" type="button" onClick={() => MContext.setShowModal(false)}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default Modal;
