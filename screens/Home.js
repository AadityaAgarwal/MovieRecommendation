// import React from 'react';
// import { View, Text, TouchableOpacity, Alert } from 'react-native'
// import { Card } from 'react-native-elements'

// export default class Home extends React.Component {
//     render() {
//         return (
//             <View style={{ flex: 1 }}>
//                 {/* <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Details")}}>
//                 <Text>Home</Text></TouchableOpacity> */}
//                 <View>
//                     <Text style={{ fontSize: 20, textDecorationLine: 'underline', marginLeft: 10, marginTop: 50 }}>Trending Now!</Text>

//                     <Card style={{ marginLeft: 10, length: 10 }}>
//                         <Card.Title onPress={() => { this.props.navigation.navigate("Details") }}>Movie One</Card.Title>
//                         <Text style={{ textAlign: 'center', fontSize: 15 }}>Details</Text>
//                     </Card></View>

//                 <View>
//                     <Text style={{ fontSize: 20, textDecorationLine: 'underline', marginLeft: 10, marginTop: 50 }}>People Also Watched</Text>

//                     <Card style={{ marginLeft: 10, length: 10 }}>
//                         <Card.Title onPress={() => { this.props.navigation.navigate("Details") }}>Movie One</Card.Title>
//                         <Text style={{ textAlign: 'center', fontSize: 15 }}>Details</Text>
//                     </Card>
//                 </View>
//                 <View style={{ justifyContent: 'flex-start', flex: 1 }}>
//                     <Text style={{ fontSize: 20, textDecorationLine: 'underline', marginLeft: 10, marginTop: 50 }}>You may also like:</Text>

//                     <Card style={{ marginLeft: 10, length: 10 }} >
//                         <Card.Title onPress={() => { this.props.navigation.navigate("Details") }}>Movie One</Card.Title>
//                         <Text style={{ textAlign: 'center', fontSize: 15 }}>Details</Text>
//                     </Card>
//                 </View>
//                 <Text style={{marginBottom:100,marginLeft:20}}>Movie type: {this.props.navigation.getParam("movie_type")}</Text>
//             </View>
//         )
//     }
// }

import React from 'react';
import { View, Text, TouchableOpacity, Alert,Image } from 'react-native'
import { Card,Icon,AirbnbRating } from 'react-native-elements'
import { Button } from 'react-native-elements/dist/buttons/Button';
import axios from axios

export default class Home extends React.Component{

    constructor(){
        super()
        this.state={
            movieDetails:{}
        }
}
timeConvert=(time)=>{
    var hrs=Math.floor(time/60)
    var mins=time%60
    return `${hrs} hours ${mins} minutes`
}
    getMovie=()=>{
        const {url}="http://localhost:5000/getMovie"
        axios
        .get(url)
        .then(response=>{let Details=response.data.data
        Details["duration"]=this.timeConvert(Details.duration)
        this.setState({movieDetails:Details})
        
    })
    .catch(error=>console.log(error.message))
    }

    likeMovie=()=>{
        const {url}="http://localhost:5000/likedMovie"
        axios
        .post(url)
        .then(response=>{this.getMovie()})
        .catch(error=>{console.log(error.message)})
    }

    dislikeMovie=()=>{
        const {url}="http://localhost:5000/dislikedMovie"
        axios
        .post(url)
        .then(response=>{this.getMovie()})
        .catch(error=>{console.log(error.message)})
    }

    did_not_watch_movie=()=>{
        const {url}="http://localhost:5000/dislikedMovie"
        axios
        .post(url)
        .then(response=>{this.getMovie()})
        .catch(error=>{console.log(error.message)})
    }

    componentDidMount(){
        this.getMovie()
    }
    render(){
        const {movieDetails}=this.state;
        if(movieDetails.poster_link){
            const {poster_link,title,release_date,duration,overview,rating}=movieDetails
        }
        return(
            <View>
                <View>
                    <Image source={{uri:"poster_link"}} />
                </View>
                <View>
                    <Text>{title}</Text>
                </View>
                <View>
                    <Text>{release_date}</Text>
                </View>
                <View>
                    <Text>{duration}</Text>
                </View>
                <View>
                    <AirbnbRating count={10} reviews={["","","","",""]} defaultRating={rating} isDisabled={true} starContainerStyle={{marginTop:-30}} />
                </View>
                <View>
                    <Icon type="Material Icon" name="Thumb Up" onPress={()=>{this.likeMovie}}></Icon>
                </View>
                <View>
                    <Icon type="Material Icon" name="Thumb Down" onPress={()=>{this.dislikeMovie}}></Icon>
                </View>
                <View>
                    <TouchableOpacity onPress={()=>{this.did_not_watch_movie}}><Text>Did Not Watch</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}