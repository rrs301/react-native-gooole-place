import { View, Text, ActivityIndicator } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Header from '../Components/Home/Header'
import GoogleMapView from '../Components/Home/GoogleMapView'
import CategoryList from '../Components/Home/CategoryList'
import GlobalApi from '../Services/GlobalApi'
import PlaceList from '../Components/Home/PlaceList'
import { ScrollView } from 'react-native'
import { UserLocationContext } from '../Context/UserLocationContext'

export default function Home() {

  const [placeList,setPlaceList]=useState([]);
  const {location,setLocation}=useContext(UserLocationContext);
  useEffect(()=>{
    if(location)
    {
       GetNearBySearchPlace('restaurant'); 
    }
  },[location])
  
  const GetNearBySearchPlace=(value)=>{
   
    GlobalApi.nearByPlace(location.coords.latitude,
      location.coords.longitude,value).then(resp=>{

          setPlaceList(resp.data.results);

    })
  } 
  return (
    <ScrollView style={{padding:20,backgroundColor:'#fff',flex:1}}>
        <Header/>
        <GoogleMapView placeList={placeList} />
        <CategoryList setSelectedCategory={(value)=>GetNearBySearchPlace(value)}/>
       {placeList? <PlaceList placeList={placeList} />:null}
    </ScrollView>
  )
}