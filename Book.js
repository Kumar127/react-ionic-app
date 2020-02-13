import React,{useState}from 'react';
import {flash} from 'ionicons/icons';
import hair from '../Assets/hair.jpg'
import makeUp from '../Assets/make_up.jpg'
import nails from '../Assets/nails.jpg'
import {IonCard,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonPage,
    IonToolbar, IonImg, IonButtons, IonText, IonList, IonIcon, IonCardHeader, IonCardTitle } from '@ionic/react';
import './Book.css'

function Book() {
    const [showModal, setShowModal] = useState(false)
    
  return (
    <IonPage>
    <IonHeader >
    <IonToolbar className="ion-toolbar">
      <IonButtons slot="start">
        <IonIcon icon={flash} size="large" className="ion-icon-header" />
        <IonText className="ion-text-header">GLAMSQUAD</IonText>
      </IonButtons>
    </IonToolbar>
  </IonHeader>
    <IonContent className="ion-content">
    <IonList className="ion-card">  
      <IonCard className="ion-card">
        <IonImg src={hair} className="ion-image"/>
          <IonCardHeader>
            <IonCardTitle className="ion-card-title-img">HAIR</IonCardTitle>
          </IonCardHeader>
      </IonCard>
      <IonCard className="ion-card">
        <IonImg src={makeUp} className="ion-image2"/>
          <IonCardHeader>
            <IonCardTitle className="ion-card-title-img">MAKE UP</IonCardTitle>
          </IonCardHeader>
      </IonCard>
      <IonCard className="ion-card">
        <IonImg src={nails} className="ion-image2"/>
          <IonCardHeader>
            <IonCardTitle className="ion-card-title-img">NAILS</IonCardTitle>
          </IonCardHeader>
      </IonCard>
            
    </IonList>















      {/* <IonCard color="tertiary" className="ion-card">
        <IonCardContent className="ion-content">
        <IonItem>
              <IonLabel  class="ion-label" position="stacked">Loan Amount</IonLabel> 
        </IonItem>
        <IonItem className="ion-range">
          <IonRange className="ion-range" min={0} max={50} step={10} snaps={true}   >
          <IonLabel slot="start">0</IonLabel>
        <IonLabel slot="end">100</IonLabel>
          </IonRange>
    </IonItem>
        </IonCardContent>
      </IonCard>
      <IonCard className="ion-card">
        <IonCardContent className="ion-content">
        <IonItem>
              <IonLabel class="ion-label" position="stacked">Tenure</IonLabel>
              <IonInput></IonInput>
        </IonItem>
        <IonItem className="ion-range">
          <IonRange className="ion-range" min={0} max={30} step={3} snaps={true}   >
          <IonLabel slot="start">0</IonLabel>
        <IonLabel slot="end">30</IonLabel>
          </IonRange>
    </IonItem>
        </IonCardContent>
      </IonCard>
      <IonCard className="ion-card">
        <IonCardContent className="ion-content">
        <IonItem>
              <IonLabel class="ion-label" position="stacked">Interest Rate</IonLabel>
              <IonInput></IonInput>
        </IonItem>
        <IonItem className="ion-range">
          <IonRange className="ion-range" min={0} max={20} step={4} snaps={true}   >
          <IonLabel slot="start">0</IonLabel>
        <IonLabel slot="end">20</IonLabel>
          </IonRange>
        </IonItem>
        </IonCardContent>
      </IonCard> */}
      {/* <IonModal isOpen={showModal}>
        <p>This is modal content</p>
        <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
      </IonModal>
      <IonButton className="ion-button-modal" expand="block" onClick={() => setShowModal(true)}>CALCULATE</IonButton> */}
    </IonContent>
  </IonPage>
  );
}

export default Book;
