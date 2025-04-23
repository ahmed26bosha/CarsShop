import React from 'react'
import img1 from '../images/Container.png'
import img2 from '../images/Container (1).png'
import img3 from '../images/Container (2).png'
const Blog = () => {
  return (
    <div>
        <section className='sec1'>
            <h1>Latest Blog Posts</h1>
            <a href="v">View All↗</a>
        </section>
        <div className='sec2'>
            <section>
                <img src={img1} alt="" />
                <pre>Admin   .   November 22, 2023     </pre>
                <h2>2024 BMW ALPINA XB7 with exclusive details,
                extraordinary</h2>
            </section>
            <section>
            <img src={img2} alt="" />
                <pre>Admin   .   November 22, 2023     </pre>
                <h2>BMW X6 M50i is designed to exceed your
                sportiest.</h2>
            </section>
            <section>
            <img src={img3} alt="" />
                <pre>Admin   .   November 22, 2023     </pre>
                <h2>BMW X5 Gold 2024 Sport Review: Light on
                Sport</h2>
            </section>
        </div>
    </div>
  )
}

export default Blog