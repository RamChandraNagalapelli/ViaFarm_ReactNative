import React, { Component } from 'react';
import { View, Keyboard, ListView, TouchableOpacity, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { SearchBar } from '../Components'

// Row data (hard-coded)
var rows = [
    { id: 0, day: '5th Dec, Tuesday ', imageUrl: '', minTemp: 30, maxTemp: 45, description: 'Clouds' },
    { id: 0, day: '5th Dec, Tuesday ', imageUrl: '', minTemp: 30, maxTemp: 45, description: 'Clouds' },
    { id: 0, day: '5th Dec, Tuesday ', imageUrl: '', minTemp: 30, maxTemp: 45, description: 'Clouds' },
    { id: 0, day: '5th Dec, Tuesday ', imageUrl: '', minTemp: 30, maxTemp: 45, description: 'Clouds' },
    { id: 0, day: '5th Dec, Tuesday ', imageUrl: '', minTemp: 30, maxTemp: 45, description: 'Clouds' },
]
const title = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
const description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
// Row comparison function
const rowHasChanged = (r1, r2) => r1.id !== r2.id

const ds = new ListView.DataSource({ rowHasChanged })

class TradingScreen extends Component {

    onSearchTextChange = (text) => {
        console.log('onSearchTextChange', text);
    }

    onSearchSubmit = () => {
        console.log('onSearchSubmit');
    }

    state = {
        dataSource: ds.cloneWithRows(rows)
    }

    renderRow = (rowData) => {
        var image = require('../Images/logo.png')
        return (
            <TouchableOpacity style={styles.row}>
                <View style={{ flex: 4 }}>
                    <Text style={styles.date} numberOfLines={2}>{rowData.day}</Text>
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Text style={{ flex: 1, fontSize: 18, fontWeight: 'bold', color: '#666666' }}>min {rowData.minTemp}°</Text>
                            <Text style={{ flex: 1, fontSize: 18, fontWeight: 'bold', color: '#666666' }}>max {rowData.maxTemp}°</Text>
                        </View>
                        <Text style={styles.description} numberOfLines={1}>{rowData.description}</Text>
                    </View>
                </View>
                <Image source={image} style={styles.imageView} resizeMode='contain' />
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={styles.mainView}>
                <SearchBar
                    placeholder='Search'
                    cancelButtonTitle='Cancel'
                    onChangeText={this.onSearchTextChange}
                    onSubmit={this.onSearchSubmit}
                />
                <ListView
                    style={styles.container}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.language,
    }
}

const styles = {
    mainView: {
        flex: 1,
        backgroundColor: 'white',
    },
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
    description: {
        flex: 1,
        color: '#888888',
        fontWeight: '600',
        fontSize: 25,
        textAlign: 'left',
    }
}
export default connect(null)(TradingScreen);