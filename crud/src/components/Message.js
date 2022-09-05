import React from 'react';

const Message = ({ msg, bgColor }) => {
    let styles = {
        padding: "1rem",
        marginBottom: "1rem",
        fontWeigth: 600,
        textAlign: "center",
        color: "#FFF",
        backgroundColor: bgColor,
        borderRadius: "15px",
    }
    return (
        <div style={styles}>
            <p>
                {msg}
            </p>
        </div>
    );
}

export default Message;