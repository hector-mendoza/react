import { useState } from "react";

export const useForm = (initialForm, validateForm) => {
    // variables de estado que controlan el form
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    // eventos
    // mientras escribimos
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    // validaciones
    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateForm(form));
    };

    // al enviar
    const handleSubmit = (e) => { };

    return { form, errors, loading, response, handleChange, handleBlur, handleSubmit }
};