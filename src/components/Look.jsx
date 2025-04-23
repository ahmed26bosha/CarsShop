import React from 'react'
import img from "../images/electric-car.svg.png"
import img1 from "../images/electric-car2.svg.png"
const Look = () => {
  return (
<div className='look'>
  <section className='card lo1'>
    <div className='text'>
      <h1>Are You Looking<br />For a Car ?</h1>
      <p>We are committed to providing our customers with exceptional service.</p>
      <button className="get-started">Get Started ↗</button>
    </div>
    <img src={img} alt="electric car" />
  </section>

  <section className='card lo2'>
    <div className='text'>
      <h1>Do You Want to<br />Sell a Car ?</h1>
      <p>We are committed to providing our customers with exceptional service.</p>
      <button className="get-started dark">Get Started ↗</button>
    </div>
    <img src={img1} alt="sell car" />
  </section>
</div>
  )
}

export default Look