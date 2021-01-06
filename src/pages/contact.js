import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
    return (
            <Layout>
                <Head title="Contact" />
                <h1>Contact Me</h1>
                <p>You can write to me at <a href="mailto: eugenio@langaway.com">eugenio@langaway.com</a></p>
            </Layout>
    )
}

export default ContactPage