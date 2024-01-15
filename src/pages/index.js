import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import "../css/main.css"

//react-component
//alla componenter under /src/pages blir automatiskt sidor
//sidans namn = namnet på javascript-filen (dock - index.js = sajtens första sida)
const IndexPage = () => (
  <Layout>
    <Link to="/portfolioo">Se min portfolio</Link>
  </Layout>
)
//denna konstant sätter titeln på sidan
export const Head = () => <title>Home Page</title>

export default IndexPage
