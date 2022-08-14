import React, { createRef, useRef } from 'react';

// References avoid the direct DOM manipulation
export default function References() {
    let refMenuBtn = useRef(),
        refMenu = useRef();

    const handleToggleMenu = (e) => {
        // without references
        // const $menu = document.getElementById('menu');

        // if (e.target.textContent === "MENU") {
        //     e.target.textContent = "OPEN";
        //     $menu.style.display = "block";
        // } else {
        //     e.target.textContent = "MENU";
        //     $menu.style.display = "none";
        // }

        // with references - ".current" in order to access to the element
        if (refMenuBtn.current.textContent === "MENU") {
            refMenuBtn.current.textContent = "OPEN";
            refMenu.current.style.display = "block";
        } else {
            refMenuBtn.current.textContent = "MENU";
            refMenu.current.style.display = "none";
        }
    }
    return (
        <>
            <h2>References</h2>

            {/* Without references */}
            {/* <button id="menu-btn" onClick={handleToggleMenu}>MENU</button> */}

            {/* With references, ID is not necessary */}
            <button ref={refMenuBtn} onClick={handleToggleMenu}>MENU</button>
            <nav id="menu" ref={refMenu} style={{ display: "none" }}>
                <a href="#">Section 1</a>
                <br />
                <a href="#">Section 2</a>
                <br />
                <a href="#">Section 3</a>
                <br />
                <a href="#">Section 4</a>
                <br />
                <a href="#">Section 5</a>
            </nav>
        </>
    )
}