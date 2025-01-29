import React from 'react'

function Button({ text, type, onClick, className }) {
    return (
        <button type={type} onClick={onClick} className={`bg-black px-5 py-2 rounded-xl border-none text-xl text-white shadow-md ${className}`}>
            {text}
        </button>
    )
}

export default Button