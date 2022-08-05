import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  centralizar: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',

  },
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',

  },
  containerItems: {

    padding: 16,
    alignItems: 'stretch',
    justifyContent: 'center',
    zIndex: 1,

  },
  colorText: {
    color: '#000',

    textAlign: 'center',
    fontSize: 20,
  },
  containerLottie: {
    height: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Gif: {
    flex: 1,
    width: '60%',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000000',
  },

});