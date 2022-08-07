import React, { useState, useEffect } from 'react';

function Clock({ hour }) {
    return <h3>{hour}</h3>
}

export default function ClockHooks() {
    const [hour, setHour] = useState(new Date().toLocaleTimeString());
    const [visible, setVisible] = useState(false);

    // only when visible change their value this useEffect will be executed
    useEffect(() => {
        let tempo;

        if (visible) {
            tempo = setInterval(() => {
                setHour(new Date().toLocaleTimeString());
            }, 1000);
        } else {
            clearInterval(tempo);
        }
        return () => {
            // console.log('Dismount Phase - ComponentDidUnmount');
            clearInterval(tempo);
        }
    }, [visible]);

    return (
        <>
            <h2>Clock with Hooks</h2>
            {visible && <Clock hour={hour} />}
            <button onClick={() => setVisible(true)}>start</button>
            <button onClick={() => setVisible(false)}>stop</button>
        </>
    )
}