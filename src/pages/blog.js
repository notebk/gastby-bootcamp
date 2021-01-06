import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import { Link, graphql, useStaticQuery } from 'gatsby'

import blogStyles from './blog.module.scss'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allContentfulBlogPost (
          sort: {
            fields: publishedDate,
            order: DESC
          }
        )
        {
          edges {
            node {
              title
              slug
              publishedDate(formatString: "MMM Do, YYYY")
            }
          }
        }
      }
    `)
    return (
            <Layout>
                <Head title="Blog" />
                <h1>Blog</h1>
                <p>Posts will show up here later on.</p>
                <ol className={blogStyles.posts}>
                    {
                        data.allContentfulBlogPost.edges.map((d) => {
                            return (
                            <li className={blogStyles.post}>
                                <Link to={`/blog/${d.node.slug}`} >
                                <h2>{d.node.title}</h2>
                                <p>{d.node.publishedDate}</p>
                                </Link>
                            </li>
                            );
                        })
                    }
                </ol>
            </Layout>
    )
}

export default BlogPage