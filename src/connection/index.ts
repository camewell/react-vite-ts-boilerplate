import { Connector } from '@web3-react/types';
import { useCallback } from 'react';
import { MetamaskConnection } from '@/connectors/metaMask';
import { ConnectionType } from '@/connection/types';

export function getConnections() {
  return [MetamaskConnection];
}

export function getConnection(c: Connector | ConnectionType) {
  return getConnections().find(connection => connection.connector === c);
}

export function useConnections() {
  return getConnections();
}

export function useGetConnection() {
  return useCallback((c: Connector | ConnectionType) => {
    if (c instanceof Connector) {
      const connection = getConnections().find(connection => connection.connector === c);
      if (!connection) {
        throw Error('unsupported connector');
      }
      return connection;
    } else {
      switch (c) {
        case ConnectionType.METAMASK:
          return MetamaskConnection;
      }
    }
  }, []);
}
