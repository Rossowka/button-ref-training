import React, { useRef, useEffect } from 'react';

function Button() {
    const btnRef = useRef(null);

    useEffect(() => {
        btnRef.current.style.background = "red";
        btnRef.current.style.color = "white";
    }, []);

    function onClickHandler() {
        btnRef.current.style.background = 'darkgoldenrod';
        btnRef.current.innerText = 'Click!';
    };

    function onMouseOverHandler() {
        btnRef.current.style.color = 'black';
        btnRef.current.style.background = 'gold';
        btnRef.current.innerText = 'Eee! A mouse!';
    }

    function onMouseOutHandler() {
        btnRef.current.innerText = 'But wait..';
        btnRef.current.style.background = 'darkgrey';
        btnRef.current.style.color = 'black';
    }

    return (
        <div>
            <button ref={btnRef} onClick={onClickHandler} onMouseOver={onMouseOverHandler} onMouseOut={onMouseOutHandler}>
                Lock and load!
            </button>
        </div>
    );
}

export default Button;
