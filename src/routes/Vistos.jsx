import React, { useState } from 'react';

export default function Vistos() {
    const [vistos, setVistos] = useState([]);

    return (
        <div className="vistos-container">
            <h1>Vistos</h1>
            <p>Welcome to the Vistos page</p>
        </div>
    );
}