import React, { useContext } from 'react';
import { Context } from '../App';
import '../app.css';

export default function Page1() {
    const data = useContext(Context);
    const itemStyle = {
        backgroundColor: '#f0f0f0',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        margin: '10px',
    };

    const textStyle = {
        fontSize: '16px',
        color: '#333',
    };
    return (
        <div>
            <div className="text-box">
                {data
                    .filter((x) => x.url[35] === '/' || (x.url[34] === '1' && x.url[35] === '0'))
                    .map((d, index) => (
                        <div key={index} style={itemStyle}>
                        <p style={textStyle}>{d.name}</p>
                    </div>
                    ),)}
            </div>
        </div>
    );
}
