import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
  ScrollView,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Input, Text, Button, Icon } from 'react-native-elements';
import { styles } from './style';
import AxiosInstance from '../../api/AxiosInstance';
import { AutenticacaoContext } from '../../context/AutenticacaoContext';
import {
  CameraOptions,
  ImageLibraryOptions,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';


const Cadastro = () => {
  const { usuario, setUsuario } = useContext(AutenticacaoContext);
  const [empresa, setEmpresa] = useState('');
  const [cargoVaga, setCargoVaga] = useState('');
  const [localidade, setLocalidade] = useState('');
  const [salario, setSalario] = useState('');
  const [horaTrabalho, setHoraTrabalho] = useState('');

  const navigation = useNavigation();

  const postVaga = () => {
    const vaga = {
      empresa: empresa,
      cargoVaga: cargoVaga,
      localidade: localidade,
      salario: salario,
      horaTrabalho: horaTrabalho,

    };
    // console.log("entrou no post Vaga");

    AxiosInstance
      .post(
        "vaga/criarVaga",
        vaga,
        {
          headers: {
            'Access-Control-Allow-Origin': '',
            Authorization: 'Bearer ' + usuario.token,
          }
        }


      )
      .then((response) => {
        console.log(response.data);
        Alert.alert("Vaga cadastrada com sucesso!")

      })
      .catch((error) => {
        console.log(error);
        Alert.alert("Erro! verifique as informações de cadastro.")

      });
  };



  return (
    <View style={styles.container}>

      <ScrollView style={styles.containerScroll}>
        <Text style={styles.texto_entrada}>{'Divulgue sua oportunidade!'}</Text>
        <View style={styles.containerItems}>

          <Input
            placeholder="Empresa"
            onChangeText={setEmpresa}
            value={empresa}
            style={{ color: '#000' }}
          />

          <Input
            placeholder="Cargo"
            onChangeText={setCargoVaga}
            value={cargoVaga}
            style={{ color: '#000' }}
          />
          <Input
            placeholder="Localidade"
            onChangeText={setLocalidade}
            value={localidade}
            style={{ color: '#000' }}

          />
          <Input
            placeholder="Salario"
            onChangeText={setSalario}
            value={salario}
            style={{ color: '#000' }}

          />
          <Input
            placeholder="Carga horária"
            onChangeText={setHoraTrabalho}
            value={horaTrabalho}
            style={{ color: '#000' }}

          />

          <Button
            title="Cadastrar"
            titleStyle={{
              color: '#000',

            }}
            buttonStyle={{
              backgroundColor: '#67ecd5',
              borderRadius: 18,
              margin: 5,
              marginBottom: 10,
            }}
            onPress={() => postVaga()}
          />


        </View>
      </ScrollView>

    </View>
  );
};


export default Cadastro;
