import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: 5,
    marginBottom: 10,
  },

  card: {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: 332,
    height: 170,
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 5,
    flexDirection: 'column',
    elevation: 20,
    shadowColor: '#000',
    shadowOpacity: 1.0,
    marginLeft: 18
  },

  text: {
    textAlign: 'left',
    color: '#000',
    fontSize: 19,
    padding: 8

  },

  textButton: {
    color: '#000',
    fontWeight: 'bold'
  },
});
