import React, { useState, useContext } from 'react';
import {
  Alert,
  View,
  ActivityIndicator,
  ImageBackground

} from 'react-native';
import { Input, Text, Button, Icon } from 'react-native-elements';
import { AutenticacaoContext } from '../../context/AutenticacaoContext';
import { LoadingContext } from '../../context/LoadingContext';
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent';
import { styles } from './style'

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { login } = useContext(AutenticacaoContext);
  const { loading, setLoading } = useContext(LoadingContext);

  const handleLogin = async (email: string, senha: string) => {
    console.log(`handleLogin - Email: ${email} - Senha: ${senha}`);
    showLoading();
    setLoading(true);

    const respostaLogin = await login(email, senha);

    if (!respostaLogin) {
      Alert.alert('erro', '', [
        { text: 'OK' },
        { text: 'nao foi possivel realizar login' },
      ]);
      setLoading(false);
    } else {

      navigation.navigate('HomeScreen');
    }
  };

  const showLoading = () => {
    <LoadingComponent />
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://i.pinimg.com/564x/b2/30/d1/b230d19d4d73f6c68cc728f132ed5ebe.jpg',
        }}
        resizeMode="cover"
        style={styles.imageBackground}>
        <View style={styles.container_itens}>
          <Text style={styles.texto_entrada}>
            {'Bem-vindo!'}
          </Text>
          <Text style={styles.texto_entrada_menor}>
            {'Faça o login para continuar'}
          </Text>

          <Input
            inputStyle={styles.input}
            placeholder='E-mail'
            placeholderTextColor={'#3a97a3'}
            onChangeText={setEmail}
            value={email}
            leftIcon={<Icon name='user' color='#3a97a3' type='font-awesome' size={24} />}
          />
          <Input
            inputStyle={styles.input}
            placeholder='Senha'
            placeholderTextColor={'#3a97a3'}
            onChangeText={setSenha}
            value={senha}
            leftIcon={<Icon name='key' color='#3a97a3' type='font-awesome' size={24} />}
            secureTextEntry
          />

          <Button
            title="Entrar"
            titleStyle={
              styles.title_Button
            }
            buttonStyle={{
              backgroundColor: '#053f46',
              borderRadius: 20,

            }}
            onPress={() => handleLogin(email, senha)}
          />
          <Button
            title="Cadastre-se"
            titleStyle={
              styles.title_Button
            }
            buttonStyle={{
              backgroundColor: '#053f46',
              borderRadius: 20,
              marginTop: 10

            }}
            onPress={() => console.log('cadastrar pressionado')}
          />
          <View>
            <ActivityIndicator animating={loading} size={'large'} color="#03252a" />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};



export default Login;
