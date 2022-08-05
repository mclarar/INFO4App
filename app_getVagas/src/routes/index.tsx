import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar, SafeAreaView } from 'react-native';
import React, { useContext } from 'react';
import Login from '../pages/Login';
import Home from '../pages/Home';


import { Icon, Badge, withBadge } from 'react-native-elements';


import Cadastro from '../pages/Cadastro';

import PerfilDoUsuario from '../pages/PerfilDoUsuario';


import Splash from '../pages/SplashScrenn';

const TabNavigation = createBottomTabNavigator();
const BottomTabNavigator = () => {



  return (
    <TabNavigation.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: { backgroundColor: '#152736', borderBottomWidth: 0 },
      }}>
      <TabNavigation.Screen
        name="HomeTabScreen"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => {
            return (
              <Icon name="home" color="#029c82" type="font-awesome" size={24} />
            );
          },
        }}
      />
      <TabNavigation.Screen
        name="CadastroTabScreen"
        component={Cadastro}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => {
            return (
              <Icon name="plus" color="#029c82" type="font-awesome" size={24} />
            );
          },
        }}
      />


      <TabNavigation.Screen
        name="PerfilTabScreen"
        component={PerfilDoUsuario}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => {
            return (
              <Icon name="user" color="#029c82" type="font-awesome" size={24} />
            );
          },
        }}
      />

    </TabNavigation.Navigator>
  );
};

const StackNavigation = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} hidden={true} animated={true} />
      <StackNavigation.Navigator screenOptions={{ headerShown: false }}>
        <StackNavigation.Screen name="SplashScreen" component={Splash} />
        <StackNavigation.Screen name="LoginScreen" component={Login} />
        <StackNavigation.Screen
          name="HomeScreen"
          component={BottomTabNavigator}
        />


        <StackNavigation.Screen name="CadastroScreen" component={Cadastro} />
      </StackNavigation.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
