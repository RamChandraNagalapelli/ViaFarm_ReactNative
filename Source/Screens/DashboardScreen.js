import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

class DashboardScreen extends Component {

    onSelect = ({ text, tag }) => {
        switch (tag) {
            case 0:
                Actions.AgricultureDashboardScreen();
                break;
            case 1:
                Actions.WeatherScreen();
                break;
            case 2:
                Actions.ModernTechnologyScreen();
                break;
            case 3:
                Actions.OrganicFarmingScreen();
                break;
            default:
                Actions.TradingScreen();
                break;
        }
    }

    render() {
        const { language } = this.props
        return (
            <ScrollView style={styles.mainView} >
                <DashboardCard text={language ? language.agriculture : ''} tag={0} onPress={this.onSelect} />
                <DashboardCard text={language ? language.weather : ''} tag={1} onPress={this.onSelect} />
                <DashboardCard text={language ? language.modernTechnology : ''} tag={2} onPress={this.onSelect} />
                <DashboardCard text={language ? language.organicFarming : ''} tag={3} onPress={this.onSelect} />
                <DashboardCard text={language ? language.trading : ''} tag={4} onPress={this.onSelect} />
            </ScrollView>
        )
    }
}

export class DashboardCard extends Component {

    componentWillMount() {
        const { text, image, tag } = this.props
        this.setState({ text, image, tag })
    }

    state = {
        image: '',
        text: '',
        tag: 0,
    }

    onPress = () => {
        const { text, tag } = this.state
        const { onPress } = this.props
        onPress({ text, tag })
    }

    render() {
        var image = null
        switch (this.props.tag) {
            case 0:
                image = require('../Images/Dashboard/agriculture.png')
                break;
            case 1:
                image = require('../Images/Dashboard/weather.png')
                break;
            case 2:
                image = require('../Images/Dashboard/moderntech.png')
                break;
            case 3:
                image = require('../Images/Dashboard/farming.png')
                break;
            case 4:
                image = require('../Images/Dashboard/trading.png')
                break;
        }
        var marginTop = 10
        var marginBottom = 10
        switch (this.state.tag) {
            case 0: marginTop = 30; break;
            case 4: marginBottom = 30; break;
            default: break
        }

        return (
            <TouchableOpacity style={[styles.cardView, { marginTop: marginTop, marginBottom: marginBottom }]}
                onPress={this.onPress}>
                <Text style={styles.textLabel} >{this.state.text}</Text>
                <Image source={image} style={styles.imageView} resizeMode='contain' />
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    mainView: {
        backgroundColor: '#f2f2f2',
        paddingLeft: 30,
        paddingRight: 30,
    },
    cardView: {
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 3,
        borderColor: '#88888888',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textLabel: {
        margin: 30,
        marginRight: 10,
        width: '55%',
        opacity:0.7,
        fontSize: 20,
        fontWeight: '700',
        fontFamily: 'Roboto-Regular',
        color: '#000'
    },
    imageView: {
        width: '25%',
        // opacity:0.7,
        aspectRatio: 1,
        margin: 10,
    }
})

const mapStateToProps = state => {
    return {
        language: state.language
    }
}

export default connect(mapStateToProps)(DashboardScreen);