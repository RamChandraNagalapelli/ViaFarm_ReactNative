import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ListView,
  TouchableOpacity,
  PixelRatio
} from 'react-native';
import YouTubeView from '../Components/YouTubeView';
export default class VideoScreen extends React.Component {
  state = {
    videoId: null,
  };
 
  render() {
    const { data } = this.props
    return (
        <YouTubeView  title={data.title} videoId={data.id} play={true}/>
    );
  }
}