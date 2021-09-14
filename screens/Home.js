import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import { Card } from 'react-native-elements'

export default class Home extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                {/* <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Details")}}>
                <Text>Home</Text></TouchableOpacity> */}
                <View>
                    <Text style={{ fontSize: 20, textDecorationLine: 'underline', marginLeft: 10, marginTop: 50 }}>Trending Now!</Text>

                    <Card style={{ marginLeft: 10, length: 10 }}>
                        <Card.Title onPress={() => { this.props.navigation.navigate("Details") }}>Movie One</Card.Title>
                        <Text style={{ textAlign: 'center', fontSize: 15 }}>Details</Text>
                    </Card></View>

                <View>
                    <Text style={{ fontSize: 20, textDecorationLine: 'underline', marginLeft: 10, marginTop: 50 }}>People Also Watched</Text>

                    <Card style={{ marginLeft: 10, length: 10 }}>
                        <Card.Title onPress={() => { this.props.navigation.navigate("Details") }}>Movie One</Card.Title>
                        <Text style={{ textAlign: 'center', fontSize: 15 }}>Details</Text>
                    </Card>
                </View>
                <View style={{ justifyContent: 'flex-start', flex: 1 }}>
                    <Text style={{ fontSize: 20, textDecorationLine: 'underline', marginLeft: 10, marginTop: 50 }}>You may also like:</Text>

                    <Card style={{ marginLeft: 10, length: 10 }} >
                        <Card.Title onPress={() => { this.props.navigation.navigate("Details") }}>Movie One</Card.Title>
                        <Text style={{ textAlign: 'center', fontSize: 15 }}>Details</Text>
                    </Card>
                </View>
                <Text style={{marginBottom:100,marginLeft:20}}>Movie type: {this.props.navigation.getParam("movie_type")}</Text>
            </View>
        )
    }
}
