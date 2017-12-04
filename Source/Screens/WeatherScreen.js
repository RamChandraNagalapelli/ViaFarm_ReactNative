import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView, Image, TouchableOpacity } from 'react-native';

// Row data (hard-coded)
var rows = [
    { id: 0, day: '5th Dec, Tuesday ', state: 'Gujarath', city: 'Ahmedabad', temp: 33, imageUrl: '' },
    { id: 0, day: '5th Dec, Tuesday ', state: 'Gujarath', city: 'Ahmedabad', temp: 33, imageUrl: '' },
    { id: 0, day: '5th Dec, Tuesday ', state: 'Gujarath', city: 'Ahmedabad', temp: 33, imageUrl: '' },
    { id: 0, day: '5th Dec, Tuesday ', state: 'Gujarath', city: 'Ahmedabad', temp: 33, imageUrl: '' },
    { id: 0, day: '5th Dec, Tuesday ', state: 'Gujarath', city: 'Ahmedabad', temp: 33, imageUrl: '' },
]
const title = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
const description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
// Row comparison function
const rowHasChanged = (r1, r2) => r1.id !== r2.id

const ds = new ListView.DataSource({ rowHasChanged })

export default class WeatherScreen extends Component {

    state = {
        dataSource: ds.cloneWithRows(rows)
    }

    renderRow = (rowData) => {
        var image = require('../Images/logo.png')
        return (
            <TouchableOpacity style={styles.row} onPress={this.onPress.bind(this, rowData.id)}>
                <View style={{ flex: 4 }}>
                    <Text style={styles.date} numberOfLines={2}>{rowData.day}</Text>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Text style={styles.temp} numberOfLines={1}>{rowData.temp}°</Text>
                        <View style={{flex: 3}}>
                            <Text style={{fontSize: 16, fontWeight: '600', color: '#444444'}}>{rowData.city}</Text>
                            <Text style={{fontSize: 15, fontWeight: '600', color: '#888888'}}>{rowData.state}</Text>
                        </View>
                    </View>
                </View>
                <Image source={image} style={styles.imageView} resizeMode='contain' />
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <ListView
                style={styles.container}
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
            />
        )
    }

    onPress(props) {
        console.log(props);
    }
}

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
        borderColor: '#88888888',
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
    temp: {
        flex: 1,
        color: '#888888',
        fontWeight: 'bold',
        fontSize: 32,
        textAlign: 'left',
    }
})