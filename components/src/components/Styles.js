import React from 'react';
import moduleStyles from './Styles.module.css';
import Styles from './Styles.scss';

export default function StyleSheet() {
    let inline = {
        border: "5px solid #FFF",
        borderRadius: "10px",
        margin: "1.25rem"
    };
    return (
        <section className='styles bg-react'>
            <h2 className='styles-h2'>Styles on a separated CSS File</h2>
            <h3 style={{ border: "2px solid #FFF", borderRadius: "15px", margin: "1rem" }}>Inline Styles</h3>

            <h3 style={inline}>Inline Styles within a JS variable</h3>
            <h4 className={moduleStyles.success}>Styles with Modules</h4>
            <h4 className={moduleStyles.error}>Styles with Modules</h4>
            <h3 className='bg-sass'>Styles with SCSS</h3>
        </section>
    )
}