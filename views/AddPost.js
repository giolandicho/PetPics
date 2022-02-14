import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from '../firebase';

const AddPost = ({navigation}) => {
    const [formInput, setFormInput] = useState('');
    const [fileInput, setFileInput] = useState(null); 

    const handleUpload = async() => {
        try {
            const result  = await launchImageLibrary({
            mediaType: 'photo',
            includeBase64: false,
            })
            setFileInput(result.assets[0].uri)
            console.log(fileInput)
        }catch(e){
            console.log('ERROR: ', e.message)
        }
    }
    const handleSubmit = async() => {
        try{
            const docRef = await addDoc(collection(db, "Posts"), {
                image: fileInput,
                caption: formInput,
                user: auth.currentUser.email
            });
            console.log("Document written with ID: ", docRef.id);
            navigation.navigate('Home');
        } catch(e) {
            console.log("Error adding document: ", e)
        }
    }

    return(
    <View style= {style.container}>
        <View style = {style.form}>
            <Button color="white" title="Upload Image" onPress={()=> handleUpload()}/>
            {fileInput && (
                    <Image style={style.image} source={{ uri : fileInput}}/>
                )
            }
            <TextInput 
            style={{backgroundColor:'white', height:100, width:300, padding:5}} 
            placeholder='Caption'
            multiline={true}
            onChangeText={text => setFormInput(text)}
            />
            <Button color="white" title='Submit' onPress={() => handleSubmit()}/>
        </View>
    </View>    
    )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#708090",
    },
    form:{
        marginTop:150,
        alignItems:"center",
        backgroundColor:"#708090",
    },
    image:{
        height:350,
        width:350,
        resizeMode:"contain",
    }
})

export default AddPost;