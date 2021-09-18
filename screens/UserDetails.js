import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import { Card } from 'react-native-elements'
export default class UserDetails extends React.Component{
    render(){
        return(
            <View style={{flex:1}}>
                <View>
                    <Text style={{marginTop:100,fontSize:20}}>What kind of movies do you like?</Text>
                </View>
                <View>
                    <Card>
                        <Card.Title style={{fontSize:25}} onPress={()=>{this.props.navigation.navigate("Home",{movie_type:"action"})}}>Action</Card.Title>
                    </Card>
                    <Card>
                        <Card.Title style={{fontSize:25}} onPress={()=>{this.props.navigation.navigate("Home",{movie_type:"drama"})}}>Drama</Card.Title>
                    </Card>
                    <Card>
                        <Card.Title style={{fontSize:25}} onPress={()=>{this.props.navigation.navigate("Home",{movie_type:"romantic"})}}>Romantic</Card.Title>
                    </Card>
                    <Card>
                        <Card.Title style={{fontSize:25}} onPress={()=>{this.props.navigation.navigate("Home",{movie_type:"comedy"})}}>Comedy</Card.Title>
                    </Card>
                </View>
            </View>
        )
    }
}