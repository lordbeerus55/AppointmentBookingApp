import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAuth } from '@clerk/clerk-expo';
import Header from '../Components/Home/Header';
import SearchBar from '../Components/Home/SearchBar';
import Slider from '../Components/Home/Slider';
import Categories from '../Components/Home/Categories';
import PremiumHospital from '../Components/Home/PremiumHospitals';
import PremiumHospitals from '../Components/Home/PremiumHospitals';

export default function Home() {
    const { isLoaded,signOut } = useAuth();
  return (
    <ScrollView style ={{padding:20,marginTop:25}}>
        <Header/>
        <SearchBar setSearchText ={(value) => console.log(value)} />
        <Slider/>
        {/* <Button title = 'Signout' 
        onPress = {()=>signOut()}></Button> */}
        <Categories/>
        <PremiumHospitals/>
        
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({})