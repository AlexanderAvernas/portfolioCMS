import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import {
  IonFooter,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonIcon,
} from "@ionic/react"
import { call, mail, logoLinkedin } from "ionicons/icons"
import '../css/main.css'


function Footer() {
    const data = useStaticQuery(graphql`
    query {
      contentfulFooter {
        title
        email
        mobile
        linkedin
      }
    }
  `)

  const phoneNumber = data.contentfulFooter.mobile
  const email = data.contentfulFooter.email
  const linkedinProfile = data.contentfulFooter.linkedin

//   const contentfulFooter = data.allContentfulFooter.edges[0].node;
  return (
    <IonFooter>
      <IonGrid  >
        <IonRow className="ion-justify-content-center">
          <IonCol size="12" size-md="4" className="footerColumn">
            <IonItem className="footerItem">
              <IonIcon icon={call} slot="start" />
              Mobile:
              <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
            </IonItem>
          </IonCol>
          <IonCol size="12" size-md="4" className="footerColumn">
            <IonItem className="footerItem">
              <IonIcon icon={mail} slot="start" />
              Email:
              <a href={`mailto:${email}`}> {email}</a>
            </IonItem>
          </IonCol>
          <IonCol size="12" size-md="4" className="footerColumn">
            <IonItem className="footerItem">
              <IonIcon icon={logoLinkedin} slot="start" />
              LinkedIn:
              <a
                href={linkedinProfile}
                target="_blank"
                rel="noopener noreferrer"
              >
                My profile
              </a>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow class="ion-justify-content-center">
        <IonCol size="12" size-md="12" className="footerColumn">
            <div className="footerCopyright">
              &copy; {new Date().getFullYear()} {data.contentfulFooter.title}
            </div>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonFooter>
  )
}

export default Footer
