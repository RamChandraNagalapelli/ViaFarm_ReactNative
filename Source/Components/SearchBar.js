import React, {Component} from 'react';
import {View, Image, TextInput, Keyboard, TouchableOpacity, Text} from 'react-native';

export class SearchBar extends Component {

    render() {
        const {onChangeText, onSubmit, placeholder, cancelButtonTitle} = this.props
        let plcHldr = placeholder ? placeholder : 'Search'
        let cancelTitle = cancelButtonTitle ? cancelButtonTitle : 'Cancel'
        return (
            <View style={{ backgroundColor: '#00000033', flexDirection: 'row', padding: 8, alignItems: 'stretch', justifyContent: 'center' }}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'stretch', justifyContent: 'center', borderRadius: 4, borderWidth: 0, backgroundColor: 'white' }}>
                <View style={{ padding: 7, paddingRight: 0 }}>
                    <Image source={require('../Images/search.png')} />
                </View>
                <TextInput
                    style={{ flex: 1, backgroundColor: 'white', fontSize: 16, padding: 5, borderRadius: 4, borderWidth: 0 }}
                    placeholder={plcHldr}
                    maxLength={30}
                    underlineColorAndroid='#00000000'
                    clearButtonMode='while-editing'
                    inlineImageLeft='../Images/logo.png'
                    returnKeyType='search'
                    onChangeText={onChangeText}
                    onSubmitEditing={onSubmit}
                />
            </View>
            <TouchableOpacity onPress={() => Keyboard.dismiss()}>
                <Text style={{ padding: 5, fontSize: 18, fontWeight: '500', color: 'rgb(72,123,255)' }}>{cancelTitle}</Text>
            </TouchableOpacity>
        </View>
        )
    }
}