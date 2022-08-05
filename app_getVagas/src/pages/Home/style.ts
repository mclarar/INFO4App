import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#e6f2f3',
  },
  containerItems: {
    padding: 16,
  },
  scrollCategoria: {
    flexGrow: 0,
  },
  botao_categoria: {
    alignItems: 'center',
    padding: 1,
    borderRadius: 15,
  },
  bottomCardScrollView: {
    marginBottom: 30,
  },
  bottomCard: {
    flex: 1,
    flexDirection: 'row',
  },
  bottomCardText: {
    width: '70%',
  },
  bottomCardRating: {
    width: '20%',
  },
  colorText: {
    color: '#000',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold'
  },

  titulos: {
    alignItems: 'center',
  },

  tituloText: {
    color: '#f0D906',


    fontSize: 35,
  },
  logo: {
    width: '50%',
    height: 150,
  },
  containerLogo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading: {
    padding: 10,
  },
});
