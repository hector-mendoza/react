import React from 'react';
import { useForm } from '../hooks/useForm';

// 
const initialForm = {};
const validations = (form) => {

};

const ContactForm = () => {
    const { form, errors, loading, response, handleChange, handleBlur, handleSubmit } = useForm(initialForm, validations);
    return (
        <div>
            <h2>Formulario de Contacto</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' name='name' placeholder='Escribe tu nombre'
                    onChange={handleChange} onBlur={handleBlur}
                    value={form.name} required />
                <input type='email' name='email' placeholder='Escribe tu email'
                    onChange={handleChange} onBlur={handleBlur}
                    value={form.email} required />
                <input type='text' name='subject' placeholder='Asunto a tratar...'
                    onChange={handleChange} onBlur={handleBlur}
                    value={form.subject} required />
                <textarea name='comments' placeholder='Escribe tus comentarios'
                    cols='50' rows='5'
                    onChange={handleChange} onBlur={handleBlur}
                    value={form.comments} required />
                <input type='submit' value='Enviar' />
            </form>
        </div>
    );
}

export default ContactForm;