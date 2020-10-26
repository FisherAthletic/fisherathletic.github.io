import React from "react"

function Footer() {
    const footerStyle = {
        position: 'fixed',
        color: 'white',
        backgroundColor: '#242D33',
        height: '200px',
        borderTop: '4px blue solid',
        bottom: '-100px'
    }
    return (
        <div style={footerStyle}>
            <h1>footer will go here</h1>
        </div>
    )
}

export default Footer