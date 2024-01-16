import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/main.css"
import Footer from "./Footer"
import Header from "./Header"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

// StaticQuery används för att hämta data från contentful
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          description
          siteUrl
        }
      }
    }
  `)

  //Använder Helmet med author och title som visas på alla sidor som omsluts av Layout.

  return (
    <>
      <Helmet>
        <meta name="author" content={data.site.siteMetadata.author} />
        <meta name="title" content={data.site.siteMetadata.title} />
      </Helmet>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer className="footerContainer">
        <Footer />
      </footer>
    </>
  )
}

export default Layout
