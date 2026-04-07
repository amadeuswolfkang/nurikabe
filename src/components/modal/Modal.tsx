import "./Modal.css";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

const Modal = ({ isOpen, onClose }: ModalProps) => {
    if (isOpen) {
        return (
            <div className="background" onClick = {onClose}>
                <div className="modal" onClick = {e => e.stopPropagation()}>
                    How to play this game
                    <button className="button">Next</button>
                    <button className="button" onClick = {onClose}>Close</button>
                </div>
            </div>
        );
    }
    else {
        return null;
    }
}

export default Modal;