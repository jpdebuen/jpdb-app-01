import React from 'react'

function MainWrapper({ children }) {
  return (
    <div className = 'container'>
      <div className ='row'>
        <div className = 'col-sm'>
          { children }
        </div>
      </div>
    </div>
  )
}

export default MainWrapper
