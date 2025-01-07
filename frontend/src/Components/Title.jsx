import React from 'react'

const Title = ({ title1, title2, titleStyles, paraStyles }) => {
  return (
    <div className={`${titleStyles} pb-5`}>
        <h3 className={`${titleStyles} h3`}>
            {title1}
            <span className='text-secondary !font-light'> {title2}</span>
        </h3>
        <p className={`${paraStyles} hidden`}>Discover the best deals on top-quality products, Crafted<br />to elevate your everyday experience.</p>
    </div>
  )
}

export default Title