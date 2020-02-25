import React, { useState, useEffect } from 'react';
import { IonContent, IonPage, IonToolbar, IonSearchbar, IonFooter, IonText, IonList, IonItem } from '@ionic/react';


let serviceArray:any =["AC Service & Repair","Plumber","Carpenter","Women Salon","Cook Near you","Pest Control","Party Manager",
                            "Electricians","Cleaning","Appliance Repair","Make Up & Styling","Men Grooming","Fitness & Yoga"]
const SearchBar: React.FC = () => {
    
  const [searchText, setSearchText] = useState<any>('');
  useEffect(()=>{
        const query = searchText.toLowerCase();
          if(query && query.trim(''))
          {
            serviceArray = serviceArray.filter((item:any)=> {
            console.log("arr",serviceArray);
            return (item.toLowerCase().indexOf(query.toLowerCase())> -1)
            })
          }
  },[searchText])
  
  return (
    <IonPage>
      <IonContent>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} ></IonSearchbar>
        {searchText !== '' ? <IonList>{serviceArray.map((val:any)=>{
            return (
                <IonItem>{val}</IonItem>
            )
        })}</IonList>:''}
      </IonContent>
      <IonFooter>
        <IonToolbar>
          Search Text: {searchText} 
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};
export default SearchBar