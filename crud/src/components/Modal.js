import "./Modal.css";

const Modal = ({ children, isOpen, closeModal }) => {

    // to avoid closing modal when clicking on the article/modal container
    const handleModalContainerClick = e => { e.stopPropagation(); };

    return (
        <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
            <div className="modal-container" onClick={handleModalContainerClick}>
                <button className="modal-close" onClick={closeModal}>CLOSE</button>
                {children}
            </div>
        </article>
    );
}

export default Modal;