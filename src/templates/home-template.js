import * as React from "react"
import "../css/main.css"
import { GatsbyImage } from "gatsby-plugin-image"
const HomeTemplate = contentfulPage => {
  return (
    <main className="homeContainer">
      <section className="leftContainer">
        <div className="homeTextContainer">
          <h1 className="homeTextsubTitle">
            {contentfulPage.description.description}
          </h1>
          <h1 className="homeText">{contentfulPage.title}</h1>
          {/* <p className='homeDescritionText'>{contentfulPage.description.description}</p>
            <div>
                <button className='homeButton'>Portfolio</button>
                <button className='homeButton'>About</button>
            </div> */}
        </div>
      </section>
      <section className="rightContainer">
        <svg viewBox="0 0 100 100" className="spinning-circle">
          <path
            id="circlePath"
            fill="none"
            strokeWidth="4"
            stroke="hsl(0 100% 60% / 0.5)"
            d="M 10, 50 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
          />
          <text
            id="text"
            fontFamily="monospace"
            fontSize="12"
            fontWeight="500"
            fill="var(--text-1)"
          >
            <textPath id="textPath" href="#circlePath">
              • {contentfulPage.title} •{contentfulPage.subtitle}
            </textPath>
          </text>
          <g>
            <circle
              cx="50"
              cy="50"
              r="30"
              fill="#ffffc5"
              onClick={() => alert("Button clicked!")}
            />
            <foreignObject x="25" y="25" width="50" height="50">
              <div xmlns="http://www.w3.org/1999/xhtml">
                <GatsbyImage
                  alt="image"
                  image={contentfulPage.image.gatsbyImage}
                />
              </div>
            </foreignObject>
          </g>
        </svg>
      </section>
    </main>
  )
}

export default HomeTemplate
