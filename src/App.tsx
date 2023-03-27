import React from 'react';
import routes from '@/routes/index';
import { useRoutes } from 'react-router-dom';
import Web3Provider from '@/components/Web3Provider';
import { Provider } from 'react-redux';
import store from '@/state';
import { WalletProvider } from '@/contexts/wallet-context';

const App = () => {
  const element = useRoutes(routes);
  return (
    <Provider store={store}>
      <Web3Provider>
        <WalletProvider>{element}</WalletProvider>
      </Web3Provider>
    </Provider>
  );
};

export default App;
