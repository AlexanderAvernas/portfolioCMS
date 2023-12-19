import React from 'react';
import { IonFooter, IonGrid, IonRow, IonCol, IonList, IonItem, IonIcon } from '@ionic/react';
import { call, mail, logoLinkedin } from 'ionicons/icons';

const phoneNumber = '0707237966';
const email = 'alexanderavernas@gmail.com';
const linkedinProfile = 'https://www.linkedin.com/in/alexander-avern%C3%A4s-3aa752251/';

function Footer() {
  return (
    <IonFooter>
      <IonGrid>
        <IonRow className="ion-align-items-center">
          <IonCol size="12" size-md="6">
            <IonList>
              <IonItem>
                <IonIcon icon={call} slot="start" />
                Mobile:
                <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
              </IonItem>
              <IonItem>
                <IonIcon icon={mail} slot="start" />
                Email:
                <a href={`mailto:${email}`}>{email}</a>
              </IonItem>
              <IonItem>
                <IonIcon icon={logoLinkedin} slot="start" />
                LinkedIn:
                <a href={linkedinProfile} target="_blank" rel="noopener noreferrer">
                  My profile
                </a>
              </IonItem>
            </IonList>
          </IonCol>
          <IonCol size="12" size-md="6">
            <div className="ion-text-center">
              &copy; {new Date().getFullYear()} AlexanderAvernas
            </div>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonFooter>
  );
}

export default Footer;
