import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View, StatusBar, Button, Text } from 'react-native';
import Login from "./views/Login";
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const App = ()=> {
  const [user, setUser] = useState();

  const signOutUser = () =>{
    signOut(auth).then(()=> {setUser(null)}).catch((e)=>console.log(e.message))
    console.log(user)
  }
  
  useEffect(()=>{
    onAuthStateChanged(auth, (currentUser) => {
      if(currentUser){
        setUser(currentUser);
        console.log(currentUser.email)
      }else{
        console.log("No user logged in")
      }
    })
  }, [user])
  return(
    <View style={style.appContainer}>
      <StatusBar barStyle='light-content'/>
      <View style={style.header}/>
      {user !== null ? 
      <View style={style.viewContainer}>
        <Button style={style.button} color="white" title='Sign Out' onPress={()=>signOutUser()}/>
        <ScrollView style={style.container}>
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
    height:35,
    backgroundColor: "black",
  },
  button: {
    marginTop:300,
    alignSelf:"center",
  },
})

export default App;
