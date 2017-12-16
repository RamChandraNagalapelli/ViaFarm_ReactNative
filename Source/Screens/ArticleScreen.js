import React, { Component } from 'react';
import { View, ScrollView, Image, Text, Dimensions } from 'react-native';
import { connect } from 'react-redux';

const desc = 'This Is a Title This Is a Title This Is a Title This Is a Title This Is a Title This Is a Title This Is a Title This Is a Title This Is a Title This Is a Title This Is a Title This Is a Title This Is a Title This Is a Title This Is a Title This Is a Title This Is a Title This Is a Title This Is a Title This Is a Title This Is a Title This Is a Title This Is a Title This Is a Title This Is a Title This Is a Title This Is a Title This Is a Title This Is a Title This Is a Title This Is a Title This Is a Title This Is a Title This Is a Title This Is a Title This Is a Title This Is a Title This Is a Title This Is a Title This Is a Title This Is a Title This Is a Title This Is a Title This Is a Title This Is a Title This Is a Title This Is a Title This Is a Title This Is a Title ';
const link = 'https:\/\/www.Nrc.com/React_native/ViaFarm';

class ArticleScreen extends Component {

    render() {
        const { data } = this.props;
        return (
            <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
                <Image source={{uri: "http://192.168.11.221/demo_app/public/agriculture/"+ data.imageName}} style={{ width: screenSize.width, height: screenSize.width * 9 / 16 }} resizeMode='cover' />
                <Text style={styles.title} numberOfLines={2}>{data.title}</Text>
                <Text style={styles.desscription}>{data.description}</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.reference}>Reference: </Text>
                    <Text style={styles.link}>{data.link}</Text>
                </View>
            </ScrollView>
        )
    }
}

const screenSize = Dimensions.get('window');

const mapStateToProps = state => {
    return {
        language: state.language
    }
}

export default connect(mapStateToProps)(ArticleScreen);

const styles = {
    title: {
        fontSize: 17,
        fontWeight: '600',
        color: '#000000aa',
        padding: 5,
    },
    desscription: {
        fontSize: 15,
        color: 'gray',
        padding: 5,
        paddingTop: 0,
    },
    reference: {
        fontSize: 15,
        color: 'black',
        padding: 5,
        paddingTop: 0,
    },
    link: {
        flex: 1,
        fontSize: 15,
        color: 'blue',
        padding: 5,
        paddingTop: 0,
    }
}