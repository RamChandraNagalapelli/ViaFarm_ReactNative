// import React from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   ListView,
//   TouchableOpacity,
//   PixelRatio
// } from 'react-native';
// import YouTube from 'react-native-youtube';
// import YouTubeView from '../Components/YouTubeView';
// // Row data (hard-coded)
// var rows = [
//   { id: 'aUWyD47eh7I', title: 'Article ', description: '' },
// ]
// const title = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
// // Row comparison function
// const rowHasChanged = (r1, r2) => r1.id !== r2.id

// const ds = new ListView.DataSource({ rowHasChanged })
// export default class OrganicFarmingScreen extends React.Component {
//   state = {
//     videoId: 'nill',
//     dataSource: ds.cloneWithRows(rows)
//   };

//   renderRow(rowData) {
//     var image = require('../Images/logo.png')
//     console.log(rowData, "nhdxfg");
//     return (
//       <YouTubeView play={rowData.id === this.state.videoId} title='Organic Farmin Video - 1' videoId={rowData.id} onPlay={this.onPlayPausePress.bind(this)}/>
//     )
//   }

//   onPlayPausePress = ({videoId}) => {
//     console.log('onPlayPausePress', videoId, 'dfdfgdgd-->', this.state.videoId)
//     this.setState({videoId: videoId})
//   }

//   render() {
//     return (
//       <ListView style={styles.container}
//         dataSource={this.state.dataSource}
//         renderRow={this.renderRow.bind(this)}
//       />
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'white',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   buttonGroup: {
//     flexDirection: 'row',
//     alignSelf: 'center',
//   },
//   button: {
//     paddingVertical: 4,
//     paddingHorizontal: 8,
//     alignSelf: 'center',
//   },
//   buttonText: {
//     fontSize: 18,
//     color: 'blue',
//   },
//   buttonTextSmall: {
//     fontSize: 15,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
//   player: {
//     alignSelf: 'stretch',
//     marginVertical: 10,
//   },
// });
import React, { Component } from 'react';
import { View, StyleSheet, ListView, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

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
        dataSource: ds.cloneWithRows(rows)
    }

    renderRow(data) {
        var image = require('../Images/logo.png')
        return (
            <View style={styles.row} >
                <Image source={image} style={styles.imageView} resizeMode='contain' />
                <TouchableOpacity style={styles.transparentButton} onPress={this._onSelectVideo.bind(this, data)}>
                    <Image source={require('../Images/play-circle.png')} style={styles.playImage} resizeMode='center' />
                    <Text style={styles.title} numberOfLines={2}>{data.title}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        return (
            <ListView
                style={styles.container}
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}
            />
        )
    }

    _onSelectVideo = (data) => {
        console.log("1245", data);
        Actions.VideoScreen({data: data});
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
        // fontWeight: '500',
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
        backgroundColor: '#00000044',
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
    },
    playImage: {
        width: 100,
        justifyContent: 'space-between',
        height: 100,
        marginLeft: 120,
        marginTop:15,
        marginBottom: 40,
    }
})