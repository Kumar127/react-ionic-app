import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonTitle,
  IonToolbar,IonInput, IonBackButton, IonButtons, IonText, IonRange
} from '@ionic/react';
import { book, build, colorFill, grid, arrowBack } from 'ionicons/icons';
import React from 'react';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton  text="" icon={arrowBack} class="ion-back-button" />
          <IonText class="ion-text-header">EMI CALCULATOR</IonText>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
      <IonContent className="ion-content">
        <IonCard className="ion-card">
          <IonCardContent className="ion-content">
          <IonItem>
                <IonLabel position="fixed">Loan Amount</IonLabel> 
                <IonInput></IonInput>
          </IonItem>
          <IonItem class="ion-range">
            <IonRange class="ion-range" min={0} max={50} step={10} snaps={true}  >
            <IonLabel slot="start">0</IonLabel>
          <IonLabel slot="end">100 TH</IonLabel>
 
              </IonRange>
      </IonItem>
          </IonCardContent>
        </IonCard>
        <IonCard className="ion-card">
          <IonCardContent className="ion-content">
          <IonItem>
                <IonLabel position="fixed">Tenure</IonLabel>
                <IonInput></IonInput>
          </IonItem>
          </IonCardContent>
        </IonCard>
        <IonCard className="ion-card">
          <IonCardContent className="ion-content">
          <IonItem>
                <IonLabel position="fixed">Interest Rate</IonLabel>
                <IonInput></IonInput>
          </IonItem>
          </IonCardContent>
        </IonCard>

        <IonList lines="none">
          <IonListHeader>
            <IonLabel>Resources</IonLabel>
          </IonListHeader>

          <IonItem href="https://ionicframework.com/docs/" target="_blank">
            <IonIcon slot="start" color="medium" icon={book} />
            <IonLabel>Ionic Documentation</IonLabel>
          </IonItem>
          <IonItem href="https://ionicframework.com/docs/building/scaffolding" target="_blank">
            <IonIcon slot="start" color="medium" icon={build} />
            <IonLabel>Scaffold Out Your App</IonLabel>
          </IonItem>
          <IonItem href="https://ionicframework.com/docs/layout/structure" target="_blank">
            <IonIcon slot="start" color="medium" icon={grid} />
            <IonLabel>Change Your App Layout</IonLabel>
          </IonItem>
          <IonItem href="https://ionicframework.com/docs/theming/basics" target="_blank">
            <IonIcon slot="start" color="medium" icon={colorFill} />
            <IonLabel>Theme Your App</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
