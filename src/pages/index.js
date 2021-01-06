import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const indexPage = () => {
  return (
      <Layout>
        <Head title="Home" />
        <h1>Hello.</h1>
        <h2>I'm Eugenio, a full-stack developer living in beautiful Monterrey.</h2>
      </Layout>
  )  
}

export default indexPage