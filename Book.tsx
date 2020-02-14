import React,{useState}from 'react';
import {flash} from 'ionicons/icons';
import hair from '../Assets/hair.jpg'
import makeUp from '../Assets/make_up.jpg'
import nails from '../Assets/nails.jpg'
import eye from '../Assets/eye.jpeg'
import foot from '../Assets/foot.jpg'
import waxing from '../Assets/waxing.jpg'
import {IonCard,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonPage,
    IonToolbar, IonAvatar, IonButtons, IonText, IonList, IonIcon, IonCardHeader, IonCardTitle } from '@ionic/react';
import './Book.css'
import '../themes/Variable.css'

function Book() {

    
  return (
    <IonPage className="ion-page">
    <IonHeader>
    <IonToolbar className="ion-toolbar" >
      <IonButtons className="ion-button-header">
        <IonIcon slot="start"icon={flash} size="large" className="ion-icon-header" />
        <IonText className="ion-text-header">GLAMSQUAD</IonText>
      </IonButtons>
    </IonToolbar>
  </IonHeader>
    <IonContent className="ion-content">
    <IonList className="ion-list">  
      <IonItem className="ion-item" onClick={event =>  window.location.href='/shop'}>
        <IonAvatar>
          <img  className="ion-image" src={hair}/>
        </IonAvatar>
          <IonCardHeader>
            <IonCardTitle className="ion-card-title-img">HAIR CARE</IonCardTitle>
          </IonCardHeader>
      </IonItem>

      <IonItem  className="ion-card" onClick={event =>  window.location.href='/shop'}>
        <IonAvatar>
          <img  className="ion-image" src={makeUp}/>
        </IonAvatar>
          <IonCardHeader>
            <IonCardTitle className="ion-card-title-img">FACIALS</IonCardTitle>
          </IonCardHeader>
      </IonItem>

      <IonItem className="ion-card" onClick={event =>  window.location.href='/shop'} >
        <IonAvatar>
          <img className="ion-image" src={nails}/>
        </IonAvatar>
      
        {/* <IonImg src={hair} className="ion-image"/> */}
          <IonCardHeader>
            <IonCardTitle className="ion-card-title-img">NAILS CARE</IonCardTitle>
          </IonCardHeader>
      </IonItem>
      <IonItem className="ion-card" onClick={event =>  window.location.href='/shop'} >
        <IonAvatar>
          <img className="ion-image" src={foot}/>
        </IonAvatar>
      
        {/* <IonImg src={hair} className="ion-image"/> */}
          <IonCardHeader>
            <IonCardTitle className="ion-card-title-img">FOOT CARE</IonCardTitle>
          </IonCardHeader>
      </IonItem>
      <IonItem className="ion-card" onClick={event =>  window.location.href='/shop'}>
        <IonAvatar>
          <img className="ion-image" src={waxing}/>
        </IonAvatar>
      
        {/* <IonImg src={hair} className="ion-image"/> */}
          <IonCardHeader>
            <IonCardTitle className="ion-card-title-img">WAXING</IonCardTitle>
          </IonCardHeader>
      </IonItem >
      <IonItem className="ion-card" onClick={event =>  window.location.href='/shop'}>
        <IonAvatar>
          <img className="ion-image" src={eye}/>
        </IonAvatar>
      
        {/* <IonImg src={hair} className="ion-image"/> */}
          <IonCardHeader>
            <IonCardTitle className="ion-card-title-img">EYE CARE</IonCardTitle>
          </IonCardHeader>
      </IonItem>
    </IonList>
    </IonContent>
  </IonPage>
  );
}

export default Book;
