import React, { useState } from 'react';
import {menu, arrowForward, navigate, home} from 'ionicons/icons';
import women_salon from '../Assests/hair.jpg'
import AC from '../Assests/Ac_repair_pics.jpg'
import signIn from '../Componenets/signUp/SIgnIn/SignIn'
import men_salon from '../Assests/men_salon.jpg'
import electricians from '../Assests/electricians.jpg'
import plumber from '../Assests/plumber.jpg'
import carpenters from '../Assests/carpentry.jpg'
import clean from '../Assests/cleaning.png'
import pest from '../Assests/Pest.jpg'
import './Tab1.css'
import {IonCard,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonPage,
    IonToolbar, IonButtons, IonText, IonList, IonIcon, IonCardHeader, IonCardTitle, IonAvatar, IonSlides, IonSlide, IonListHeader, IonItemSliding, IonItemOptions, IonItemOption, IonSearchbar, IonThumbnail, IonGrid, IonRow, IonCol, IonButton } from '@ionic/react';

import Sig from '../Componenets/signUp/SIgnIn/SignIn'
function Book() {
    // const [showModal, setShowModal] = useState(false)
    const [search,setSearch]=useState('');
    const slidesOptions:any = {
      slidesPerView:1
}
    
  return (
    <>
    <IonHeader>
    <IonToolbar className="ion-toolbar" color="tertiary">
      <IonButtons slot="start">
        <IonIcon icon={navigate} size="large" className="ion-icon-header" slot="start"onClick={()=> window.location.href='/register'} />
        <IonText className="ion-text-header">GLAMSQUAD</IonText>
      </IonButtons>
    </IonToolbar>
  </IonHeader>
    <IonContent className="ion-content" >
    <IonSearchbar placeholder="What are You Looking for" className="search-bar" animated autocomplete="on" autoCorrect="on" value={search} onIonChange={e => setSearch(e.detail.value!)}></IonSearchbar>
    <IonCard className="ion-card-outer" mode="ios">
    <IonGrid>
    <IonRow>
      {search ? }
      <IonCard className="ion-card">
          <IonCol>
            <div onClick={()=>window.location.href='/login'}>
              <IonLabel>AC REPAIR STORE</IonLabel>
              <IonIcon icon={home}></IonIcon>
            </div>
          </IonCol>
          </IonCard >
          <IonCard className="ion-card">
          <IonCol>
            <div onClick={()=>window.location.href='/login'}>
              <IonLabel>PLUMBER</IonLabel>
              <IonIcon icon={home}></IonIcon>
            </div>
          </IonCol>
          </IonCard >
          <IonCard className="ion-card">
          <IonCol>
            <div onClick={()=>window.location.href='/login'}>
              <IonLabel>CARPENTER</IonLabel>
              <IonIcon icon={home}></IonIcon>
            </div>
          </IonCol>
          </IonCard>
          <IonCard className="ion-card">
          <IonCol>
            <div onClick={()=>window.location.href='/login'}>
              <IonLabel>COOK NEAR YOU</IonLabel>
              <IonIcon icon={home}></IonIcon>
            </div>
          </IonCol>
          </IonCard>
          <IonCard className="ion-card">
          <IonCol>
            <div onClick={()=>window.location.href='/login'}>
              <IonLabel>PARTY DECORATION & ARRANGEMENT</IonLabel>
              <IonIcon icon={home}></IonIcon>
            </div>
          </IonCol>
          </IonCard>
          <IonCard className="ion-card">
          <IonCol>
            <div onClick={()=>window.location.href='/login'}>
              <IonLabel>PAINTER & PEST CONTROL</IonLabel>
              <IonIcon icon={home}></IonIcon>
            </div>
          </IonCol>
          </IonCard>
          <IonCard className="ion-card">
          <IonCol>
            <div onClick={()=>window.location.href='/login'}>
              <IonLabel>AC REPAIR STORE</IonLabel>
              <IonIcon icon={home}></IonIcon>
            </div>
          </IonCol>
          </IonCard>
          <IonCard className="ion-card">
          <IonCol>
            <div onClick={()=>window.location.href='/login'}>
              <IonLabel>AC REPAIR STORE</IonLabel>
              <IonIcon icon={home}></IonIcon>
            </div>
          </IonCol>
          </IonCard>
          <IonCard className="ion-card">
          <IonCol>
            <div onClick={()=>window.location.href='/login'}>
              <IonLabel>AC REPAIR STORE</IonLabel>
              <IonIcon icon={home}></IonIcon>
            </div>
          </IonCol>
          </IonCard>
          <IonCard className="ion-card">
          <IonCol>
            <div onClick={()=>window.location.href='/login'}>
              <IonLabel>AC REPAIR STORE</IonLabel>
              <IonIcon icon={home}></IonIcon>
            </div>
          </IonCol>
          </IonCard>
          <IonCard className="ion-card">
          <IonCol>
            <div onClick={()=>window.location.href='/login'}>
              <IonLabel>AC REPAIR STORE</IonLabel>
              <IonIcon icon={home}></IonIcon>
            </div>
          </IonCol>
          </IonCard>
          <IonCard className="ion-card">
          <IonCol>
            <div onClick={()=>window.location.href='/login'}>
              <IonLabel>AC REPAIR STORE</IonLabel>
              <IonIcon icon={home}></IonIcon>
            </div>
          </IonCol>
          </IonCard>
        
          </IonRow>
    </IonGrid>
    </IonCard>


    
    {/* <IonList inset className="ion-list" lines="none">
      <IonItem className="ion-item" button onClick={() => {}} >
        <IonAvatar>
          <img src={women_salon}/>
        </IonAvatar>
          <IonCardHeader>
            <IonCardTitle className="ion-card-title-img">Ladies Salon</IonCardTitle>
          </IonCardHeader>
      </IonItem>
      <IonItem className="ion-card" button onClick={() => {}} >
        <IonAvatar>
          <img src={AC}/>
        </IonAvatar>
          <IonCardHeader>
            <IonCardTitle className="ion-card-title-img">AC Services</IonCardTitle>
          </IonCardHeader>
      </IonItem>
      <IonItem className="ion-card" button onClick={() => {}} >
        <IonAvatar>
          <img src={men_salon}/>
        </IonAvatar>
          <IonCardHeader>
            <IonCardTitle className="ion-card-title-img">Men's Grooming</IonCardTitle>
          </IonCardHeader>
      </IonItem>
      <IonItem className="ion-card" >
        <IonAvatar>
          <img src={electricians}/>
        </IonAvatar>
          <IonCardHeader>
            <IonCardTitle className="ion-card-title-img">Electricians</IonCardTitle>
          </IonCardHeader>
      </IonItem>
      <IonItem className="ion-card" >
        <IonAvatar>
          <img src={plumber} alt="nails" />
        </IonAvatar>
          <IonCardHeader>
            <IonCardTitle className="ion-card-title-img">Plumber</IonCardTitle>
          </IonCardHeader>
      </IonItem>
      <IonItem className="ion-card" >
        <IonAvatar>
          <img src={carpenters} alt="nails" />
        </IonAvatar>
          <IonCardHeader>
            <IonCardTitle className="ion-card-title-img">carpenters</IonCardTitle>
          </IonCardHeader>
      </IonItem>
      <IonItem className="ion-card" >
        <IonAvatar>
          <img src={clean} alt="nails"/>
        </IonAvatar>
          <IonCardHeader>
            <IonCardTitle className="ion-card-title-img">Cleaning</IonCardTitle>
          </IonCardHeader>
      </IonItem>
      <IonItem className="ion-card" >
        <IonAvatar>
          <img src={pest} alt="nails"/>
        </IonAvatar>
          <IonCardHeader>
            <IonCardTitle className="ion-card-title-img">Painting & Pest Control</IonCardTitle>
          </IonCardHeader>
      </IonItem>
    </IonList> */}
    <IonItem>
        <IonLabel slot="start">Special Offers</IonLabel>
        <IonIcon icon={arrowForward} mode="ios" slot="end"/>
      </IonItem>
    <IonSlides options={slidesOptions}>
      <IonSlide>
        <IonCard className="girl_card poster_card"></IonCard>
      </IonSlide>
      <IonSlide>
        <IonCard className="ac_repair_card poster_card"></IonCard>
      </IonSlide>
      <IonSlide>
        <IonCard className="Cleaning__card poster_card"></IonCard>
      </IonSlide>
      <IonSlide>
        <IonCard className="Painting_card poster_card"></IonCard>
      </IonSlide>
    </IonSlides>
  


    {/* list with sliding list animation below  */}
    {/* <IonList>
      <IonItemSliding>
        <IonItem>
          <IonLabel>Item</IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption onClick={() => {}}>Unread</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>

      <IonItemSliding>
        <IonItem>
          <IonLabel>Item</IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption onClick={() => {}}>Unread</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
    </IonList> */}

      
      {/* <IonModal isOpen={showModal}>
        <p>This is modal content</p>
        <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
      </IonModal>
      <IonButton className="ion-button-modal" expand="block" onClick={() => setShowModal(true)}>CALCULATE</IonButton> */}
    </IonContent>
    </>
  );
}

export default Book;