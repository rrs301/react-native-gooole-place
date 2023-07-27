import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { UserLocationContext } from '../../Context/UserLocationContext';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Dimensions } from 'react-native';
import PlaceMarker from '../Home/PlaceMarker';

export default function GoogleMapViewFull({placeList}) {
    const [mapRegion, setmapRegion] = useState([]);

    const { location, setLocation } = useContext(UserLocationContext);
  
    useEffect(()=>{
      if(location)
      {
          setmapRegion({
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.0422,
              longitudeDelta: 0.0421,
          })
      }
    },[location])
  return (
    <View>
          {location?    <MapView
          style={{
            width: Dimensions.get("screen").width,
            height: Dimensions.get("screen").height * 0.89,
          }}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          region={mapRegion}
        >
            <Marker 
            title="You" 
            coordinate={mapRegion}
             />
            {placeList.map((item,index)=>index<=4&&(
                <PlaceMarker item={item} key={index} />
            ))}
           
        </MapView>:null} 
    </View>
  )
}