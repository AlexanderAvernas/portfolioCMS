// import * as React from "react"
// import { Link } from "gatsby"
// import { graphql, useStaticQuery } from "gatsby"
// import { GatsbyImage } from "gatsby-plugin-image"
// import Layout from "../components/layout"

// //sidans namn blir portfolio efter namnet på javascript-filen
// const SecondPage = () => {

//     const data = useStaticQuery(graphql`
//     query {
//         allContentfulProfileItem {
//             edges {
//               node{
//                 title
//                 techniques
//                 description {
//                   description
//                 }
//                 itemImage {
//                   gatsbyImage(width:250)
//                 }
//                 slug
//               }
//             }
//           }
//     }
//     `
//     )

//     return (
//   <Layout>
//     <div className="portfolioContainer">
//     <h1>Portfolio</h1>
//     {data.allContentfulProfileItem.edges.map((edge, index) => {
//         return (
//             <div className="portfolioInnerContainer" key={index} >
//                 <div className="portfolioTextContainer">
//                 <h2>
//                 <Link to={`/portfolio/${edge.node.slug}/`}>
//                   {edge.node.title}
//                 </Link>
//               </h2>
//                 <p>{edge.node.description.description}</p>
//                 <ul className="portfolioListContainer">
//                     {edge.node.techniques.map((technique, index) => (
//                         <li className="portfolioListItem" key={index}>{technique}</li>
//                     ))}
//                     </ul>
//                     </div>
//                 <GatsbyImage alt="edge.node.title" image={edge.node.itemImage.gatsbyImage} ></GatsbyImage>


//             </div>

//         )
//     })}
//     </div>
//     <p>Welcome to page 2</p>
//     <Link to="/">Go back to the homepage</Link>
//     </Layout>
//     )
// }

// export const Head = () => <title>Portfolio Page</title>

// export default SecondPage
