import React, { Component } from 'react'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'
import { TextField } from 'react-native-material-textfield';

export default class RegTextField extends Component {

    state = {
        text: '',
        tag: 0
    }

    onChangeText = (text) => {
        const { onTextChanges } = this.props
        const { tag } = this.state
        this.setState({ text })
        if (!onTextChanges) return
        onTextChanges({text, tag})
    }

    componentWillMount() {
        const { text } = this.props
        const { tag } = this.props
        this.setState({ text })
        this.setState({ tag })
    }

    render() {
        const { text } = this.state
        const maxLength = this.props.maxLength ? this.props.maxLength : 15
        const { keyboardType } = this.props
        const { placeholder } = this.props

        return (
            <TextField
                label = {placeholder}
                value = {text}
                onChangeText = {this.onChangeText}
                clearButtonMode = 'while-editing'
                keyboardType = {keyboardType}
                maxLength = {maxLength}
                tintColor = 'brown'
            />
        )
    }
}