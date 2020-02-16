import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonHeader,
  IonToolbar,
  IonMenu,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonSplitPane,
  IonMenuButton
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { flash, send, help,} from 'ionicons/icons';
import Book from './pages/Book';
import Shop from './pages/Shop';
import MyAptt from './pages/MyAptt';
import SignIn from '../src/Componenets/signUp/SIgnIn/SignIn'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import '@ionic/react/css/ionic.bundle.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Register from '../src/Componenets/signUp/SIgnIn/SignUp/SignUp'

const App: React.FC = () => (
  <>
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/book" component={Book} exact={true} />
          <Route path="/login" component={SignIn} exact={true} />
          <Route path="/register" component={Register} exact={true} />
          <Route path="/myAptt" component={MyAptt} />
          <Route path="/" render={() => <Redirect to="/book" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="Book" href="/book">
            <IonIcon icon={flash} />
            <IonLabel>Book</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Shop" href="/shop">
            <IonIcon icon={send} />
            <IonLabel>Shop</IonLabel>
          </IonTabButton>
          <IonTabButton tab="MyAptt" href="/myAptt">
            <IonIcon icon={help} />
            <IonLabel>MyAptt</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
    {/* </IonSplitPane>  */}
  </IonApp>
  </>
);

export default App;

