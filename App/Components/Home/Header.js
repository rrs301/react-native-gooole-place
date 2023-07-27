import { View, Text, Image, StyleSheet, TextInput, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../../Shared/Colors'

export default function Header() {
  return (
    <View style={{display:'flex',flexDirection:'row',
    justifyContent:'space-evenly',gap:10,
    alignItems:'center'
    }}>
        <Image source={require('./../../../assets/logo.png')}
            style={styles.logo}/>

        <View>
            <TextInput placeholder='Search' 
                style={styles.searchBar}
            />
        </View>  
        <Image source={require('./../../../assets/user.png')} 
            style={styles.userImage}
        /> 
    </View>
  )
}

const styles = StyleSheet.create({
    logo:{
      width:50,
      height:50  
    },
    searchBar:{
        borderWidth:1,
        borderColor:Colors.GRAY,
        padding:4,
        borderRadius:50,
        paddingLeft:10,
        width:Dimensions.get('screen').width*0.53,
        borderColor:Colors.PRIMARY,
        
    },
    userImage:{
        width:50,
        height:50,
        borderRadius:100
    }
})