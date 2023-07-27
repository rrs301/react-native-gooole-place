import { View, Text, Image } from 'react-native'
import React from 'react'
import Colors from '../../Shared/Colors'

export default function CategoryItem({category}) {


  return (
    <View style={{padding:5,alignItems:'center',
    margin:5,width:95,height:95,justifyContent:'center',
    borderRadius:15,
    backgroundColor:Colors.GRAY}}>
        <Image source={category.icon}
            style={{width:40,height:30}}
        />
      <Text style={{fontSize:13,fontFamily:'raleway'}}>
        {category.name}</Text>
    </View>
  )
}