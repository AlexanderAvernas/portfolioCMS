import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image"
import usePortfolio from '../hooks/use-portfoliolist'
import { Link } from "gatsby"

function PortfolioTemplate( contentfulPage ) {

    const portfolioData = usePortfolio();

  return (
    <div>
    <div className="portfolioContainer">
    <h1>{contentfulPage.title}</h1>
    {portfolioData.map((edge, index) => {
        return (
            <div className="portfolioInnerContainer" key={index} >
                <div className="portfolioTextContainer">
                <h2>
                <Link to={`/portfolio/${edge.node.slug}/`}>
                  {edge.node.title}
                </Link>
              </h2>
                <p>{edge.node.description.description}</p>
                <ul className="portfolioListContainer">
                    {edge.node.techniques.map((technique, index) => (
                        <li className="portfolioListItem" key={index}>{technique}</li>
                    ))}
                    </ul>
                    </div>
                <GatsbyImage alt="edge.node.title" image={edge.node.itemImage.gatsbyImage} ></GatsbyImage>


            </div>
        )
    })}
    </div>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    </div>

  )
}

export default PortfolioTemplate
