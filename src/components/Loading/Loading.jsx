import React from 'react';

const Loading = ({ bgColor }) => {
    const mystyle = {
        backgroundColor: `${bgColor}`,
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textTransform: 'uppercase',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 100,
        fontFamily: 'fmain',
    };
    const spanStyle = {
        width: '100px',
        height: '100px',
        backgroundColor: 'white',
        color: 'black',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };
    return (
        <div style={mystyle}>
            <span style={spanStyle}>Loading</span>
        </div>
    );
};

export default Loading;
