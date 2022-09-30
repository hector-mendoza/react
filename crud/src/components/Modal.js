import "./Modal.css";

const Modal = ({ children }) => {
    return (
        <article className="modal is-open">
            <div className="modal-container">
                <button className="modal-close">CLOSE</button>
                {children}
            </div>
        </article>
    );
}

export default Modal;