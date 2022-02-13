import React from 'react';
import { View, Text, StyleSheet, StatusBar, Button } from 'react-native';

const AddPost = ({navigation}) => {
    return(
    <View style= {style.container}>
        <View style = {style.form}>
            <Text>Hello</Text>
            <Button title='Submit' onPress={() => navigation.navigate('Home')}/>
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
        marginTop:250,
        alignItems:"center",
        backgroundColor:"#708090",
    }
})

export default AddPost;