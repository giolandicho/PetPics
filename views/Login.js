import React, {useState} from 'react'
import { StyleSheet, View, Button, TextInput } from 'react-native';
import { provider, auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const registerUser = async() => {
        console.log("1st")
       
            createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
            const user = result.user;
            console.log("done");
        }).catch((error)=>{
            switch(error.code){
                case 'auth/email-already-exists' :
                    alert(`Email ${email} already in use`);
                    break;
                default :
                    console.log(error.message);
                    break;
            }
            
        })
    }

    const signIn = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            const user = result.user;
        }).catch((error) => {
            console.log(error.message)
        })
    }

    return(
        <View>
            <TextInput 
                style={{backgroundColor:'white', height:40, width:200, padding:5}} 
                placeholder='Email'
                onChangeText={text => setEmail(text)}/>
                
            <TextInput
                style={{backgroundColor:'white', height:40, width:200, padding:5, marginBottom:20}} 
                placeholder='Password'
                secureTextEntry={true}
                onChangeText={text => setPassword(text)}/>
            <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
                <Button color="white" title="Sign In" onPress={()=>signIn()}/>
                <Button color="white" title="Register" onPress={()=>registerUser()}/>
            </View>
        </View>
        
    )
}



export default Login;