import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import HospitalDoctorTab from '../Components/HospitalDoctorsScreen/HospitalDoctorTab'
import { useRoute } from '@react-navigation/native';
import Colors from '../../assets/Shared/Colors';
import HospitalListBig from '../Components/HospitalDoctorsScreen/HospitalListBig';
import GlobalApi from '../Services/GlobalApi';
import DoctorsList from '../Components/HospitalDoctorsScreen/DoctorsList';

export default function Explores() {

    const [hospitalList, setHospitalList] = useState([]);
    const [doctorsList,setDoctorslist]=useState([]);
    


    const [activeTab,setActiveTab]=useState('Hospital');

    useEffect(() => {
      getAllHospital();
      getAllDoctor();
    }, [])
    const getAllHospital = () => {
      GlobalApi.getAllHospital().then(resp => {
        setHospitalList(resp.data.data);
      })
    }
    const getAllDoctor =() => { 
      GlobalApi.getAllDoctor().then(resp =>{
        setDoctorslist(resp.data.data);
      })
    }

  return (
    <View style={{padding:20}} >
      <Text style={{
        fontSize:16,fontFamily:'appfont-semi'
      }}>Explore</Text>

<HospitalDoctorTab activeTab={(value)=>setActiveTab(value)} />
{!hospitalList?.length
      ?<ActivityIndicator size ={'large'}
       color={Colors.PRIMARY}
        style={{marginTop:'50%'}} />
      :
      activeTab=='Hospital'?
      <HospitalListBig hospitalList={hospitalList}/>
      :<DoctorsList doctorsList={doctorsList}/>
  }
    </View>
  )
}

const styles = StyleSheet.create({})