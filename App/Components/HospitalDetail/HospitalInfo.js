import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../../assets/Shared/Colors'
import { Entypo } from '@expo/vector-icons';
import ActionButton from './ActionButton';
import SubHeading from '../Home/SubHeading';

export default function HospitalInfo({ hospital }) {
    return hospital && (
        <View>
            <Text style={{ fontSize: 23, fontFamily: 'appfont-semi' }}>{hospital.attributes.Name}</Text>

            <FlatList
                data={hospital.attributes.categories.data}
                horizontal={true}
                renderItem={({ item }) => (
                    <Text style={{
                        marginRight: 10, color: Colors.GRAY
                    }} >{item.attributes.Name}, </Text>
                )}
            />
            
            <View style={{ borderBottomWidth: 1, borderColor: Colors.LIGHT_GRAY, margin: 5, marginBottom: 15 }}></View>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                    <Entypo name="location-pin" size={24} color={Colors.PRIMARY} />
                    <Text style={{
                        fontSize: 16,
                        fontFamily: 'appfont',
                        color: Colors.GRAY
                    }}>{hospital.attributes.Address}</Text>

                </View>

                <View style={{ 
                    display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center',
                    marginTop:6 }}>
                    <Entypo name="clock" size={24} color={Colors.PRIMARY} />
                    <Text style={{
                        fontSize: 18,
                        fontFamily: 'appfont',
                        color: Colors.GRAY
                    }}>Mon Sun | 11AM - 8PM</Text>

                </View>
                <View style={{ borderBottomWidth: 1, borderColor: Colors.LIGHT_GRAY, margin: 5, marginBottom: 15,marginTop:10 }}></View>
                
                <ActionButton/>
                <View style={{ borderBottomWidth: 1, borderColor: Colors.LIGHT_GRAY, margin: 5, marginBottom: 15,marginTop:15 }}></View>

                <SubHeading subHeadingTitle={'About'}/>
                <Text>{hospital.attributes.Description}</Text>
                </View>
                
      
    )
}

const styles = StyleSheet.create({})