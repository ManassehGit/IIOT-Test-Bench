import React from 'react'

const OuterWrapper = (props) => {
  return (
    <div id="wrapper">
        {props.children}
    </div>
  )
}

export default OuterWrapper