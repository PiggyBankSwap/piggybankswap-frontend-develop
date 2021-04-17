import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange Your $PIGGY',
        href: 'https://exchange.pancakeswap.finance/#/swap?inputCurrency=0x9179c337bd93555e17264bd12943f54a4585026c',
      },
      {
        label: 'ADD $PIGGY/BNB Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/add/BNB/0x9179c337bd93555e17264bd12943f54a4585026c',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'TEAM',
        href: 'https://pancakeswap.info',
      },
      {
        label: 'Tokens',
        href: 'https://pancakeswap.info/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://pancakeswap.info/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://pancakeswap.info/accounts',
      },
    ],
  },
  {
    label: 'BUY $PIGGY',
    icon: 'IfoIcon',
    href: 'https://app.bounce.finance/fixed-swap/5698',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/PiggyBankSwap',
      },
      {
        label: 'Docs',
        href: 'https://theoinkcoin.medium.com/the-contracts-b38142fe3b0f',
      },
      {
        label: 'Blog',
        href: 'https://theoinkcoin.medium.com/',
      },
    ],
  },
]

export default config
