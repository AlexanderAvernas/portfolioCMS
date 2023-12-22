import * as React from 'react';
import { Link } from 'gatsby';
import '../css/main.css'

const HomeTemplate = ( contentfulPage ) => {

  return (
    <main className='test'>
      <section className='test'>
  <svg viewBox="0 0 100 100" >
    <path id="circlePath" fill="none" stroke-width="4" stroke="hsl(0 100% 50% / 0.5)" d="
          M 10, 50
          a 40,40 0 1,1 80,0
          a 40,40 0 1,1 -80,0
        " />
    <text id="text" font-family="monospace" font-size="12" font-weight="bold" fill="var(--text-1)">
      <textPath id="textPath" href="#circlePath">{contentfulPage.title} {contentfulPage.title}</textPath>
    </text>
    <g>
            <circle cx="50" cy="50" r="30" fill="blue" onClick={() => alert('Button clicked!')} />
            {/* Text inside the button */}
            <text x="50" y="47" textAnchor="middle" dy="4" fill="white" fontSize="4">
             About me
            </text>
          </g>
  </svg>
</section>
<Link to="/">Go back to the homepage</Link>
<Link to="/portfolio">Se min portfolio</Link>
    </main>
  );
};

export default HomeTemplate;
