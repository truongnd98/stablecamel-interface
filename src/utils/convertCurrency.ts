export const convertCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US').format(Number(value.toFixed(0)));
};

export const convertCurrencyUSD = (value: number) => {
  const isBillion: boolean = value > 1e9 ? true : false;
  return `${(isBillion ? value / 1e9 : value / 1e6).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })}${isBillion ? 'B' : 'M'}`;
};
