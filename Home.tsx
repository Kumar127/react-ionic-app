import React, { useState, useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IonText, IonToolbar, IonContent, IonPage, IonCol, IonRow, IonIcon, IonSearchbar,
   IonRefresher, IonRefresherContent, IonToast, IonSlides, IonSlide, IonHeader, IonLabel, IonCard, IonGrid, IonImg, IonCardContent, 
   } from '@ionic/react';
import './Home.scss'
import { search,menu, cart } from 'ionicons/icons';
import Balance from '../Components/ExpenseTracker/Balance'
import { RouteComponentProps } from '../../node_modules/@types/react-router';

let serviceArray:any =["AC Service & Repair","Plumber","Carpenter","Women Salon","Cook Near you","Pest Control","Party Manager","Electricians",
                      "Cleaning","Appliance Repair","Make Up & Styling","Men Grooming","Fitness & Yoga"]

const Home: React.FC<RouteComponentProps> = ({history}) => {

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
        <IonIcon slot="start" icon={menu} size="large" className="ion-icon-header"/>
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
            <IonSlides options={slidesOptions}>
          <IonSlide>
            <IonCard className="girl_card poster_card" routerLink='/tabs/home/men' routerDirection="none">
              <IonImg src='assets/img/make_up.jpg' alt='ionic-image'/>
                <h3 className="Slide_text">MEN</h3>
            </IonCard>
          </IonSlide>
          <IonSlide>
            <IonCard className="ac_repair_card poster_card" routerLink='/tabs/home/women'>
              <IonImg src='assets/img/make_up.jpg' alt='ionic-image'/>
                <h3 className="Slide_text">WOMEN</h3>
            </IonCard>
          </IonSlide>
          <IonSlide>
            <IonCard className="Cleaning__card poster_card">
              <IonImg src='assets/img/make_up.jpg' alt='ionic-image'/>
                <h3 className="Slide_text">SUMMER STYLE</h3>
            </IonCard>
          </IonSlide>
          <IonSlide>
            <IonCard className="Painting_card poster_card">
              <IonImg src='assets/img/make_up.jpg' alt='ionic-image'/>
                <h3 className="Slide_text">WINTER STYLE</h3>
            </IonCard>
          </IonSlide>
        </IonSlides>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className='ion-no-padding'>
            <IonImg src='assets/img/images.jfif' alt='ionic-image'/>
            <h4 className="him">HIM</h4>
            <h4 className='her'>HER</h4>
            </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonLabel style={{width:300,color:'black',fontSize:18,fontWeight:900}}>Today's Top Collection</IonLabel>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
              <IonImg src='assets/img/wedding.jpg' alt='ionic-image'/>
                </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
              <IonImg src='assets/img/home1.jpg' alt='ionic-image'/>
                </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
              <IonImg src='assets/img/suit.png' alt='ionic-image'/>
                </IonCol>
            </IonRow>
        </IonGrid>
        
        
      </IonContent>

    </IonPage>
  );
};

export default Home;