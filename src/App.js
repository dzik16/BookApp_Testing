/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Persistore, Store } from './config/api';
import Root from './config/router/index';
import Internet from './components/internet';

function App() {
  const [netStatus, setNetStatus] = useState(true);

  const connection = NetInfo.fetch().then(state => state.isConnected);

  useEffect(() => {
    connection.then(res => {
      setNetStatus(res);
    });
  }, [connection]);

  return (
    <Provider store={Store}>
      <PersistGate persistor={Persistore}>
        {netStatus ? <Root /> : <Internet />}
      </PersistGate>
    </Provider>
  );
}

export default App;
