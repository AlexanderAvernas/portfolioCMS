import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css';
import {Link} from "gatsby";
import Footer from "./Footer";
import Header from "./header";


const Layout = ({ children }) => (
    <>
      <header>
        <Header/>
        <Link to="/">Gatsby ITHS-starter</Link></header>
      <main>{children}</main>
      <footer className="footerContainer">
        <Footer/>

      </footer>
    </>
  )


export default Layout
