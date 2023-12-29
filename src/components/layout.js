import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css';
import Footer from "./Footer";
import Header from "./header";


const Layout = ({ children }) => (
    <>
      <header>
        <Header/>
      </header>
      <main>{children}</main>
      <footer className="footerContainer">
        <Footer/>

      </footer>
    </>
  )


export default Layout
