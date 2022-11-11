import React from 'react';

const Button = React.forwardRef((props, ref) => (
    <button
        ref={ref}
        onClick={props.onClick}
        onMouseOver={props.onMouseOver}
        onMouseOut={props.onMouseOut}>
        Lock and load!
    </button>
));

export default Button;
