import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import RegTextField from '../Components/RegTextField'
import { TextField } from 'react-native-material-textfield';

class AddTradingScreen extends Component {

    state = {
        item: '',
        quantity: 0,
        price: 0,
        description: '',
    }
    onSubmitPress = () => {
        if (this.isValidData()) {
            console.log('All the data is Valid');
        }
    }

    onTextChanges = ({ text, tag, index }) => {
        switch (tag) {
            case 0:
                this.setState({ item: text })
                break
            case 1:
                this.setState({ quantity: text })
                break
            case 2:
                this.setState({ price: text })
                break
            case 3:
                this.setState({ description: text })
                break
            default: break
        }
        console.log('onTextChanges', tag, text);
    }

    isValidData() {
        const { item, quantity, price, description } = this.state
        if (!item) {
            Alert.alert('Alert', 'Please enter Item name');
            return false
        }
        if (!quantity) {
            Alert.alert('Alert', 'Please enter Quantity');
            return false
        }
        if (!price) {
            Alert.alert('Alert', 'Please enter Price');
            return false
        }
        return true
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white', padding: 10 }}>
                <RegTextField placeholder='Item name' tag={0} onTextChanges={this.onTextChanges} />
                <View style={{ flexDirection: 'row', alignItems: 'stretch', marginTop: 10 }}>
                    <View style={{ flex: 1 }}>
                        <RegTextField placeholder='Quantity' tag={1} onTextChanges={this.onTextChanges} />
                    </View>
                    <Text style={{ paddingTop: 40, paddingBottom: 40, padding: 10 }}>Kg</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'stretch' }}>
                    <View style={{ flex: 1 }}>
                        <RegTextField placeholder='Price per Kg' tag={2} onTextChanges={this.onTextChanges} />
                    </View>
                    <Text style={{ paddingTop: 40, paddingBottom: 40, padding: 10 }}>Rs</Text>
                </View>
                <RegTextField placeholder='Descreption' tag={3} onTextChanges={this.onTextChanges} maxLength={100} multiline={true} />
                <View style={{ backgroundColor: 'green', borderRadius: 5, marginTop: 50 }}>
                    <TouchableOpacity style={{ margin: 10 }} onPress={this.onSubmitPress}>
                        <Text style={{ alignSelf: 'center', fontSize: 17, fontWeight: '600', color: 'white' }}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default AddTradingScreen;