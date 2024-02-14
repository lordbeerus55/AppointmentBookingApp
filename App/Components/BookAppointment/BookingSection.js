import {ScrollView, TouchableOpacity, FlatList, StyleSheet, Text, View , TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../../../assets/Shared/Colors'
import SubHeading from '../Home/SubHeading'
import moment from 'moment'
import PageHeader from '../Shared/PageHeader'
import { useUser } from '@clerk/clerk-expo'
import GlobalApi from '../../Services/GlobalApi'

export default function BookingSection({hospital}) {
    const{isLoaded,isSignedIn,user}=useUser();


    const [next7Days, setNext7Days] = useState([]);
    const [timeList, setTimeList] = useState([]);
    const [selectedDate, setSelectedDate] = useState();
    const [selectedTime, setSelectedTime] = useState();
    const [notes, setNotes] = useState();
    useEffect(() => {
        getDays();
        getTime();
    }, []);

    
    const getDays = () => {
        const today = moment();
        const nextSevenDays = [];
        for (let i = 0; i < 7; i++) {
            const date = moment().add(i, 'days');
            nextSevenDays.push({
                date: date,
                day: date.format('ddd'),
                formattedDate: date.format('Do MMM')
            })
        }
        setNext7Days(nextSevenDays);

    }

    const getTime = () => {
        const timeList = [];
        for (let i = 8; i <= 12; i++) {
            timeList.push({
                time: i + ':00 AM'
            })
            timeList.push({
                time: i + ':30 AM'
            })

            for (let i = 1; i <= 6; i++) {
                timeList.push({
                    time: i + ':00 PM'
                })
                timeList.push({
                    time: i + ':30 PM'
                })
            }
        }
        setTimeList(timeList);
    }

        const bookAppointment=()=>{
            const data={
                data:{
                    UserName:user.fullName,
                    Date:selectedDate,
                    Time:selectedTime,
                    Email:user.primaryEmailAddress.emailAddress,
                    hospitals:hospital.id,
                    Note:notes
    
                }
            }
            GlobalApi.createAppointment(data).then(resp =>{
                console.log(resp)
            })
           
        }
        

    

    return (
     
            <View>
            <Text style={{ fontSize: 18, color: Colors.GRAY }}>BookingSection</Text>

            <SubHeading subHeadingTitle={'Day'} seeAll={false} />
            <FlatList
                data={next7Days}
                horizontal={true}
                renderItem={({ item }) => (
                    <TouchableOpacity style={[styles.dayButton, selectedDate == item.date ? { backgroundColor: Colors.PRIMARY } : null]}
                        onPress={() => setSelectedDate(item.date)} >
                        <Text styles={[{
                            fontFamily: 'appfont'
                        },
                        selectedDate == item.date ? { color: Colors.white } : null]}>{item.day}</Text>

                        <Text style={[{
                            fontFamily: 'appfont-semi', fontSize: 16
                        },
                        selectedDate == item.date ? { color: Colors.white } : null]}>{item.formattedDate}</Text>
                    </TouchableOpacity>
                )} />

            <SubHeading subHeadingTitle={'Time'} seeAll={false} />
            <FlatList
                data={timeList}
                horizontal={true}
                renderItem={({ item }) => (
                    <TouchableOpacity style={[styles.dayButton, { paddingVertical: 16 }, selectedTime == item.time ? { backgroundColor: Colors.PRIMARY } : null]}
                        onPress={() => setSelectedTime(item.time)} >


                        <Text style={[{
                            fontFamily: 'appfont-semi', fontSize: 16
                        },
                        selectedTime == item.time ? { color: Colors.white } : null]}>{item.time}</Text>
                    </TouchableOpacity>
                )} />

                <SubHeading subHeadingTitle={'Note'} seeAll={false} />
                <TextInput
                numberOfLines={3}
                onChangeText={(value)=>setNotes(value)}
                style={{backgroundColor:Colors.LIGHT_GRAY,
                padding:15,borderRadius:15,
                borderColor:Colors.SECONDARY,borderWidth:1,
                textAlignVertical:'top'}}
                placeholder='Write Instructions Here' />

<TouchableOpacity
        onPress={()=>bookAppointment()}
        style={{padding:13,backgroundColor:Colors.PRIMARY,margin:10,borderRadius:99,left:0,right:0,marginBottom:10,zIndex:20}}>

           <Text style={{color:Colors.white,textAlign:'center',fontFamily:'appfont-semi',fontSize:17}}>Make Appointment</Text>
        </TouchableOpacity>


     </View>
        
   
    )
}

const styles = StyleSheet.create({
    dayButton: {
        borderWidth: 1,
        borderRadius: 99, padding: 5, paddingHorizontal: 20, alignItems: 'center', marginRight: 10, borderColor: Colors.GRAY,

    }
})