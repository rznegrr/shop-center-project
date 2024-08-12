import React from 'react'

function Button(props) {
  return (
    <div>
        <button className={`text-white bg-info800 px-6 py-2 text-sm rounded-xl ${props.className}`}>
            {props.name}
        </button>
    </div>
  )
}

export default Button