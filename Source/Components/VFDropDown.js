import ModalDropdown from 'react-native-modal-dropdown';
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableWithoutFeedback, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../Actions'

class VFDropDown extends Component {

    state = {
        title: '',
        tag: 0,
        options: [],
    }

    componentWillMount() {
        const { title, defaultText, tag, options } = this.props
        this.setState({ title, defaultText, tag, options, text: defaultText })
    }

    componentWillReceiveProps(props) {
        if (props.reset) {
            this.setState({text: this.props.defaultText})
        }
    }
    onPressDropDownButton = () => {
        this.setState({ displayPicker: !this.state.displayPicker })
    }

    onPressDropDownRow = (index) => {
        this.setState({ displayPicker: !this.state.displayPicker, text: this.props.options[index].name })
        if (this.props.onSelect) {
            this.props.onSelect({ tag: this.props.tag, index: index })
        }
    }

    renderRow(data) {
        return (
            <TouchableOpacity onPress={this.onPressDropDownRow.bind(this, data.index)}>
                <Text style={{ padding: 10 }}>{data.item.name}</Text>
            </TouchableOpacity>
        )
    }

    renderPicker() {
        if (this.state.displayPicker && this.props.options.length > 0) {
            return (
                <FlatList
                    style={styles.dropDownList}
                    data={this.props.options}
                    renderItem={this.renderRow.bind(this)}
                />
            )
        }
        return null
    }

    render() {
        const { options } = this.props
        const { text, defaultText } = this.state
        if (options.length <= 0 && text !== defaultText) {
            this.setState({ text: defaultText })
        }
        return (
            <View style={{ marginTop: 20 }}>
                <Text style={styles.title}>{this.state.title}</Text>
                <TouchableWithoutFeedback onPress={this.onPressDropDownButton}>
                    <View style={styles.dropDownView}>
                        <Text style={styles.dropDownText}>{this.props.defaultText}</Text>
                        <Image source={require('../Images/downArrow.png')} resizeMode='contain' style={styles.arrow} />
                    </View>
                </TouchableWithoutFeedback>
                {this.renderPicker()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    dropDownView: {
        flexDirection: 'row',
        padding: 5,
        borderWidth: 1,
        borderColor: '#88888888',
        borderRadius: 2,
    },
    dropDownText: {
        flex: 1,
        height: '100%',
        fontSize: 16,
        fontFamily: 'System',
        color: '#000000dd',
    },
    arrow: {
        height: '100%',
    },
    title: {
        fontSize: 16,
        marginBottom: 5,
        color: 'gray',
    },
    dropDownList: {
        height: 150
    }
})

const screenSize = Dimensions.get("window")

const mapStateToProps = (state, ownProps) => {
    var options = []
    switch (ownProps.title) {
        case 'Country':
            options = state.countryList;
            break;
        case 'State':
            if (state.selectedCountry) {
                options = state.stateList.filter((item) => { return item.countryId === state.selectedCountry.id })
            }
            break;
        case 'City':
            if (state.selectedState) {
                options = state.cityList.filter((item) => { return item.stateId === state.selectedState.id })
            }
            break;
        default: break;
    }

    return {
        // countries: state.countryList,
        // options: options,
    }
}

export default connect(mapStateToProps, actions)(VFDropDown);