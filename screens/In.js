import React from 'react';
import { StyleSheet, Text, View } from 'react-native'; 

export default class In extends React.Component{
    render() {
        return(
            <View style = {{flex : 1, justifyContent : 'center', alignItems : 'center'}}> 
                <Text> This is the Instagram Page!</Text>
            </View>
        ); 
    }
}