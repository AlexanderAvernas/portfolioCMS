import React from 'react'

const phoneNumber = "0707237966"
const email = "alexanderavernas@gmail.com"
const linkedinProfile =
  "https://www.linkedin.com/in/alexander-avern%C3%A4s-3aa752251/"

const  ContactTemplate = (contentfulPage) => {
  return (
    <div className="contact-container">
    <h1>{contentfulPage.title}</h1>
    <p className="contact-description">
      {contentfulPage.description.description}
    </p>
    <div className="contact-details">
      <p>📞 Phone: <a href={`tel:${phoneNumber}`}></a> {phoneNumber}</p>
      <p>✉️ Email: <a href={`mailto:${email}`}>{email}</a></p>
      <p>🔗 LinkedIn: linkedin.com/in/yourprofile</p>
    </div>
  </div>
  )
}

export default ContactTemplate
