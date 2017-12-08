import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class DashboardScreen extends Component {

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
                Alert.alert(text, 'Comming Soon!!!!!!!')
                break;
        }
    }

    render() {
        return (
            <ScrollView style={styles.mainView} >
                <DashboardCard text='Agriculture' tag={0} onPress={this.onSelect} />
                <DashboardCard text='Weather' tag={1} onPress={this.onSelect} />
                <DashboardCard text='Modern Technology' tag={2} onPress={this.onSelect} />
                <DashboardCard text='Organic Farming' tag={3} onPress={this.onSelect} />
                <DashboardCard text='Trading' tag={4} onPress={this.onSelect} />
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
        var image = require('../Images/logo.png')
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
        backgroundColor: 'white',
        paddingLeft: 40,
        paddingRight: 40,
    },
    cardView: {
        borderWidth: 1,
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
        fontSize: 20,
        fontWeight: 'bold',
        color: '#444444'
    },
    imageView: {
        width: '25%',
        aspectRatio: 1,
        margin: 10,
    }
})