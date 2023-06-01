import { Box, SxProps, Paper, Typography } from "@mui/material";
import { useMoneyPrinterState } from "../../../stores/moneyprinter/hooks";
import { MoneyPrinterSingleMetric } from "./MoneyPrinterSingleMetric";

const main: SxProps = {
  width: "100%",
  height: 120,
  display: "flex",
  justifyContent: "space-between",
};

const wrap: SxProps = {
  width: "calc(50% - 14px)",
  height: "100%",
  display: "flex",
  gap: "20px",
};

const formatNumber = (value: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: "compact",
    maximumFractionDigits: 2,
  }).format(value);
};

export function MoneyPrinterMetrics() {
  const {
    exchangeBalanceList,
    deployedLenderList,
    deployedLpsList,
    deployedBridgeList,
  } = useMoneyPrinterState();
  const dataExchange = formatNumber(
    exchangeBalanceList[0] ? exchangeBalanceList[0].balance : 0
  );
  const dataLPs = formatNumber(
    deployedLpsList[0] ? deployedLpsList[0].value : 0
  );
  const dataLenders = formatNumber(
    deployedLenderList[0] ? deployedLenderList[0].value : 0
  );
  const dataBridges = formatNumber(
    deployedBridgeList[0] ? deployedBridgeList[0].value : 0
  );
  return (
    <Box sx={main}>
      <Box sx={wrap}>
        <MoneyPrinterSingleMetric
          value={dataExchange}
          title="USDC Exchange Balances"
        />
        <MoneyPrinterSingleMetric
          value={dataLPs}
          title="USDC Deployed to DEXs"
        />
      </Box>
      <Box sx={wrap}>
        <MoneyPrinterSingleMetric
          value={dataLenders}
          title="USDC Deployed to Lenders"
        />
        <MoneyPrinterSingleMetric
          value={dataBridges}
          title="USDC Deployed to Bridges"
        />
      </Box>
    </Box>
  );
}
