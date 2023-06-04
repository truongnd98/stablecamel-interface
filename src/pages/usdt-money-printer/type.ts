export type USDTSupply = {
  day: string;
  supply: number;
  seven_d_chng: number;
  thirty_d_chng: number;
}

export type UsdtDeployedToLPsAndLendingPools = {
  day: string;
  value: number;
}

export type ExchangeBalancesOfUSDT = {
  day: string;
  balance: number;
}


export type ExchangeBalancesOfUSDTByCEX = {
  time: string;
  [cexName: string]: number| string;
}


export type TotalUSDTDeployedToLenders = {
  time: string;
  value: number;
}

export type USDTDeployedToLendersByProtocol = {
  time: string;
  [protocol: string]: number| string;
}

export type TotalUSDTDeployedToDEXs = {
  time: string;
  value: number;
}

export type USDTDeployedToLPsByProtocol = {
  time: string;
  [protocol: string]: number| string;
}

export type USDTDeployedToBridgesTotal = {
  time: string;
  value: number;
}

export type usdtDeployedToBridgesByBridge = {
  time: string;
  [protocol: string]: number| string;
}


