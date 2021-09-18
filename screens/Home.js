import React from 'react';
import { View, Text, TouchableOpacity, Alert, Image } from 'react-native'
import { Card, Icon, AirbnbRating } from 'react-native-elements'
import { Button } from 'react-native-elements/dist/buttons/Button';
import axios from 'axios'

export default class Home extends React.Component {

    constructor() {
        super()
        this.state = {
            movieDetails: {}
        }
    }
    timeConvert = (time) => {
        var hrs = Math.floor(time / 60)
        var mins = time % 60
        return `${hrs} hours ${mins} minutes`
    }
    getMovie = () => {
        const { url } = "http://localhost:5000/get-movie"
        axios
            .get(url)
            .then(response => {
                let Details = response.data.data
                Details["duration"] = this.timeConvert(Details.duration)
                this.setState({ movieDetails: Details })

            })
            .catch(error => console.log(error.message))
    }

    likeMovie = () => {
        const { url } = "http://localhost:5000/liked-movie"
        axios
            .post(url)
            .then(response => { this.getMovie() })
            .catch(error => { console.log(error.message) })
    }

    dislikeMovie = () => {
        const { url } = "http://localhost:5000/unliked-movie"
        axios
            .post(url)
            .then(response => { this.getMovie() })
            .catch(error => { console.log(error.message) })
    }

    did_not_watch_movie = () => {
        const { url } = "http://localhost:5000/did-not-watch"
        axios
            .post(url)
            .then(response => { this.getMovie() })
            .catch(error => { console.log(error.message) })
    }

    componentDidMount() {
        this.getMovie()
    }
    render() {
        const { movieDetails } = this.state;
        if (movieDetails.poster_link) {
            const { poster_link, title, release_date, duration, rating } = movieDetails

            return (
                <View>
                    <View>
                        <Image source={{ uri: poster_link }} />
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
                        <AirbnbRating count={10} reviews={["", "", "", "", ""]} defaultRating={rating} isDisabled={true} starContainerStyle={{ marginTop: -30 }} />
                    </View>
                    <View>
                        <Icon type="Material Icon" name="Thumb Up" onPress={() => { this.likeMovie }}></Icon>
                    </View>
                    <View>
                        <Icon type="Material Icon" name="Thumb Down" onPress={() => { this.dislikeMovie }}></Icon>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => { this.did_not_watch_movie }}><Text>Did Not Watch</Text></TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={{marginTop:100,borderRadius:30}} onPress={() => { this.props.navigation.navigate("Recommended") }}><Text>See Recommendation</Text></TouchableOpacity>
                    </View>
                </View>
            )

        }
        else { return (null) }
    }
}