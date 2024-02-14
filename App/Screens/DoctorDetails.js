import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import PageHeader from '../Components/Shared/PageHeader';
import HospitalInfo from '../Components/HospitalDetail/HospitalInfo';
import Colors from '../../assets/Shared/Colors';
import ActionButton from '../Components/HospitalDetail/ActionButton';
import DocInfo from '../Components/HospitalDetail/DocInfo';

export default function DoctorDetails() {
    const [doctor,setDoctor]=useState();
    const param=useRoute().params;
    const navigation=useNavigation();

    useEffect(()=>{
    setDoctor(param.doctor)
},[])

  return doctor&&(
    <View style={{flex:1,backgroundColor:Colors.white}}>
        <ScrollView  >
        <View style={{position:'absolute',zIndex:10,
    margin:15}}>
        <PageHeader title={''} />
        </View> 
     <View>
        

        <View style={{marginTop:-20,backgroundColor:Colors.white,borderTopLeftRadius:20,borderTopRightRadius:20,padding:20}} > 
            <DocInfo doctor = {doctor} />
        </View>
        
     </View>
     </ScrollView>
     <TouchableOpacity
     onPress={()=>navigation.navigate('bookappointmentpleasework',{
        doctor:doctor
     })}
     style={{padding:13,backgroundColor:Colors.PRIMARY,margin:10,borderRadius:99,left:0,right:0,marginBottom:10,zIndex:20}}>
        <Text style={{color:Colors.white,textAlign:'center',fontFamily:'appfont-semi',fontSize:17}}>
            Book Appointment

        </Text>
           

     </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({})