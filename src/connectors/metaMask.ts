import { initializeConnector } from '@web3-react/core';
import { MetaMask } from '@web3-react/metamask';
import { Connection, ConnectionType } from '@/connection/types';

export const [metaMask, hooks] = initializeConnector<MetaMask>(actions => new MetaMask({ actions }));

export const MetamaskConnection: Omit<Connection, 'icon'> = {
  name: 'MetaMask',
  connector: metaMask,
  hooks: hooks,
  type: ConnectionType.METAMASK,
  shouldDisplay: true,
  overrideActivate: () => window.open('https://metamask.io/', 'inst_metamask'),
};
