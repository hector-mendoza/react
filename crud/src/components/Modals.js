import React from 'react';
import Modal from './Modal';

const Modals = () => {
    return (
        <div>
            <h2>Modals</h2>
            <button>Modal 1</button>
            <Modal>
                <h3>Modal 1</h3>
                <p>Hello, this is the content for Modal 1</p>
                <img src='https://via.placeholder.com/300.png/09f/fffC/O' alt='animals' />
            </Modal>
            <Modal>
                <h3>Modal 2</h3>
                <p>Hello, this is the content for Modal 2</p>
                <img src='https://via.placeholder.com/200.png/09f/fffC/O' alt='animals' />
            </Modal>
        </div>
    );
}

export default Modals;