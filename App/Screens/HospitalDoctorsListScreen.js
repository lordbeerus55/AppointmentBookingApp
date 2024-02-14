import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import PageHeader from '../Components/Shared/PageHeader';
import HospitalDoctorTab from '../Components/HospitalDoctorsScreen/HospitalDoctorTab';
import HospitalListBig from '../Components/HospitalDoctorsScreen/HospitalListBig';
import GlobalApi from '../Services/GlobalApi';
import Colors from '../../assets/Shared/Colors';
import DoctorsList from '../Components/HospitalDoctorsScreen/DoctorsList';

export default function HospitalDoctorsListScreen() {
  const [hospitalList, setHospitalList] = useState([]);
  const [doctorsList,setDoctorslist]=useState([]);
  const param = useRoute().params;
const [activeTab,setActiveTab]=useState('Hospital');

  useEffect(() => {
    getHospitalsByCategory();
    getDoctorsByCategory();
  }, [])
  const getHospitalsByCategory = () => {
    GlobalApi.getHospitalsByCategory(param?.categoryName).then(resp => {
      setHospitalList(resp.data.data);
    })
  }
  const getDoctorsByCategory =() => { 
    GlobalApi.getDoctorsByCategory(param?.categoryName).then(resp =>{
      setDoctorslist(resp.data.data);
    })
  }

  return (
    <View style={{ padding: 20 }}>

      <PageHeader title={param?.categoryName} />

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