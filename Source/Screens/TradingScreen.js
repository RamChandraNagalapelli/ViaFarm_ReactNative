import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';

class TradingScreen extends Component {

    render() {
        return (
            <View style={styles.mainView}>

            </View>
        )
    }
}

const styles = {
    mainView: {
        flex: 1,
        backgroundColor: 'white',
    }
}

const mapStateToProps = state => {
    return {
        language: state.language,
    }
}

export default connect(null)(TradingScreen);