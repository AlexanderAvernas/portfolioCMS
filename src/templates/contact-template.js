import React from "react"
import { Helmet } from "react-helmet"

// Data från contenful hämtas in från contenful via contentfulPage.url
// Använder Helmet där jag ger specifik information på denna sida.
const ContactTemplate = contentfulPage => {
  return (
    <div className="contactOutContainer">
      <Helmet>
        <meta name="description" content={"contactpage"} />
      </Helmet>
      <div className="contact-container">
        <h1>{contentfulPage.title}</h1>
        <p className="contact-description">
          {contentfulPage.description.description}
        </p>
        <div className="contact-details">
          <p>
            📞 Mobile:{" "}
            <a href={`tel:${contentfulPage.phonenumber}`}>
              {contentfulPage.phonenumber}
            </a>
          </p>
          <p>
            ✉️ Email:{" "}
            <a href={`mailto:${contentfulPage.maillink}`}>
              {contentfulPage.maillink}
            </a>
          </p>
          <p>
            🔗 LinkedIn:{" "}
            <a
              href={contentfulPage.linkedinlink}
              target="_blank"
              rel="noopener noreferrer"
            >
              My Profile
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactTemplate
