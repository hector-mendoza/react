import React from 'react';
import { useForm } from '../hooks/useForm';

// estructura inicial del form
const initialForm = {
    name: '',
    email: '',
    subject: '',
    comments: ''
};

// validar form, mostrar errores
const validationsForm = (form) => {
    let errors = {};

    if (!form.name.trim()) {
        errors.name = 'El campo NOMBRE es requerido'
    }
    if (!form.email.trim()) {
        errors.email = 'El campo EMAIL es requerido'
    }
    if (!form.subject.trim()) {
        errors.subject = 'El campo SUBJECT es requerido'
    }
    if (!form.comments.trim()) {
        errors.comments = 'El campo COMENTARIOS es requerido'
    }

    return errors;
};

let styles = {
    fontWeight: 'bold',
    color: '#dc3545',
    marginBottom: '30px'
};

const ContactForm = () => {
    const { form, errors, loading, response, handleChange, handleBlur, handleSubmit } = useForm(initialForm, validationsForm);
    return (
        <div>
            <h2>Formulario de Contacto</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' name='name' placeholder='Escribe tu nombre'
                    onChange={handleChange} onBlur={handleBlur}
                    value={form.name} required />
                {errors.name && <p style={styles}>{errors.name}</p>}
                <input type='email' name='email' placeholder='Escribe tu email'
                    onChange={handleChange} onBlur={handleBlur}
                    value={form.email} required />
                {errors.email && <p style={styles}>{errors.email}</p>}
                <input type='text' name='subject' placeholder='Asunto a tratar...'
                    onChange={handleChange} onBlur={handleBlur}
                    value={form.subject} required />
                {errors.subject && <p style={styles}>{errors.subject}</p>}
                <textarea name='comments' placeholder='Escribe tus comentarios'
                    cols='50' rows='5'
                    onChange={handleChange} onBlur={handleBlur}
                    value={form.comments} required />
                {errors.comments && <p style={styles}>{errors.comments}</p>}
                <input type='submit' value='Enviar' />
            </form>
        </div>
    );
}

export default ContactForm;