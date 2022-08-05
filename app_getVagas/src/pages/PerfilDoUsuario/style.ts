import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#e6f2f3'
  },

  textButton: {
    color: '#000',

  },

  titulo_perfil_usuario: {
    textAlign: 'center',

    fontSize: 18,
    marginBottom: 40,
    color: '#000',

  },
  containerScroll: {
    padding: 16,
  },

  containerItems: {
    backgroundColor: 'white',
    borderRadius: 15,
    alignItems: 'stretch',
    justifyContent: 'center',
    zIndex: 0,
    marginBottom: 20,
    marginTop: 225,
    color: '#000',
    textAlign: 'center',
    fontSize: 22,
    elevation: 20,
    shadowColor: '#000',
    shadowOpacity: 1.0,

  },

  containerInput: {

    alignItems: 'stretch',
    justifyContent: 'center',
    color: '#000',
    textAlign: 'center',
    fontSize: 15,
    margin: 5,
    marginTop: 10
  },

  containerText: {
    textAlign: 'left',
    marginTop: 10,
    marginLeft: 20,
    color: '#000',

  },
  containerFotoPerfil: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    marginTop: -65

  },
  imageUser: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 150,
    borderRadius: 70,
    borderWidth: 1,
  },

  titulos: {
    alignItems: 'center',
  },

  tituloText: {
    color: '#000',
    fontSize: 25,
    marginTop: 25,
    fontWeight: 'bold'
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  viewRow: {
    justifyContent: 'center',
    flexDirection: 'row',
  },

  imageBack: {
    flex: 1,
    justifyContent: 'center',
    padding: 0,
    margin: 0
  },
});