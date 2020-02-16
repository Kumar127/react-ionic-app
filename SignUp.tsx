import React, { useState } from 'react';
import {
    IonPage,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonCol,
    IonRow,
    IonInput,
    IonText,
} from '@ionic/react';
// import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import * as ROUTES from '../../../../constants/routes';
import './SignUp.css';
// const INITIAL_STATE = {
//     email: '',
//     password: '',
//     error: null,
//     showForgotPasswordAlert: false
// };

const SignUp:React.FC = ()=> {
    const [email,setEmail]=useState([])
    const [password,setPassword]=useState([])
    const [cpassword,setcPassword]=useState([])
    const RegisterUser = ()=> {
            console.log(email,password,cpassword);
    }
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Sign UP</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent className="padding">
                    <IonRow class="row">
                        <div>
                            <IonText><h2 no-margin margin-vertical className="text-center">Sign up</h2></IonText>
                        </div>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonInput
                                name="email"
                                onIonChange={(e:any)=> setEmail(e.target.value)}
                                clearInput
                                type="email"
                                placeholder="Email"
                                class="input"
                                padding-horizontal
                                clear-input="true"></IonInput>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonInput
                                clearInput
                                name="password"
                                onIonChange={(e:any)=> setPassword(e.target.value)}
                                type="password"
                                placeholder="Password"
                                class="input"
                                padding-horizontal
                                clear-input="true"></IonInput>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonInput
                                clearInput
                                name="password"
                                onIonChange={(e:any)=> setcPassword(e.target.value)}
                                type="password"
                                placeholder="confirm Password"
                                class="input"
                                padding-horizontal
                                clear-input="true"></IonInput>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonButton onClick={RegisterUser} type="submit" expand="block" color="undefined" class="btn-transition"><strong className="white">Register</strong></IonButton>
                        </IonCol>
                    </IonRow>
                    {/* {error && <p>{error.message}</p>} */}
                    <NavLink to={ROUTES.HOME}>
                        <IonRow>
                            <IonCol>
                                <IonButton expand="block" fill="outline" color="undefined" class="btn-color"><strong>Skip >>></strong></IonButton>
                            </IonCol>
                        </IonRow>
                    </NavLink>
                </IonContent >
            </IonPage >
        );
        }
// export default compose(
//     withRouter,
// )(SignUp);
export default SignUp;