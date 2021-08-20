import * as React from 'react';
import { Text, View, StyleSheet, Platform, StatusBar, TextInput, TouchableOpacity, Image} from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import db from '../localdb';
import {Audio} from 'expo-av';

class PhonicSoundButton extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            pressedButtonIndex:''
        }
    }
    playSound = async(soundChunk)=>{
        var soundLink = 'https://s3-whitehatjrcontent.whjr.online/phones/' + soundChunk +'.mp3';
        await Audio.Sound.createAsync(
            {
                uri : soundLink
            },
            {shouldPlay : true}
        )
    }
    render(){
        return(
            <View style={{alignSelf:'center',}}>
            <TouchableOpacity style={
                this.props.buttonIndex === this.state.pressedButtonIndex
                ? [styles.button,{backgroundColor : 'lime'}]
                : [styles.button,{backgroundColor: 'blue'}]
            } 
            onPress = {() => {
                this.setState({
                    pressedButtonIndex: this.props.buttonIndex
                })
                this.playSound(this.props.soundChunk)}}>
            <Text style={
                this.props.buttonIndex === this.state.pressedButtonIndex
                ? [styles.text,{color : 'white'}]
                : [styles.text,{color : 'black'}]
            }> 
            {this.props.wordChunk}</Text>
            </TouchableOpacity>
            </View>
            )
    }
        
   
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 20,
        backgroundColor: "blue",
        width: 50,
        height: 50,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginRight: 20,
    },
    text: {
        fontSize: 40,
        color: 'black'
    }
    
})






export default PhonicSoundButton;