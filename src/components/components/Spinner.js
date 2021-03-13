/*
 * Spinner derived from https://tobiasahlin.com/spinkit/.
 */

import React from 'react';

import './Spinner.css';

function Spinner({ size, color }) {
    size = size || 12;
    color = color || '#333';

    return (
        <div className="spinner">
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
        </div>
    );
}

export default Spinner;