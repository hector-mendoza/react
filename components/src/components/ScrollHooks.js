import React, { useState, useEffect } from 'react';

export default function ScrollHooks() {

    const [scrollY, setScrollY] = useState(0);

    // Occur only once, when component has been mounted
    useEffect(() => {
        // console.log('Montage Phase - ComponentDidMount');

        const detectScroll = () => setScrollY(window.scrollY);

        window.addEventListener('scroll', detectScroll);

        return () => {
            window.removeEventListener('scroll', detectScroll);
        };
    }, []);

    // Occur every time that our variable state changes
    useEffect(() => {
        // console.log('Update Phase - Only this ComponentDidUpdate');

        // const detectScroll = () => setScrollY(window.scrollY);
        // window.addEventListener('scroll', detectScroll);
    }, [scrollY]);

    useEffect(() => {
        // console.log('Update Phase - ComponentDidUpdate');

        // const detectScroll = () => setScrollY(window.scrollY);
        // window.addEventListener('scroll', detectScroll);
    }); // if we don't specify the [] the useEffect will be executed every render

    useEffect(() => {
        // console.log('Dismount Phase - ComponentDidUnmount');

        // when function React knows that we need to unmount 
        return () => {
            // ... code
        }
    });

    return (
        <>
            <h2>Hooks - useEffect & LifeCycle</h2>
            <p>Scroll Y: {scrollY}px</p>
        </>
    )
}
