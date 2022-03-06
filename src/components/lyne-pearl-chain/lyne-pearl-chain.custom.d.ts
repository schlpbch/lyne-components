export interface InterfacePearlChainAttributes {
  appearance: 'arrival' | 'departure' | 'departure-and-arrival' | 'inter-segment' | 'level-1';
  orientation: 'horizontal' | 'vertical';
  status: 'future' | 'past' | number;
}
