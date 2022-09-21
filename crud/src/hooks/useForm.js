import { useState } from "react";

export const useForm = (initialForm, validateForm) => {
    // variables de estado que controlan el form
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    // eventos
    const handle = (e) => { }

    // mientras escribimos
    const handleChange = (e) => { }

    // validaciones
    const handleBlur = (e) => { }

    // al enviar
    const handleSubmit = (e) => { }

    return { form, errors, loading, response, handleChange, handleBlur, handleSubmit }
};