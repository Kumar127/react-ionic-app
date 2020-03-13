import React, { useState, useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IonText, IonToolbar, IonContent, IonPage, IonCol, IonRow, IonIcon, IonSearchbar,
   IonRefresher, IonRefresherContent, IonToast, IonSelect, IonSelectOption, IonHeader, IonLabel, 
   IonCard, IonGrid, IonImg, IonList,IonItem, 
   } from '@ionic/react';
import './Home.scss'
import { search,arrowBack, cart } from 'ionicons/icons';
import Balance from '../Components/ExpenseTracker/Balance'
import { RouteComponentProps } from '../../node_modules/@types/react-router';

let serviceArray:any =["AC Service & Repair","Plumber","Carpenter","Women Salon","Cook Near you","Pest Control","Party Manager","Electricians",
                      "Cleaning","Appliance Repair","Make Up & Styling","Men Grooming","Fitness & Yoga"]

const Women: React.FC<RouteComponentProps> = ({history}) => {

  const ionRefresherRef = useRef<HTMLIonRefresherElement>(null);
  const [showCompleteToast, setShowCompleteToast] = useState<boolean>(false);

  // const opensearchpage = () => {
  //   window.location.href=('/searchbar')
  // }
  const doRefresh = () => {
    setTimeout(() => {
      ionRefresherRef.current!.complete();
      setShowCompleteToast(true);
    }, 2500)
  };
  // const handleService = (value:any) => {
  //  if (value === 'Plumber')
  //  {
  //    console.log("i m here")
  //    history.push('/tabs/schedule/plumber')

  //  }
  //  if( value === 'Cleaning') {
  //    history.push('/tabs/map')
  //  }
  // }
  const slidesOptions:any = {
    slidesPerView:3
}

  return (
    <IonPage id="schedule-page">
      <IonHeader>
      <IonToolbar color='tertiary'>
        <IonIcon slot="start" icon={arrowBack} size="large" className="ion-icon-header"/>
          <h3 className='title-home'>CLOTHES RENTALS</h3>
        {/* <IonSearchbar placeholder='Search' className="search-bar" animated autocomplete="on" autoCorrect="on"
         onIonFocus={opensearchpage}
       ></IonSearchbar> */}
        <IonIcon slot="end" icon={search} size="large" className="ion-icon-header"/>
        <IonIcon slot="end" icon={cart} size="large" className="ion-icon-header"/>
      </IonToolbar>
      </IonHeader>
      <IonContent className="ion-content">
        <IonRefresher slot="fixed" ref={ionRefresherRef} onIonRefresh={doRefresh}>
          <IonRefresherContent />
        </IonRefresher>
        <IonToast
          isOpen={showCompleteToast}
          message="Refresh complete"
          duration={6000}
          onDidDismiss={() => setShowCompleteToast(false)}
        />

        
        <IonGrid>
          <IonRow className='ion-margin-bottom'>
            <IonCol className='ion-no-padding'>
            <IonImg src='assets/img/images.jfif' alt='ionic-image'/>
            </IonCol>
          </IonRow>
            <IonRow>
            <IonCol>
            <IonList>
            <IonItem>
            <IonLabel position="floating">Clothing</IonLabel>
            <IonSelect>
                <IonSelectOption value="">TopWear</IonSelectOption>
                <IonSelectOption value="nes">BottomWear</IonSelectOption>
                <IonSelectOption value="n64">Sports & Active Wear</IonSelectOption>
                <IonSelectOption value="ps">Indian & Festive Wear</IonSelectOption>
                <IonSelectOption value="genesis">InnerWear & SleepWear</IonSelectOption>
                <IonSelectOption value="saturn">Suits & Blazers</IonSelectOption>
                <IonSelectOption value="snes">Plus Size</IonSelectOption>
            </IonSelect>
            </IonItem>
            <IonItem>
            <IonLabel position="floating">Footwear</IonLabel>
            <IonSelect>
                <IonSelectOption value="">Sneakers</IonSelectOption>
                <IonSelectOption value="nes">Casual Shoes</IonSelectOption>
                <IonSelectOption value="n64">Sports Shoes</IonSelectOption>
                <IonSelectOption value="ps">Formal Shoes</IonSelectOption>
                <IonSelectOption value="genesis">Sandals & Floaters</IonSelectOption>
                <IonSelectOption value="saturn">Flip Flops</IonSelectOption>
                <IonSelectOption value="snes">socks</IonSelectOption>
            </IonSelect>
            </IonItem>
            <IonItem>
            <IonLabel position="floating">Accesories</IonLabel>
            <IonSelect>
                <IonSelectOption value="">Smart Wearables</IonSelectOption>
                <IonSelectOption value="nes">Watches & Wearable</IonSelectOption>
                <IonSelectOption value="n64">Sunglasses & Frames</IonSelectOption>
                <IonSelectOption value="ps">Fitness Gadgets</IonSelectOption>
                <IonSelectOption value="genesis">headPhones & Speakers</IonSelectOption>
                <IonSelectOption value="saturn">Bags & Backpacks</IonSelectOption>
            </IonSelect>
            </IonItem>
            <IonItem>
            <IonLabel position="floating">Personal Care And grooming</IonLabel>
            <IonSelect>
                <IonSelectOption value="">Fragrances</IonSelectOption>
                <IonSelectOption value="nes">Grooming</IonSelectOption>
                
            </IonSelect>
            </IonItem>
            </IonList>
            </IonCol>
            </IonRow>
        </IonGrid>
        
        
      </IonContent>

    </IonPage>
  );
};

export default Women;