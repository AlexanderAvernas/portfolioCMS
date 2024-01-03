import * as React from 'react';
import '../css/main.css'
import { GatsbyImage } from "gatsby-plugin-image"

const AboutTemplate = ( contentfulPage ) => {

  return (
    <div className='aboutContainer'>
    <h1 className='aboutHeader'>{contentfulPage.title}</h1>
    <div className='aboutInfoContainer'>
        <p className='aboutText'>
            {contentfulPage.description.description}
            <br />
            <br />
            See my resume for more information and experiences.
            <br />
        </p>
        <picture >
                <source
                  media="(max-width: 767px)"
                  srcSet={contentfulPage.image.gatsbyImage.images.fallback.srcSet}
                />
                <GatsbyImage
                  className='aboutImage'
                  alt="contentfulPage.title"
                  image={contentfulPage.image.gatsbyImage}
                />
              </picture>
        <div>
        {/* <GatsbyImage className='aboutImage' alt="contentfulPage.title" image={contentfulPage.image.gatsbyImage} ></GatsbyImage> */}
        </div>
    </div>
    <div className='cvContainer'>
        <a
            href={contentfulPage.cvlink}
            target="_blank"
            rel="noopener noreferrer"
        >
            <button className='cvButton'>Resume</button>
        </a>
    </div>
</div>

    // <main>

    //     <h1>{contentfulPage.title}</h1>

    // </main>
  );
};

export default AboutTemplate;
