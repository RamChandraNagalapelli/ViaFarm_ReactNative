import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView, Image, TouchableOpacity, Alert } from 'react-native';
import {WeatherServices} from '../Services/WeatherServices';
import {connect} from 'react-redux';

// Row data (hard-coded)
var rows = [
    {  dt: 12345678, dt_txt: '10-10-2017 12:00:00', main: {temp_min: 35, temp_max: 40}, weather: [{id: '02d', main: 'Clouds'}] },
    {  dt: 12345678, dt_txt: '10-10-2017 12:00:00', main: {temp_min: 35, temp_max: 40}, weather: [{id: '02d', main: 'Clouds'}] },
    {  dt: 12345678, dt_txt: '10-10-2017 12:00:00', main: {temp_min: 35, temp_max: 40}, weather: [{id: '02d', main: 'Clouds'}] },
    {  dt: 12345678, dt_txt: '10-10-2017 12:00:00', main: {temp_min: 35, temp_max: 40}, weather: [{id: '02d', main: 'Clouds'}] },
    {  dt: 12345678, dt_txt: '10-10-2017 12:00:00', main: {temp_min: 35, temp_max: 40}, weather: [{id: '02d', main: 'Clouds'}] },
]
const title = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
const description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
// Row comparison function
const rowHasChanged = (r1, r2) => r1.id !== r2.id

const ds = new ListView.DataSource({ rowHasChanged })

class WeatherScreen extends Component {

    state = {
        dataSource: ds.cloneWithRows([])
    }

    componentWillMount() {
        this.getWeather()
    }

    getWeather() {
        var weakSelf = this
        WeatherServices.getWeather('Ahmadabad').then(
            function(response) {
                console.log('\n\n\nRESPONSE >>> ', response)
                weakSelf.setState({dataSource: ds.cloneWithRows(response.list)})
            }
        ).catch(
            function(error) {
                console.log('\n\n\nError >>> ', error)
                Alert.alert('Error')
            }
        )
    }

    renderRow = (rowData) => {
        const { dt, dt_txt, main, weather } = rowData
        var imgUri = 'https://openweathermap.org/img/w/'+weather[0].icon+'.png'
        console.log('imgUri', imgUri)
        var image = require('../Images/logo.png')
        return (
            <View style={styles.row} onPress={this.onPress.bind(this, rowData.id)}>
                <View style={{ flex: 4 }}>
                    <Text style={styles.date} numberOfLines={2}>{dt_txt}</Text>
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Text style={{ flex: 1, fontSize: 18, fontWeight: 'bold', color: '#666666' }}>min {main.temp_min}°</Text>
                            <Text style={{ flex: 1, fontSize: 18, fontWeight: 'bold', color: '#666666' }}>max {main.temp_max}°</Text>
                        </View>
                        <Text style={styles.description} numberOfLines={1}>{weather[0].main}</Text>
                    </View>
                </View>
                <Image source={{uri: imgUri}} style={styles.imageView} resizeMode='contain' />
            </View>
        )
    }

    render() {
        return (
            // <View style={{flex: 1}}>
            // <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/HTTPS_icon.png'}} style={{width: 100, height: 100}} />
            // </View>
            <View style={{ flex: 1 }}>
                <View style={{ height: 70, padding: 10 }}>
                    <Text style={{ flex: 1, fontSize: 18, fontWeight: 'bold', color: '#666666' }}>Ahmedabad</Text>
                    <Text style={{ flex: 1, fontSize: 16, fontWeight: '600', color: '#444444' }}>Gujarath</Text>
                </View>
                <ListView
                    style={styles.container}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                />
            </View>
        )
    }

    onPress(props) {
        console.log(props);
    }
}

const mapStateToProps = state =>  {
    return {
        userDetails: state.userDetails,
    }
}

export default connect(mapStateToProps)(WeatherScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 10
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'green',
        borderRadius: 2,
        margin: 10,
        marginTop: 0,
        padding: 10,
    },
    imageView: {
        // width: '15%',
        aspectRatio: 1,
        margin: 10,
        flex: 1,
    },
    date: {
        flex: 1,
        color: '#444444',
        fontWeight: 'bold',
        fontSize: 18,
    },
    description: {
        flex: 1,
        color: '#888888',
        fontWeight: '600',
        fontSize: 25,
        textAlign: 'left',
    }
})