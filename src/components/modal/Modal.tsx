import "./Modal.css";
import Tutorial from "../tutorial/Tutorial";
import { useState } from "react";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

const Modal = ({ isOpen, onClose }: ModalProps) => {

    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    if (isOpen) {
        return (
            <div className="background" onClick={onClose}>
                <div className="modal" onClick={e => e.stopPropagation()}>
                    <div className="close" onClick={onClose}>✖</div>
                    <Tutorial isButtonEnabled={setIsButtonEnabled} />

                    <div className="buttonContainer">
                        <button className="button" onClick={onClose}>Close</button>
                        <button className="button" disabled={!isButtonEnabled}>Next</button>
                    </div>
                </div>
            </div>
        );
    }
    else {
        return null;
    }
}

export default Modal;