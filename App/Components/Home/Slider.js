import { StyleSheet, Text, View, FlatList, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Services/GlobalApi'


export default function Slider() {
    const [sliderList,setSliderList]=useState();
//       const sliderList = [
//         {
//             id: 1,
//             name: 'slider 1',
//             imageUrl: 'https://img.freepik.com/free-photo/young-doctor-supporting-his-patient_1098-2237.jpg?w=1060&t=st=1700052287~exp=1700052887~hmac=9b12978a7231ff0259473006040473cfaef3256a7bbddb05e5e2c89d2c96c594'
//         },

//         {
//             id: 2,
//             name: 'slider 2',
//             imageUrl: 'https://img.freepik.com/free-vector/online-doctor-concept_52683-37472.jpg?w=740&t=st=1700052166~exp=1700052766~hmac=0cfe02e6c0761d403202eb2f9a50130dd86dc8f2a1af967b249c0440113fae8a'
//         }
//    ]
    useEffect(()=>{
        getSlider();

    },[])
    const getSlider=() =>{
        GlobalApi.getSlider().then(resp =>{
            
            setSliderList(resp.data.data);
        })

    }
    return (
        <View style={{ marginTop: 20 }}>
            <FlatList
                data={sliderList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Image source={{ uri: item.attributes.Image.data.attributes.url }}
                        style={{
                            width: Dimensions.get('screen').width * 0.9, height: 200,
                            borderRadius: 10,
                            margin: 2
                        }} />)}
            />
        </View>
    )
}

