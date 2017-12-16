import React, { Component } from 'react';
import { View, StyleSheet, ListView, Text, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import YouTubeView from '../Components/YouTubeView';

// Row data (hard-coded)
var rows = [
    { id: '7kOY9RyFrLo', title: 'How to do Organic Farming ', description: '' },
    { id: 'KzQ3j1IEtPg', title: 'How to do Hindi Farming ', description: '' },
    { id: '7kOY9RyFrLo', title: 'How to do Organic Farming ', description: '' },
    { id: '7kOY9RyFrLo', title: 'How to do Organic Farming ', description: '' },
]
const title = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
// Row comparison function
const rowHasChanged = (r1, r2) => r1.id !== r2.id

const ds = new ListView.DataSource({ rowHasChanged })

export default class OrganicFarmingScreen extends Component {

    state = {
        dataSource: ds.cloneWithRows(rows),
        videoId: null,
    }

    renderRow(data) {
        var image = require('../Images/logo.png')
        return (
            <View style={styles.row} >
                <Image source={image} style={styles.imageView} resizeMode='contain' />
                <View style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, backgroundColor: '#00000022' }} />
                <Text style={styles.title} numberOfLines={2}>{data.title}</Text>
                <TouchableOpacity style={styles.transparentButton} onPress={this._onSelectVideo.bind(this, data)}>
                    <Image source={require('../Images/play-circle.png')} style={styles.playImage} resizeMode='contain' />
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ListView
                    style={styles.container}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                />
                {this.state.videoId && <View style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, backgroundColor: '#00000088', justifyContent: 'center' }}>
                    <TouchableWithoutFeedback onPress={() => this.setState({ videoId: null })}>
                        <View style={{ backgroundColor: '#00000000', flex: 1 }} />
                    </TouchableWithoutFeedback>
                    <YouTubeView videoId={this.state.videoId} play={true} />
                    <TouchableWithoutFeedback onPress={() => this.setState({ videoId: null })}>
                        <View style={{ backgroundColor: '#00000000', flex: 1 }} />
                    </TouchableWithoutFeedback>
                </View>}
            </View>
        )
    }

    _onSelectVideo = (data) => {
        console.log("1245", data);
        this.setState({ videoId: data.id });
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
        fontWeight: '400',
        fontSize: 16,
        fontFamily: 'Roboto-Light',
        padding: 10,
        backgroundColor: '#fff',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
    transparentButton: {
        backgroundColor: '#00000000',
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
    },
    playImage: {
        flex: 1,
        width: 75,
        height: 75,
        justifyContent: 'space-around',
        alignSelf: 'center',
    }
})