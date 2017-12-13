// import React, { Component } from 'react';
// import { View, StyleSheet, ListView, Text, Image, TouchableOpacity } from 'react-native';

// // Row data (hard-coded)
// var rows = [
//     { id: 0, title: 'Article ', description: '' },
//     { id: 1, title: 'Article ', description: '' },
//     { id: 2, title: 'Article ', description: '' },
//     { id: 3, title: 'Article ', description: '' },
//     { id: 4, title: 'Article ', description: '' },
//     { id: 5, title: 'Article ', description: '' },
//     { id: 6, title: 'Article ', description: '' },
//     { id: 7, title: 'Article ', description: '' },
//     { id: 8, title: 'Article ', description: '' },
// ]
// const title = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
// // Row comparison function
// const rowHasChanged = (r1, r2) => r1.id !== r2.id

// const ds = new ListView.DataSource({ rowHasChanged })

// export default class OrganicFarmingScreen extends Component {

//     state = {
//         dataSource: ds.cloneWithRows(rows)
//     }

//     renderRow = (rowData) => {
//         var image = require('../Images/logo.png')
//         return (
//             <View style={styles.row}>
//                 <Image source={image} style={styles.imageView} resizeMode='contain' />
//                 <TouchableOpacity style={styles.transparentButton}>
//                     <Image source={require('../Images/play-circle.png')} style={styles.playImage} resizeMode='center' />
//                     <Text style={styles.title} numberOfLines={2}>{title}</Text>
//                 </TouchableOpacity>
//             </View>
//         )
//     }

//     render() {
//         return (
//             <ListView
//                 style={styles.container}
//                 dataSource={this.state.dataSource}
//                 renderRow={this.renderRow}
//             />
//         )
//     }

//     onPress(props) {
//         console.log(props);
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'white',
//         paddingTop: 10
//     },
//     row: {
//         flex: 1,
//         flexDirection: 'row',
//         borderWidth: 1,
//         borderColor: '#88888888',
//         borderRadius: 3,
//         marginLeft: 10,
//         marginRight: 10,
//         marginBottom: 10,
//     },
//     imageView: {
//         flex: 1,
//         aspectRatio: 16 / 9,
//         margin: 10,
//     },
//     title: {
//         color: '#000',
//         fontWeight: '500',
//         fontSize: 18,
//         padding: 10,
//         backgroundColor: '#ffffff88',
//         position: 'absolute',
//         left: 0,
//         right: 0,
//         bottom: 0,
//     },
//     transparentButton: {
//         backgroundColor: '#00000044',
//         position: 'absolute',
//         left: 0,
//         top: 0,
//         right: 0,
//         bottom: 0,
//     },
//     playImage: {
//         width: '100%',
//         height: '100%',
//     }
// })
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  PixelRatio,
  Dimensions,
  Platform,
} from 'react-native';
import YouTube from 'react-native-youtube';

export default class OrganicFarmingScreen extends React.Component {
  state = {
    isReady: false,
    status: null,
    quality: null,
    error: null,
    isPlaying: true,
    isLooping: true,
    duration: 0,
    currentTime: 0,
    fullscreen: false,
    containerMounted: false,
    containerWidth: null,
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        onLayout={({ nativeEvent: { layout: { width } } }) => {
          if (!this.state.containerMounted) this.setState({ containerMounted: true });
          if (this.state.containerWidth !== width) this.setState({ containerWidth: width });
        }}
      >
        <Text style={styles.welcome}>
          {'<YouTube /> component for\n React Native.'}
        </Text>
        <Text style={styles.instructions}>
          http://github.com/inProgress-team/react-native-youtube
        </Text>

        {this.state.containerMounted &&
          <YouTube
            ref={component => {
              this._youTubeRef = component;
            }}
            // You must have an API Key for the player to load in Android
            apiKey="AIzaSyC5u3fzijiyqFGyOAGaiZugYsnMhQe5i3o"
            // Un-comment one of videoId / videoIds / playlist.
            // You can also edit these props while Hot-Loading in development mode to see how
            // it affects the loaded native module
            videoId="F9x-YczFw0A"
            // videoIds={['HcXNPI-IPPM', 'XXlZfc1TrD0', 'czcjU1w-c6k', 'uMK0prafzw0']}
            // playlistId="PLF797E961509B4EB5"
            play={this.state.isPlaying}
            loop={this.state.isLooping}
            fullscreen={this.state.fullscreen}
            controls={1}
            style={[
              { height: PixelRatio.roundToNearestPixel(this.state.containerWidth / (16 / 9)) },
              styles.player,
            ]}
            onError={e => this.setState({ error: e.error })}
            onReady={e => this.setState({ isReady: true })}
            onChangeState={e => this.setState({ status: e.state })}
            onChangeQuality={e => this.setState({ quality: e.quality })}
            onChangeFullscreen={e => this.setState({ fullscreen: e.isFullscreen })}
            onProgress={e => this.setState({ duration: e.duration, currentTime: e.currentTime })}
          />}

       
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  button: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'blue',
  },
  buttonTextSmall: {
    fontSize: 15,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  player: {
    alignSelf: 'stretch',
    marginVertical: 10,
  },
});