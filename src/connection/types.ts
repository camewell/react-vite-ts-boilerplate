import { Connector } from '@web3-react/types';
import { Web3ReactHooks } from '@web3-react/core';

export enum ConnectionType {
  METAMASK = 'METAMASK',
}

export interface Connection {
  name: string;
  connector: Connector;
  hooks: Web3ReactHooks;
  type: ConnectionType;
  icon?: string;
  shouldDisplay?: boolean;
  overrideActivate?: () => void;
}
