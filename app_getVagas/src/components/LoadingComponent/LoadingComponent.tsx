import React, { useContext } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import Lottie from 'lottie-react-native';
import { styles } from './style';

import { LoadingContext } from '../../context/LoadingContext';

function LoadingComponent() {
  const { loading } = useContext(LoadingContext);
  if (loading) {
    return (
      <View style={[styles.centralizar, { position: 'absolute', zIndex: 1 }]}>
        <View style={[styles.container]}>
          <View style={styles.containerItems}>
            <Text style={styles.colorText}>
              Buscando as melhores oportunidades pra você...
            </Text>
            <View style={styles.containerLottie}>
              <Lottie
                autoPlay
                source={require('../../assets/loading.json')}
                style={styles.Gif}
              />
            </View>

          </View>
        </View>
      </View>
    );
  } else {
    return null;
  }
}

export default LoadingComponent;
