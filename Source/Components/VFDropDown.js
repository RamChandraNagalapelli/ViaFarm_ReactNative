import ModalDropdown from 'react-native-modal-dropdown';
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../Actions'

class VFDropDown extends Component {

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

    componentWillReceiveProps() {
        this.forceUpdate()
    }

    renderRow(item) {
        return (
            <Text style={{ width: screenSize.width * 0.8 - 10, padding: 10 }}>{item}</Text>
        )
    }

    onSelect = (index) => {
        switch (this.props.title) {
            case 'Country':
                this.props.setCountry(this.props.options[index])
                this.props.setState(null)
                this.props.setCity(null)
                break
            case 'State':
                this.props.setState(this.props.options[index])
                this.props.setCity(null)
                break
            case 'City':
                this.props.setCity(this.props.options[index])
                break
            default: break;
        }
        console.log('onSelect', this.props.title, this.props.options[index])
    }

    renderDeopdown() {
        if (this.props.countries) {

        }
    }

    render() {

        console.log('this.props.options', this.props.options)
        if (this.props.options) {
            return (
                <View style={{ marginTop: 20 }}>
                    <Text style={styles.title}>{this.state.title}</Text>
                    <View style={styles.deopDownView}>
                        <ModalDropdown
                            style={styles.dropDown}
                            // options={this.state.options}
                            options={this.props.options.map((item) => { return item.name })}
                            renderRow={this.renderRow}
                            defaultValue={this.state.defaultText}
                            textStyle={styles.dropDownText}
                            disabled={!this.props.countries}
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
        return (
            <View style={{ flex: 1, backgroundColor: 'red' }} />
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
        fontSize: 17,
        fontFamily: 'System',
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
        countries: state.countryList,
        options: options,
    }
}

export default connect(mapStateToProps, actions)(VFDropDown);