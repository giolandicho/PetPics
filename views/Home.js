import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View, StatusBar, Button, Text } from 'react-native';
import Login from "./Login";
import Posts from './Posts';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const Home = ({navigation})=> {
  const [user, setUser] = useState();

  const signOutUser = () =>{
    signOut(auth).then(()=> {setUser(null)}).catch((e)=>console.log('ERROR: ',e.message))
    console.log(user)
  }
  
  useEffect(()=>{
    onAuthStateChanged(auth, (currentUser) => {
      if(currentUser){
        setUser(currentUser);
        console.log(currentUser.email)
      }else{
        signOutUser();
      }
    })
  })
  return(
    <View style={style.appContainer}>
      <StatusBar barStyle='light-content'/>
      <View style={style.header}/>
      {user !== null ? 
      <View style={style.viewContainer}>
        <View style={style.buttonContainer}>
        <Button style={style.button} color="white" title='Add Post' onPress={()=> navigation.navigate('AddPost')}/>
        <Button style={style.button} color="white" title='Sign Out' onPress={()=>signOutUser()}/>
        </View>
        <ScrollView style={style.container}>
          <Posts/>
        </ScrollView>
      </View>
      : 
      <View style={style.button}>
        <Login/>  
      </View>}
  </View>    
    
  )
}


const style = StyleSheet.create({
  appContainer:{
    backgroundColor:"#708090",
    flex:1,
  },
  viewContainer:{
    backgroundColor:"#708090",
  },
  container: {
    backgroundColor:"#708090",
    
  },
  header: {
    height:45,
    backgroundColor: "black",
  },
  buttonContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
  },
  button: {
    marginTop:300,
    alignSelf:"center",
  },
})

export default Home;
