import React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => {
    return (
        <div>
            <h1>About Me</h1>
            <p>I am Eugenio, and I am working on learning Gatsby.js</p>
            <p>Need a developer? <Link to="/contact">Contact me.</Link></p>

        </div>
    )
}

export default AboutPage