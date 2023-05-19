export enum Page {
  ANALYTICS = 'analytics',
  MONEY_PRINTER = 'money-printer',
  CURVE_ECOSYSTEM = 'curve-ecosystem',
  YIELDS = 'stablecoin-yields',
  GRAVEYARD = 'stablecoin-graveyard',
  TRADING = 'trading',
  NEWS = 'news',
  BUG = 'bug',
  ABOUT = 'about',
  DISCLAIMER = 'disclaimer',
  ACTIVITY_MONITOR = 'activity-monitor',
  CURVE_CRVUSD = 'curve-crvusd',
}

export interface Network {
  chainId: string;
  name: string;
  slug: string;
  logo: string;
}

export enum MenuExtend {
  ANALYTICS = 'analytics',
  CURVE_ECOSYSTEM = 'curve_ecosystem',
  MONEY_PRINTER = 'money-printer',
}
