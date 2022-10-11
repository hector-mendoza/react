import ReactDOM from 'react-dom';
import "./Modal.css";

const ModalPortal = ({ children, isOpen, closeModal }) => {

    // to avoid closing modal when clicking on the article/modal container
    const handleModalContainerClick = e => { e.stopPropagation(); };

    return ReactDOM.createPortal(
        <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
            <div className="modal-container" onClick={handleModalContainerClick}>
                <button className="modal-close" onClick={closeModal}>CLOSE</button>
                {children}
            </div>
        </article>,
        document.getElementById('modal')
    );
}

export default ModalPortal;