import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'PIGGY',
    lpAddresses: {
      97: '',
        56: '0x9179C337bd93555E17264Bd12943f54A4585026C',
    },
    tokenSymbol: 'OINK',
    tokenAddresses: {
      97: '',
        56: '0x9179C337bd93555E17264Bd12943f54A4585026C',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'PIGGY-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xbe168137C39e9A81C14a26E58464dEA2A085a142',
    },
    tokenSymbol: 'PIGGY',
    tokenAddresses: {
      97: '',
        56: '0x9179C337bd93555E17264Bd12943f54A4585026C',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '0x2f7682b64b88149ba3250aee32db712964de5fa9',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  
  
  
  
 
  
  
]

export default farms
