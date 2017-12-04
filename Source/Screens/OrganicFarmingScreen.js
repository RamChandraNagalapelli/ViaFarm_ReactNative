import React, { Component } from 'react';
import { View, StyleSheet, ListView, Text, Image, TouchableOpacity } from 'react-native';

// Row data (hard-coded)
var rows = [
    { id: 0, title: 'Article ', description: '' },
    { id: 1, title: 'Article ', description: '' },
    { id: 2, title: 'Article ', description: '' },
    { id: 3, title: 'Article ', description: '' },
    { id: 4, title: 'Article ', description: '' },
    { id: 5, title: 'Article ', description: '' },
    { id: 6, title: 'Article ', description: '' },
    { id: 7, title: 'Article ', description: '' },
    { id: 8, title: 'Article ', description: '' },
]
const title = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
// Row comparison function
const rowHasChanged = (r1, r2) => r1.id !== r2.id

const ds = new ListView.DataSource({ rowHasChanged })

export default class OrganicFarmingScreen extends Component {

    state = {
        dataSource: ds.cloneWithRows(rows)
    }

    renderRow = (rowData) => {
        var image = require('../Images/logo.png')
        return (
            <View style={styles.row}>
                <Image source={image} style={styles.imageView} resizeMode='contain' />
                <TouchableOpacity style={styles.transparentButton}>
                    <Image source={require('../Images/play-circle.png')} style={styles.playImage} resizeMode='center' />
                    <Text style={styles.title} numberOfLines={2}>{title}</Text>
                </TouchableOpacity>
            </View>
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
        borderWidth: 1,
        borderColor: '#88888888',
        borderRadius: 3,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
    },
    imageView: {
        flex: 1,
        aspectRatio: 16 / 9,
        margin: 10,
    },
    title: {
        color: '#000',
        fontWeight: '500',
        fontSize: 18,
        padding: 10,
        backgroundColor: '#ffffff88',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
    transparentButton: {
        backgroundColor: '#00000044',
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
    },
    playImage: {
        width: '100%',
        height: '100%',
    }
})