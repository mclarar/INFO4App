import React, { useContext, useState } from 'react';
import {
  Alert,
  StyleSheet,
  View,
  ActivityIndicator,
  ImageBackground,
  Image,
} from 'react-native';
import { Input, Text, Button, Icon } from 'react-native-elements';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import { AutenticacaoContext } from '../../context/AutenticacaoContext';
import { styles } from './style';

const PerfilDoUsuario = ({ navigation }) => {
  const { usuario, setUsuario } = useContext(AutenticacaoContext);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://i.pinimg.com/750x/c0/01/68/c00168f5f9b4183a2de6dcfb1d84d3fe.jpg',
        }}
        resizeMode="cover"
        style={styles.imageBack}>

        <ScrollView style={styles.containerScroll}>
          <View style={styles.containerItems}>

            <View style={styles.containerFotoPerfil}>
              <Image
                style={styles.imageUser}
                source={{
                  uri: ('https://i0.wp.com/assistants.com.br/wp-content/uploads/2020/11/business-woman.jpeg?ssl=1')
                }}
              />
            </View>
            <View style={styles.viewRow}>
              <Text style={styles.containerText}>Nome: </Text>
              <Text style={styles.containerInput}>Usuário01</Text>
            </View>
            <View style={styles.viewRow}>
              <Text style={styles.containerText}>E-mail:</Text>
              <Text style={styles.containerInput}>usuario@mail.com</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                title="Editar perfil"
                titleStyle={styles.textButton}
                buttonStyle={{
                  backgroundColor: '#67ecd5',
                  borderRadius: 18,
                  margin: 5,
                  marginBottom: 10,
                }}
                onPress={() => console.log('aEditar perfil pressionado')}
              />

              <Button
                title="Logout"
                titleStyle={styles.textButton}
                buttonStyle={{
                  backgroundColor: '#67ecd5',
                  borderRadius: 18,
                  margin: 5,
                  marginBottom: 10,

                }}
                onPress={() => {
                  setUsuario({
                    id: 0,
                    name: '',
                    fotoPerfil: '',
                    email: '',
                    token: '',
                  });
                  console.log(usuario);
                  navigation.navigate('LoginScreen');
                }}
              />

            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};



export default PerfilDoUsuario;
