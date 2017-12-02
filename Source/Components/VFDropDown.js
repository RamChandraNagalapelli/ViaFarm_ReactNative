
import ModalDropdown from 'react-native-modal-dropdown'


export default class VFDropDown extends component {
    render() {
        return (
            <ModalDropdown
            style={styles.dropDown}
            options={['AP', 'TE', 'TN', 'GJ', 'UP', 'MP', 'GOA']}
            renderRow={this.renderRow}
            defaultValue='Select city'
            textStyle={styles.dropDownText}
        />
        )
    }
}

const styles = StyleSheet.create({
    dropDown: {
        marginTop: 20,
        width: '100%',
        height: 30,
    },
    dropDownText: {
        fontSize: 18,
    }
})

