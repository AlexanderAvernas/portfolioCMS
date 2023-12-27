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
        {/* <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 1.5 }}
        >
            <AboutImage src="images/NyCv.JPG" />
        </motion.div> */}
        <div>
        <GatsbyImage className='aboutImage' alt="contentfulPage.title" image={contentfulPage.image.gatsbyImage} ></GatsbyImage>
        </div>
    </div>
    <div className='cvContainer'>
        <a
            href="https://drive.google.com/file/d/1QF2g9Ecs1TU3S5vry5yjnuSh2iHKpUkr/view?usp=sharing"
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
