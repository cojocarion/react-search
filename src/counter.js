import React from "react";

const Counter = ({ message }) => (
    <div role="region" aria-live="polite" className="visually-hidden">
        {message}
    </div>
);

export default Counter;
