import ModalDropdown from 'react-native-modal-dropdown'
import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'

export default class VFDropDown extends Component {

    state = {
        title: '',
        defaultText: '',
        text: '',
        tag: 0,
        options: [],
    }

    componentWillMount() {
        const { title, defaultText, tag, options } = this.props
        this.setState({ title, defaultText, tag, options })
    }

    renderRow(item) {
        return (
            <Text style={{ width: screenSize.width * 0.8 - 10, padding: 10 }}>{item}</Text>
        )
    }

    onSelect = (index) => {
        const {onSelect} = this.props
        const indexInt = Number.parseInt(index, 10)
        // onSelect({index, text: this.options[index], tag: this.props.tag})
        console.log('index', index, Number.parseInt(index, 10), this.state.options[indexInt])
    }

    render() {
        return (
            <View>
                <Text style={styles.title}>{this.state.title}</Text>
                <View style={styles.deopDownView}>
                    <ModalDropdown
                        style={styles.dropDown}
                        options={this.state.options}
                        renderRow={this.renderRow}
                        defaultValue={this.state.defaultText}
                        textStyle={styles.dropDownText}
                        disabled={!this.state.options}
                        onSelect={this.onSelect}
                    />
                    <Image
                        source={require('../Images/downArrow.png')}
                        resizeMode='contain'
                        style={styles.arrow}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    deopDownView: {
        flexDirection: 'row',
        padding: 5,
        borderWidth: 1,
        borderColor: '#88888888',
        borderRadius: 2,
    },
    dropDown: {
        flex: 1,
        height: '100%',
    },
    dropDownText: {
        fontSize: 18,
    },
    arrow: {
        height: '100%',
    },
    title: {
        fontSize: 17,
        marginBottom: 5,
        color: 'gray',
    }
})

const screenSize = Dimensions.get("window")