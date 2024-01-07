import React from 'react'


const  ContactTemplate = (contentfulPage) => {
  return (
    <div className="contact-container">
    <h1>{contentfulPage.title}</h1>
    <p className="contact-description">
      {contentfulPage.description.description}
    </p>
    <div className="contact-details">
      <p>📞 Mobile: <a href={`tel:${contentfulPage.phonenumber}`}>{contentfulPage.phonenumber}</a></p>
      <p>✉️ Email: <a href={`mailto:${contentfulPage.maillink}`}>{contentfulPage.maillink}</a></p>
      <p>🔗 LinkedIn: <a
                href={contentfulPage.linkedinlink}
                target="_blank"
                rel="noopener noreferrer"
              >My Profile</a></p>
    </div>
  </div>
  )
}

export default ContactTemplate
