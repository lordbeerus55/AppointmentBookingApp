import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import vjti from './../Images/vjti.png';
import Colors from '../../assets/Shared/Colors';
import { TouchableOpacity } from 'react-native';
import SignInWithOAuth from '../Components/SignInWithOAuth';

export default function Login() {
    return (
        <View style={{ alignItems: 'center' }}>
            <Image source={vjti}
                style={styles.appImage} />
            <View style={{
                
                padding: 25,
                alignItems: 'center',
                marginTop: -50
            }}>
                <Text style={styles.heading}>Doctor Booking App </Text>
                <Text style={styles.heading}>For VJTI students</Text>
                <Text>Book Doctor Appointment Effortlessly</Text>
                 <SignInWithOAuth/>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    appImage: {
        width: 300,
        height: 500,
        objectFit: 'contain',
        marginTop: 50,
    },
    heading: {
        fontSize: 28,
        fontWeight: 'bold',

    }
})