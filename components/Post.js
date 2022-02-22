import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Post = ({image, caption, user}) => {


    return(
        <View style={style.container}>
            <Text>{user}</Text>
            <Text>{caption}</Text>
            <Image style={style.image} source={{uri : image,}}/>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        marginTop: 20,
        alignItems: "center",
    },
    image:{
        height:300,
        width:300,
        resizeMode: "contain",
    },
})

export default Post