import React from 'react';
import { StyleSheet, Text, View } from 'react-native'; 

export default class Fb extends React.Component{
    render() {
        return(
            <View style = {{flex : 1, justifyContent : 'center', alignItems : 'center'}}> 
                <Text> This is the Facebook Page!</Text>
            </View>
        ); 
    }
}