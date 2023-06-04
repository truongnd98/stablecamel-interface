import { Box, SxProps } from "@mui/material";
import randomColor from "randomcolor";
import { Metric } from "../../components/Metric/Metric";
import { CustomLineChart } from "../../components/LineChart/LineChart";
import { useUSDTMoneyPrinterState } from "../../stores/usdt-moneyprinter/hooks";

const main: SxProps = {
  width: "100%",
  height: 380,
  display: "flex",
  justifyContent: "space-between",
  gap: "28px",
  padding: "28px 0px 0px 0px",
};

export function LiquidityAggregation2Page() {
  const { usdtDeployedToLPsAndLendingPools } = useUSDTMoneyPrinterState();

  const currentUsdtDeployedToLPsAndLendingPools = usdtDeployedToLPsAndLendingPools[usdtDeployedToLPsAndLendingPools.length - 1]?.value;

  return (
    <Box sx={main}>
      <Box sx={{ width: "calc(40% - 14px)", height: "100%" }}>
          <Metric 
						title='USDT Deployed to LPs and Lending Pools'
						value={new Intl.NumberFormat('en-US', {
              style: 'currency',
							currency: 'USD',
							notation: 'standard',
							maximumFractionDigits: 0,
						}).format(currentUsdtDeployedToLPsAndLendingPools ?? 0)}
					/>
      </Box>
      <Box sx={{ width: "calc(60% - 14px)", height: "100%" }}>
        <CustomLineChart
          data={usdtDeployedToLPsAndLendingPools}
          title="USDT Deployed to LPs and Lending Pools"
          details={[
            {
              key: "value",
              color: randomColor({ seed: "usdt" }),
              name: "USDT",
            },
          ]}
          id="usdt-deployed-to-lps-and-lending-pools"
          legend
        />
      </Box>
    </Box>
  );
}
