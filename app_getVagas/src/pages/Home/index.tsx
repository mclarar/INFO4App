import React, { useEffect, useState, useContext } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  TouchableHighlight,
  BackHandler,
  FlatList,
  Image,
  ActivityIndicator
} from 'react-native';

import { Rating, AirbnbRating } from 'react-native-ratings';
import { Text, Card, Input, Icon } from 'react-native-elements';
import AxiosInstance from '../../api/AxiosInstance';
import { AutenticacaoContext } from '../../context/AutenticacaoContext';

import { LoadingContext } from '../../context/LoadingContext';
import VagasCard from '../../components/VagasCards/VagasCards'
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent';

import { styles } from './style';



const Home = ({ route, navigation }) => {
  const { usuario } = useContext(AutenticacaoContext);
  const { loading, setLoading } = useContext(LoadingContext);

  const [vaga, setVaga] = useState('');
  const [busca, setBusca] = useState('');



  useEffect(() => {

    getVagas();
  }, [])

  useEffect(() => {
    pesquisarVaga(busca);
  }, [busca])



  const getVagas = async () => {
    AxiosInstance.get(`/vaga`,
      {
        headers: {
          'Access-Control-Allow-Origin': '',
          Authorization: 'Bearer ' + usuario.token,
        }
      }

    )
      .then(result => {
        console.log('Dados dos produtos' + JSON.stringify(result.data));
        setVaga(result.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(
          'Erro ao carregar a lista de vagas' + JSON.stringify(error),
        );
      });
  };

  const pesquisarVaga = (busca: string) => {
    if (busca !== '') {
      setVaga(
        vaga.filter(response => response.cargoVaga.toUpperCase().includes(busca.toUpperCase())),
      );
    } else {
      getVagas();
    }
  }

  return (
    <View style={styles.container}>


      <LoadingComponent />
      <View style={styles.containerLogo}>
        {/* <Image style={styles.logo} source={require('../../assets/logohome.png')} /> */}
        {/* <Text style={styles.tituloText}>Home</Text> */}
      </View>
      <ScrollView style={styles.containerItems}>
        <View>
          <Input

            style={{ color: '#000' }}
            placeholder="buscar vaga"
            placeholderTextColor={'#000'}
            onChangeText={(e) => { setBusca(e) }}

            value={busca}
            leftIcon={
              <Icon
                name="search"
                color="#000"
                type="font-awesome"
                size={24}
              />
            }
          />
        </View>
        <ScrollView style={styles.bottomCardScrollView}>
          {/* <TouchableOpacity>
            <Card containerStyle={styles.BottomCardStyle}>
              <Card.Image
                source={require('../../assets/banner-frete.png')} />

            </Card>
          </TouchableOpacity> */}
        </ScrollView>
        <Text style={styles.colorText}>{'Encontre sua vaga!'}</Text>
        <FlatList
          data={vaga}
          horizontal={false}
          renderItem={({ item }) =>
            <VagasCard
              cargoVaga={item.cargoVaga}
              empresa={item.empresa}
              localidade={item.localidade}
              salario={item.salario}
              horaTrabalho={item.horaTrabalho}
            />}
        />
      </ScrollView>

    </View>
  );
};



export default Home;
