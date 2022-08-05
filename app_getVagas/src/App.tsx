import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import Routes from './routes';

import { AutenticacaoProvider } from './context/AutenticacaoContext';
import { LoadingProvider } from './context/LoadingContext';






export default () => {

  return (



    <AutenticacaoProvider>
      <LoadingProvider>

        <Routes />

      </LoadingProvider>
    </AutenticacaoProvider>


  );
};
