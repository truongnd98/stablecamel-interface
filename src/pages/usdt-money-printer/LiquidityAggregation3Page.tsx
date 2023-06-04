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
      color: "#58bc36",
    },
    {
      key: "other",
      color: "#fcb3bb",
    },
    {
      key: "Bittrex",
      color: "#4360d3",
    },
    {
      key: "Huobi",
      color: "#b8f48d",
    },
    {
      key: "Crypto.com",
      color: "#4df23e",
    },
    {
      key: "Poloniex",
      color: "#cc1253",
    },
    {
      key: "Gate.io",
      color: "#ce504c",
    },
    {
      key: "Binance",
      color: "#2341ea",
    },
    {
      key: "BitMEX",
      color: "#e59099",
    },
    {
      key: "OKX",
      color: "#bc01a0",
    },
    {
      key: "KuCoin",
      color: "#38cff4",
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
              color: "#3465A4",
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
