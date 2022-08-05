import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#e6f2f3'
  },
  containerScroll: {
    padding: 16,
  },
  containerItems: {

    alignItems: 'stretch',
    justifyContent: 'center',
    zIndex: 0,
    marginBottom: 20,
    marginTop: 20,
    backgroundColor: '#e6f2f3'
  },
  texto_entrada: {
    textAlign: 'center',
    fontSize: 25,
    marginBottom: 10,
    color: '#000',
    fontWeight: 'bold',
    borderStyle: 'solid',
    fontFamily: 'tahoma'

  },
  imageBack: {
    flex: 1,
    justifyContent: 'center',
  },
  container_foto: {
    display: 'flex',
    justifyContent: 'center',
  },
  imgUser: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginLeft: 75,
  },
  textButton: {
    color: '#000',

  },
});