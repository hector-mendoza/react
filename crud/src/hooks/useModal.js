import { useState } from "react";

// Custom Hook for our Modals
export const useModal = (initialValue = false) => {
    const [isOpen, setIsOpen] = useState(initialValue);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    // in this case, return everything as array
    return [isOpen, openModal, closeModal];
};