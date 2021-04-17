import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'PiggyToken',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x9179C337bd93555E17264Bd12943f54A4585026C',  
    contractAddress: {
      97: '',
      56: '0xa541F7122496B45f600970c1b8111fAc948FDDa4',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'http://pancakeswap.finance/',
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    sousId: 37,
    tokenName: 'FRONT',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0xf7a31366732F08E8e6B88519dC3E827e04616Fc9',   
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://frontier.xyz/',
    harvest: true,
    tokenPerBlock: '0.2546',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
  },
  
]

export default pools
