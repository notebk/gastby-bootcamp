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
    const blogArr = data.allMarkdownRemark.edges
    return (
            <Layout>
                <h1>Blog</h1>
                <p>Posts will show up here later on.</p>
                <ol>
                    {
                        blogArr.map(function(d) {
                            return (<li>
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