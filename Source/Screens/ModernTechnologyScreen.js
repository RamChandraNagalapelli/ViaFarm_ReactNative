import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView, Image, TouchableOpacity } from 'react-native';

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
const title = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
const description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
// Row comparison function
const rowHasChanged = (r1, r2) => r1.id !== r2.id

const ds = new ListView.DataSource({ rowHasChanged })

export default class ModernTechnologyScreen extends Component {

    state = {
        dataSource: ds.cloneWithRows(rows)
    }

    renderRow = (rowData) => {
        var image = require('../Images/logo.png')
        return (
            <TouchableOpacity style={styles.row}>
                <View style={{flex: 3}}>
                    <Text style={styles.title} numberOfLines = {2}>{title}</Text>
                    <Text style={styles.description} numberOfLines = {4}>{description}</Text>
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
        // justifyContent: 'center',
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
    title: {
        color: '#444444',
        fontWeight: 'bold',
        fontSize: 18,
    },
    description: {
        color: '#888888',
        textAlign: 'justify'
    }
})