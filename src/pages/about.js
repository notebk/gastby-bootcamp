import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/footer'
import Header from '../components/header'

const AboutPage = () => {
    return (
        <div>
            <Header />
            <h1>About Me</h1>
            <p>I am Eugenio, and I am working on learning Gatsby.js</p>
            <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
            <Footer />
        </div>
    )
}

export default AboutPage