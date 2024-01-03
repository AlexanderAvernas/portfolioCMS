import * as React from 'react';
import { Link } from 'gatsby';
import '../css/main.css';
import example from '../images/example.png'

const HomeTemplate = (contentfulPage) => {
  return (
    <main className='homeContainer'>
         <section className='leftContainer'>
        <div className='homeTextContainer'>
             <h1 className='homeTextsubTitle' >{contentfulPage.description.description}</h1>
            <h1 className='homeText' >{contentfulPage.title}</h1>
            {/* <p className='homeDescritionText'>{contentfulPage.description.description}</p>
            <div>
                <button className='homeButton'>Portfolio</button>
                <button className='homeButton'>About</button>
            </div> */}
        </div>

      </section>
      <section className='rightContainer' >
        <svg viewBox="0 0 100 100" className="spinning-circle">
          <path
            id="circlePath"
            fill="none"
            strokeWidth="4"
            stroke="hsl(0 100% 60% / 0.5)"
            d="M 10, 50 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
          />
          <text id="text" fontFamily="monospace" fontSize="12" fontWeight="500" fill="var(--text-1)">
            <textPath id="textPath" href="#circlePath">
            • {contentfulPage.title} •{contentfulPage.subtitle}
            </textPath>
          </text>
          <g>
            <circle cx="50" cy="50" r="30" fill="#ffffc5" onClick={() => alert('Button clicked!')} />
            {/* Text inside the button */}
            {/* <text x="50" y="47" textAnchor="middle" dy="4" fill="white" fontSize="4">
              About me
            </text> */}
            {/* <image x="30" y="30" href={example} height="40" width="40" onClick={() => alert('Button clicked!')} /> */}
          </g>
        </svg>
      </section>

      {/* <Link to="/">Go back to the homepage</Link>
      <Link to="/portfolio">Se min portfolio</Link> */}
    </main>
  );
};

export default HomeTemplate;
