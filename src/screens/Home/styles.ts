import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131016',
      padding: 24
    },
    eventName: {
      color: '#FDFCFE',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48
    },
    eventDate: {
      color: '#6B6B6B',
      fontSize: 16
    },
    form: {
      width: '100%',
      flexDirection: 'row',
      gap: 8,
      marginTop: 36,
      marginBottom: 42,
    },
    input: {
      height: 56,
      backgroundColor: '#1F1E25',
      borderRadius: 5,
      color: '#FDFCFE',
      padding: 16,
      fontSize: 16,
      flex: 1
    },
    buttonText: {
      color: '#fff',
      fontSize: 24
    },
    button: {
      width: 56,
      height: 56,
      borderRadius: 5,
      backgroundColor: '#31CF67',
      justifyContent: 'center',
      alignItems: 'center'
    }
  })