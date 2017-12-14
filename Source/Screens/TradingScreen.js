import React, { Component } from 'react';
import { View, Keyboard, ListView, TouchableOpacity, Text, Image, Linking, Alert, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { SearchBar } from '../Components'
import { Actions } from 'react-native-router-flux';

// Row data (hard-coded)
var rows = [
    { id: 0, item: 'Rice', quantity: 200, price: 2000, pricePerKg: 10, vendor: 'RamChandra', city: 'Srikhakulam', state: 'Andhra Pradesh', mobileNo: '8332019470' },
    { id: 1, item: 'Rice', quantity: 200, price: 2000, pricePerKg: 10, vendor: 'RamChandra', city: 'Srikhakulam', state: 'Andhra Pradesh', mobileNo: '8332019470' },
    { id: 2, item: 'Rice', quantity: 200, price: 2000, pricePerKg: 10, vendor: 'RamChandra', city: 'Srikhakulam', state: 'Andhra Pradesh', mobileNo: '8332019470' },
    { id: 3, item: 'Rice', quantity: 200, price: 2000, pricePerKg: 10, vendor: 'RamChandra', city: 'Srikhakulam', state: 'Andhra Pradesh', mobileNo: '8332019470' },
    { id: 4, item: 'Rice', quantity: 200, price: 2000, pricePerKg: 10, vendor: 'RamChandra', city: 'Srikhakulam', state: 'Andhra Pradesh', mobileNo: '8332019470' },
]
const title = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
const description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
// Row comparison function
const rowHasChanged = (r1, r2) => r1.id !== r2.id

const ds = new ListView.DataSource({ rowHasChanged })

class TradingScreen extends Component {

    onSearchTextChange = (text) => {
        this.setState({ searchTerm: text })
    }

    onSearchSubmit = () => {
        if (this.state.searchTerm) {
            console.log('Searching For', this.state.searchTerm)
        }
    }

    state = {
        dataSource: ds.cloneWithRows(rows)
    }

    onRowSelect(data) {
        console.log('make a call', data.mobileNo);
        Alert.alert(data.mobileNo, 'Make a call to ' + data.vendor, [
            { text: 'Cancel' },
            { text: 'Call', onPress: () => Linking.openURL(data.mobileNo) },
        ])
    }

    onAddButtonPress() {
        Actions.AddTradingScreen()
    }

    renderRow = (rowData) => {
        var image = require('../Images/logo.png')
        return (
            <TouchableOpacity style={styles.row} onPress={this.onRowSelect.bind(this, rowData)}>
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#666666', marginRight: 10 }} numberOfLines={1}>{rowData.item}</Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#666666', marginRight: 10 }} numberOfLines={1}>({rowData.quantity} kg)</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#666666', marginRight: 10 }} numberOfLines={1}>Price: {rowData.price} Rs</Text>
                        <Text style={{ flex: 1, fontSize: 17, fontWeight: '500', color: '#888888' }} numberOfLines={1}>({rowData.pricePerKg} Rs/kg)</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#666666', marginRight: 10 }} numberOfLines={1}>Vendor: </Text>
                        <Text style={{ flex: 1, fontSize: 16, fontWeight: '500', color: '#4488dd' }} numberOfLines={1}>{rowData.vendor}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#666666', marginRight: 10 }} numberOfLines={1}>Address: </Text>
                        <Text style={{ flex: 1, fontSize: 16, fontWeight: '500', color: '#dd55dd' }} numberOfLines={1}>{rowData.city}, {rowData.state}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={styles.mainView}>
                <SearchBar
                    placeholder='Search'
                    cancelButtonTitle='Cancel'
                    onChangeText={this.onSearchTextChange}
                    onSubmit={this.onSearchSubmit}
                />
                <ListView
                    style={styles.container}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                />
                <View style={styles.addButton}>
                    <TouchableWithoutFeedback onPress={this.onAddButtonPress.bind(this)}>
                        <Image source={require('../Images/plus.png')} resizeMode='contain' style={styles.imageView} />
                    </TouchableWithoutFeedback>
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.language,
    }
}

const styles = {
    mainView: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 10
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#88888888',
        borderRadius: 2,
        margin: 10,
        marginTop: 0,
        padding: 10,
    },
    imageView: {
        height: 40,
        width: 40,
    },
    addButton: {
        position: 'absolute',
        right: 30,
        bottom: 30,
        backgroundColor: 'transparent',
    },
}
export default connect(null)(TradingScreen);