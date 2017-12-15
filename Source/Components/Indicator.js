import React, { Component } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'

export class Indicator extends Component {
    render() {
        var { message, color, show } = this.props
        if (show) {
            return (
                <View style={{
                    backgroundColor: '#00000022',
                    flex: 1, position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        backgroundColor: 'white', padding: 10, aspectRatio: 1, borderRadius: 5,
                        shadowColor: '#000000', shadowRadius: 3, shadowOpacity: 0.3, shadowOffset: {width: 0, height: 0},
                    }}>
                        <ActivityIndicator size="large" color={color}/>
                        {message && <Text style={{ fontSize: 12, marginTop: 5 }} numberOfLines={1} >{message}</Text>}
                    </View>
                </View>
            )
        } else {
            return null
        }
        console.log('this.state.showIndicator', this.state.showIndicator)
    }
}
