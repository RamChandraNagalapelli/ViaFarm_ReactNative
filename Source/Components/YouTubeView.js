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
import YouTube, { YouTubeStandaloneIOS, YouTubeStandaloneAndroid } from 'react-native-youtube';

export default class YouTubeView extends React.Component {
    state = {
        isReady: false,
        status: null,
        quality: null,
        error: null,
        isLooping: true,
        duration: 0,
        currentTime: 0,
        fullscreen: false,
        containerMounted: false,
        containerWidth: null,
    };

    onPlay = () => {
        const { onPlay, videoId, play } = this.props
        if (onPlay) {
            if (!play){
                onPlay({videoId: videoId})
            }
            else{
                onPlay({videoId: ''})
            }
             
        }
    }

    render() {
        console.log('renders YouTubeView', this.props.videoId, this.props.play)
        const { play } = this.props
        return (
            <View
                style={styles.container}
                onLayout={({ nativeEvent: { layout: { width } } }) => {
                    if (!this.state.containerMounted) this.setState({ containerMounted: true });
                    if (this.state.containerWidth !== width) this.setState({ containerWidth: width });
                }}
            >

                {this.state.containerMounted &&
                    <YouTube
                        ref={component => {
                            this._youTubeRef = component;
                        }}
                        apiKey="AIzaSyC5u3fzijiyqFGyOAGaiZugYsnMhQe5i3o"
                        videoId={this.props.videoId}
                        play={play}
                        loop={this.state.isLooping}
                        fullscreen={this.state.fullscreen}
                        /* controls={2} */
                        style={[
                            { height: PixelRatio.roundToNearestPixel(this.state.containerWidth / (16 / 9)) },
                            styles.player,
                        ]}
                        onError={e => this.setState({ error: e.error })}
                        onReady={e => this.setState({ isReady: true })}
                        onChangeState={e => {
                            this.onPlay
                            this.setState({ status: e.state })
                        }}
                        onChangeQuality={e => this.setState({ quality: e.quality })}
                        onChangeFullscreen={e => this.setState({ fullscreen: e.isFullscreen })}
                        onProgress={e => this.setState({ duration: e.duration, currentTime: e.currentTime })}
                    />}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
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