import React from 'react'

const InnerWrapper = (props) => {
  return (
    <div className="d-flex flex-column" id="content-wrapper">
        {props.children}
    </div>
  )
}

export default InnerWrapper