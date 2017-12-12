import { StyleSheet } from 'react-native'

export const LoginStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButton: {
        marginTop: 50,
        marginBottom: 50,
        backgroundColor: '#4f8f42',
        width: '80%',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#4f8f42'
    },
    label: {
        color: 'black',
        fontWeight: '600',
        padding: 5,
        fontSize: 18,
        alignSelf: 'center'
    },
    resendOTP: {
        color: 'black',
        fontWeight: '500',
        padding: 5,
        fontSize: 16,
        alignSelf: 'center',
        marginTop: 50,
    }
})