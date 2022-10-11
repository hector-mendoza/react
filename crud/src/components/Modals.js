import React from 'react';
import { useModal } from '../hooks/useModal';
import Modal from './Modal';
import ContactForm from './ContactForm';
import ModalPortal from './ModalPortal';

const Modals = () => {

    // only for Modal 1
    const [isOpenModal1, openModal1, closeModal1] = useModal(false);

    // only for Modal Contact
    const [isOpenModalForm, openModalForm, closeModalForm] = useModal(false);

    const [isOpenPortal, openModalPortal, closeModalPortal] = useModal(false);

    return (
        <div>
            <h2>Modals</h2>
            <button onClick={openModal1}>Modal 1</button>
            <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                <h3>Modal 1</h3>
                <p>Hello, this is the content for Modal 1</p>
                <img src='https://via.placeholder.com/300.png/09f/fffC/O' alt='animals' />
            </Modal>
            <button onClick={openModalForm}>Modal Form</button>
            <Modal isOpen={isOpenModalForm} closeModal={closeModalForm}>
                <ContactForm />
            </Modal>

            {/* Portals */}
            <button onClick={openModalPortal}>Modal Portal</button>
            <ModalPortal isOpen={isOpenPortal} closeModal={closeModalPortal}>
                <h3>Modal on Portals</h3>
                <p>
                    This is the content from a Modal that loads in a different
                    DOM node than the ReactApp (using Portals)
                </p>
                <img src='https://via.placeholder.com/300.png/09f/fffC/O' alt='animals' />
            </ModalPortal>
        </div>
    );
}

export default Modals;