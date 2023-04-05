import React from 'react';

export interface ExchangeBalanceRes {
  day: Date;
  balance: number;
}

export interface DeployedRes {
  time: Date;
  value: number;
}

export interface SupplyUSDCRes {
  day: Date;
  supply: number;
  seven_d_chng: number;
  thirty_d_chng: number;
}

export interface DataMainChart {
  supply: number;
  exchangeBalance: number;
  lender: number;
  LPs: number;
  bridge: number;
}

export interface MainChartProps {
  data: DataMainChart[];
}

export interface GroupDataGridProps {
  id: React.Key;
  exchange: string;
  balance: number;
  change_7d: number;
  change_7d_rate: number;
}

export interface MoneyPrinterMetricProps {
  title: string;
  value: string;
}
