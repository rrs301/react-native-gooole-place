import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import GoogleMapViewFull from '../Components/Search/GoogleMapViewFull'
import SearchBar from '../Components/Search/SearchBar'
import { UserLocationContext } from '../Context/UserLocationContext';
import GlobalApi from '../Services/GlobalApi'
import BusinessList from '../Components/Search/BusinessList';
export default function Search() {
  const [placeList,setPlaceList]=useState([]);
  const {location,setLocation}=useContext(UserLocationContext);

  useEffect(()=>{
       GetNearBySearchPlace('restaurant'); 
  },[])
  const GetNearBySearchPlace=(value)=>{
    GlobalApi.searchByText(value).then(resp=>{
          
          setPlaceList(resp.data.results);

    })
  } 
  return (
    <View>
      <View style={{position:'absolute',zIndex:20}}>
        <SearchBar setSearchText={(value)=>GetNearBySearchPlace(value)} />
      </View>
   
      <GoogleMapViewFull placeList={placeList}/>
      <View style={{position:'absolute',zIndex:20,bottom:0}}>
        <BusinessList placeList={placeList} />
      </View>
     
    </View>
  )
}