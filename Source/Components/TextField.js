import React, { Component } from 'react'
import { TextInput, StyleSheet, View } from 'react-native'

export default class TextField extends Component {

    state = {
        text: ''
    }

    onChangeText = (text) => {
        this.setState({ text })

        if (this.props.onTextChange) {
            const { onTextChange } = this.props
            onTextChange(text)
        }
    }

    onSubmitEditing = () => {
        if (this.props.onSubmitEditing) {
            const { onSubmitEditing } = this.props

            const { text } = this.state
            onSubmitEditing(text)
        }
    }

    componentWillMount() {
        const { text } = this.props
        this.setState({ text })
        console.log('this.props', this.props)
    }

    render() {
        const { text } = this.state
        const { placeholder } = this.props
        const { maxLength } = this.props
        const { textAlign } = this.props
        const keyboardType = this.props.keyboardType ? this.props.keyboardType : 'default'

        console.log('placeholder', maxLength);
        return (
            <View style = {{ width: '80%' }}>
                <TextInput
                    style = {styles.input}
                    value = {text}
                    placeholder = {placeholder}
                    onChangeText = {this.onChangeText}
                    maxLength = {maxLength}
                    onSubmitEditing = {this.onSubmitEditing}
                    onEndEditing = {this.onSubmitEditing}
                    keyboardType = {keyboardType}
                    clearButtonMode = 'while-editing'
                    returnKeyType = 'done'
                    textAlign = { textAlign }
                />
                <View style={styles.line} />
            </View>
        )
    }
}

const mudColor = 'brown' //'rgb(153, 144, 51)';
const leafColor = '#4f8f42'
const styles = StyleSheet.create({
    input: {
        paddingLeft: 10,
        color: mudColor,
        height: 40,
    },
    line: {
        height: 0.5,
        backgroundColor: mudColor,
    }
})