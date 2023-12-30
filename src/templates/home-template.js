import * as React from 'react';
import { Link } from 'gatsby';
import '../css/main.css';
import example from '../images/example.png'

const HomeTemplate = (contentfulPage) => {
  return (
    <main className='homeContainer'>
      <section className='leftContainer' >
        <svg viewBox="0 0 100 100" className="spinning-circle">
          <path
            id="circlePath"
            fill="none"
            strokeWidth="4"
            stroke="hsl(0 100% 50% / 0.5)"
            d="M 10, 50 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
          />
          <text id="text" fontFamily="monospace" fontSize="12" fontWeight="bold" fill="var(--text-1)">
            <textPath id="textPath" href="#circlePath">
              {contentfulPage.title} {contentfulPage.title}
            </textPath>
          </text>
          <g>
            <circle cx="50" cy="50" r="30" fill="blue" onClick={() => alert('Button clicked!')} />
            {/* Text inside the button */}
            {/* <text x="50" y="47" textAnchor="middle" dy="4" fill="white" fontSize="4">
              About me
            </text> */}
            <image x="30" y="30" href={example} height="40" width="40" onClick={() => alert('Button clicked!')} />
          </g>
        </svg>
      </section>
      <section className='rightContainer'>
        <div>
            <h1>{contentfulPage.title}</h1>
            <h1>{contentfulPage.description.description}</h1>
        </div>

      </section>
      {/* <Link to="/">Go back to the homepage</Link>
      <Link to="/portfolio">Se min portfolio</Link> */}
    </main>
  );
};

export default HomeTemplate;
