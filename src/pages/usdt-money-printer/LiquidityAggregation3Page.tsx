import { Box, SxProps } from "@mui/material";
import CustomAreaChart from "../../components/AreaChart";
import { CustomLineChart } from "../../components/LineChart/LineChart";
import { useUSDTMoneyPrinterState } from "../../stores/usdt-moneyprinter/hooks";
import { ChartDetailProps } from "../money-printer/MoneyPrinterGroup/MoneyPrinterGroupAreaChart";

const main: SxProps = {
  width: "100%",
  height: 380,
  display: "flex",
  justifyContent: "space-between",
  gap: "28px",
  padding: "28px 0px 0px 0px",
};

export function LiquidityAggregation3Page() {
  const { exchangeBalancesOfUSDT, exchangeBalancesOfUSDTByCEX } =
    useUSDTMoneyPrinterState();

  const exchangeBalancesOfUSDTByCEXDetails: ChartDetailProps[] = [
    {
      key: "Kraken",
      color: "#5d45dc",
    },
    {
      key: "other",
      color: "#fcb3bb",
    },
    {
      key: "Bittrex",
      color: "#1c6fe8",
    },
    {
      key: "Huobi",
      color: "#008cd6",
    },
    {
      key: "Crypto.com",
      color: "#002d74",
    },
    {
      key: "Poloniex",
      color: "#1a8f5c",
    },
    {
      key: "Gate.io",
      color: "#14e0a1",
    },
    {
      key: "Binance",
      color: "#f0b90b",
    },
    {
      key: "BitMEX",
      color: "#ff0201",
    },
    {
      key: "OKX",
      color: "#121212",
    },
    {
      key: "KuCoin",
      color: "#23af91",
    },
  ];

  // for (const key in exchangeBalancesOfUSDTByCEX?.[exchangeBalancesOfUSDTByCEX.length - 1]) {
  //  if (key!=='time') {
  //   exchangeBalancesOfUSDTByCEXDetails.push({
  //     key: key,
  //     color: randomColor({
  //       seed: key
  //     })
  //   })
  //  }
  // }

  return (
    <Box sx={main}>
      <Box
        id="exchange-balances-of-usdt-chart-wrap"
        sx={{ width: "calc(50% - 14px)", height: "100%" }}
      >
        <CustomLineChart
          data={exchangeBalancesOfUSDT}
          title="Exchange Balances of USDT"
          details={[
            {
              key: "balance",
              color: "#52b095",
              name: "USDT on CEXs",
            },
          ]}
          id="exchange-balances-of-usdt-chart"
          legend
        />
      </Box>
      <Box
        id="exchange-balances-of-usdt-chart-by-cex-wrap"
        sx={{ width: "calc(50% - 14px)", height: "100%" }}
      >
        <CustomAreaChart
          data={exchangeBalancesOfUSDTByCEX}
          title="Exchange Balances of USDT"
          detail={exchangeBalancesOfUSDTByCEXDetails}
          id="exchange-balances-of-usdt-chart-by-cex"
          legend
        />
      </Box>
    </Box>
  );
}
