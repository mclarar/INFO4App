import React from 'react';
import { View } from 'react-native';
import Lottie from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style'


const Splash = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Lottie
        autoPlay
        onAnimationFinish={() => navigation.navigate('LoginScreen')}
        source={require('../../assets/splash.json')}
        loop={false}
      />
    </View>
  );
};

export default Splash;
