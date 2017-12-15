import React, { Component } from 'react';
import {connect} from 'react-redux';
import { View, Text, StyleSheet, ListView, Image, TouchableOpacity } from 'react-native';
import * as technologyServices from '../Services/modernTechnologyService';

// Row data (hard-coded)
var rows = [
    { id: 0, title: 'Article ', description: '' },
    { id: 1, title: 'Article ', description: '' },
    { id: 2, title: 'Article ', description: '' },
    { id: 3, title: 'Article ', description: '' },
    { id: 4, title: 'Article ', description: '' },
    { id: 5, title: 'Article ', description: '' },
    { id: 6, title: 'Article ', description: '' },
    { id: 7, title: 'Article ', description: '' },
    { id: 8, title: 'Article ', description: '' },
]
const title = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
const description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
// Row comparison function
const rowHasChanged = (r1, r2) => r1.id !== r2.id

const ds = new ListView.DataSource({ rowHasChanged })

class ModernTechnologyScreen extends Component {

    state = {
        dataSource: ds.cloneWithRows([])
    }

    componentWillMount() {
        const { language } = this.props;
        const weakSelf = this;
        technologyServices.modernTechService.getList(language.id).then(function(response) {
            console.log("response", response);
            weakSelf.setState({ showIndicator: false })
            if(response && response.success) {
                weakSelf.setState({dataSource: ds.cloneWithRows(response.data)}) 
            } else {
                Alert.alert('alert', 'doesnt get response');
            }
        }).catch(function(error) {
            console.log("error", error);
        });
    }

    renderRow = (rowData) => {
        var image = require('../Images/logo.png')
        return (
            <TouchableOpacity style={styles.row} onPress={this.onPress.bind(this, rowData._id)}>
                <View style={{flex: 3}}>
                    <Text style={styles.title} numberOfLines = {2}>{rowData.title}</Text>
                    <Text style={styles.description} numberOfLines = {4}>{rowData.description}</Text>
                </View>
                <Image source={{uri: "http://192.168.11.221/demo_app/public/agriculture/"+ rowData.imageName}} style={styles.imageView} resizeMode='contain' />
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <ListView
                style={styles.container}
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
            />
        )
    }

    onPress(props) {
        console.log(props);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 10
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#88888888',
        borderRadius: 2,
        margin: 10,
        marginTop: 0,
        padding: 10,
    },
    imageView: {
        // width: '15%',
        aspectRatio: 1,
        margin: 10,
        flex: 1,
    },
    title: {
        color: '#444444',
        fontWeight: 'bold',
        fontSize: 18,
    },
    description: {
        color: '#888888',
        textAlign: 'justify'
    }
});

const mapStateToProps = state => {
    return {
        language: state.language,
        userDetails: state.userDetails
    }
}

export default connect(mapStateToProps)(ModernTechnologyScreen)