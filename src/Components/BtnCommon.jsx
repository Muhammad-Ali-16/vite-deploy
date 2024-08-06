import React from 'react'

function BtnCommon(props) {
  return (
    <button className='common-btn'><a href="">{props.text} <i className="fa-solid fa-arrow-right"></i></a></button>
  )
}

export default BtnCommon