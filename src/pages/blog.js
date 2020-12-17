import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                    }
                }
            }
        }
    `)
    return (
            <Layout>
                <h1>Blog</h1>
                <p>Posts will show up here later on.</p>
                <ol>
                    {
                        data.allMarkdownRemark.edges.map((d) => {
                            return (
                            <li>
                                <h2>{d.node.frontmatter.title}</h2>
                                <p>{d.node.frontmatter.date}</p>
                            </li>
                            );
                        })
                    }
                </ol>
            </Layout>
    )
}

export default BlogPage