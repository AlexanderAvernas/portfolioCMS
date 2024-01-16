import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import usePortfolio from "../hooks/use-portfoliolist"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

// Data från contenful hämtas in från contenful via contentfulPage.url
function PortfolioTemplate(contentfulPage) {
  //Använder en hook för att hämta data till portofiolistan och mapa ut den.
  const portfolioData = usePortfolio()

  // Använder Helmet där jag ger specifik information på denna sida.
  return (
    <div>
      <div className="portfolioContainer">
        <div className="portfolioListTitleContainer">
          <h1 className="portfolioListTitle">{contentfulPage.title}</h1>
        </div>
        {portfolioData.map((edge, index) => {
          return (
            <Link
              className="portfolioInnerContainer"
              to={`/portfolio/${edge.node.slug}/`}
            >
              <div className="portfolioTextContainer">
                <Helmet>
                  <meta name="description" content={"Portfolio list"} />
                </Helmet>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.description.description}</p>
                <ul className="portfolioListContainer">
                  {edge.node.techniques.map((technique, index) => (
                    <li className="portfolioListItem" key={index}>
                      {technique}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Använder picture elemet för att anpassa bildstorlek */}
              <picture>
                <source
                  media="(max-width: 767px)"
                  srcSet={
                    edge.node.itemImage.gatsbyImage.images.fallback.srcSet
                  }
                />
                <GatsbyImage
                  className="portfolioListImage"
                  alt={edge.node.title}
                  image={edge.node.itemImage.gatsbyImage}
                />
              </picture>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default PortfolioTemplate
