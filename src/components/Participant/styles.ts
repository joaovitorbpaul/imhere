import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        marginBottom: 10
    },
    name: {
        flex: 1,
        color: '#FFF',
        marginLeft: 16,
        fontSize: 16
    },
    buttonText: {
        color: '#fff',
        fontSize: 24,
      },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#E23C44',
        justifyContent: 'center',
        alignItems: 'center'
    }
})