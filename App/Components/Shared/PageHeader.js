import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function PageHeader({title,backButton=true}) {
    const navigation= useNavigation();
  return (
    <View style={{display:'flex',flexDirection:'row',gap:5,alignItems:'center'}}>
        {backButton?<TouchableOpacity
        onPress={()=>navigation.goBack()}>
        <AntDesign name="back" size={20} color="black" />
        </TouchableOpacity>:null}
      <Text style={{fontSize:25,fontFamily:'appfont-semi'}}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})