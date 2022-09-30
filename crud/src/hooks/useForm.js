import { useState } from "react";
import { helpHttp } from '../helpers/helpHttp';

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
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateForm(form));

        // if form with no errors...
        if (Object.keys(errors).length === 0) {
            alert('enviando form...');
            setLoading(true);
            helpHttp().post('https://formsubmit.io/ajax/hec1702@gmail.com', {
                body: form,
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            }).then((res) => {
                setLoading(false);
                setResponse(true);

                setForm(initialForm);

                // desaparecer message after sending...
                setTimeout(() => {
                    setResponse(false);
                }, 1500);
            });
        } else {
            return;
        }
    };

    return { form, errors, loading, response, handleChange, handleBlur, handleSubmit }
};