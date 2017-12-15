import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ListView,
  TouchableOpacity,
  PixelRatio
} from 'react-native';
import YouTube from 'react-native-youtube';
import YouTubeView from '../Components/YouTubeView';
// Row data (hard-coded)
var rows = [
  { id: 'aUWyD47eh7I', title: 'Article ', description: '' },
]
const title = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
// Row comparison function
const rowHasChanged = (r1, r2) => r1.id !== r2.id

const ds = new ListView.DataSource({ rowHasChanged })
export default class OrganicFarmingScreen extends React.Component {
  state = {
    videoId: 'nill',
    dataSource: ds.cloneWithRows(rows)
  };

  renderRow(rowData) {
    var image = require('../Images/logo.png')
    console.log(rowData, "nhdxfg");
    return (
      <YouTubeView play={rowData.id === this.state.videoId} title='Organic Farmin Video - 1' videoId={rowData.id} onPlay={this.onPlayPausePress.bind(this)}/>
    )
  }

  onPlayPausePress = ({videoId}) => {
    console.log('onPlayPausePress', videoId, 'dfdfgdgd-->', this.state.videoId)
    this.setState({videoId: videoId})
  }

  render() {
    return (
      <ListView style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}
      />
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