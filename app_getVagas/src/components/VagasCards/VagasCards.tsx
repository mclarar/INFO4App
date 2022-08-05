import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';

import { styles } from './styles';


function VagasCard(vaga: any) {


  return (
    <View style={styles.container}>
      <View style={styles.card}>

        <Text style={styles.text}><Icon name='suitcase' color='#392620' size={18} /> Cargo: {vaga.cargoVaga}</Text>

        <Text style={styles.text}><Icon name='map-pin' color='red' size={18} /> Local: {vaga.localidade}</Text>
        <Text style={styles.text}><Icon name='money' color='green' size={18} /> Salário: R${vaga.salario},00</Text>
        <Text style={styles.text}><Icon name='clock-o' color='blue' size={18} /> Horário: {vaga.horaTrabalho}</Text>
        <Button
          title="Tenho interesse!"
          titleStyle={styles.textButton}
          buttonStyle={{
            backgroundColor: '#ffb568',
            borderRadius: 18,
            margin: 5,


          }}
          onPress={() => console.log('tenho interesse pressionado')}
        />
      </View>
    </View>
  );
}
export default VagasCard;
