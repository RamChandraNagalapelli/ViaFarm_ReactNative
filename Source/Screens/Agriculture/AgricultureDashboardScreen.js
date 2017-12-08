import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';


export default class AgricultureDashboardScreen extends Component {
	render() {
		return(
			<ScrollView style={styles.mainView}>
				<AgricultureDashboardCard />	
				<AgricultureDashboardCard />	
			</ScrollView>
		)
	}
}

export class AgricultureDashboardCard extends Component {

    render() {
    	const marginTop = 10;
        const marginBottom = 10;
       	const image = require('../../Images/logo.png');
		return (
            <TouchableOpacity style={[styles.cardView, { marginTop: marginTop, marginBottom: marginBottom }]}>
                
                <Image source={image} style={styles.imageView} resizeMode='contain' />
            </TouchableOpacity>
            
        )
    }
}


const styles = StyleSheet.create({
	mainView: {
        backgroundColor: 'white',
        paddingLeft: 20,
        paddingRight: 20,
    },
    cardView: {
        flex: 0, 
        height: '100%', 
        width: '100%',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        marginLeft: 0,
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        // overflow: 'hidden'
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
});