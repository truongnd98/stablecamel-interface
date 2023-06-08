import { Box } from "@mui/material";
import { useCurveEcosystemState } from "../../../stores/curve-ecosystem/hooks";
import { ComposeChart } from "../../../components/ComposeChart/ComposeChart";

const cleverBorrowingAndSupplyDetail = {
  area: [{ key: "clevCVX_supply", name: "clevCVX Supply", color: "#b4e2cd" }], //7c7c7c
  line: [
    {
      key: "Net_borrowings_counter",
      name: "Net Borrowings",
      color: "#272727",
      right: true,
    },
    { key: "clevCVX_upper_limit", name: "clevCVX Limit", color: "#127475" },
  ],
};

const cleverLockedAndSupplyDetail = {
  area: [{ key: "clevCVX_supply", name: "clevCVX Supply", color: "#b4e2cd" }],
  line: [
    { key: "CVX_locked", name: "CVX Locked", color: "#272727" },
    { key: "clevCVX_upper_limit", name: "clevCVX Limit", color: "#127475" },
  ],
};

export function CleverContentCharts() {
  const { clever } = useCurveEcosystemState();

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: 380,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          id="overall-borrowing-vs-clevcvx-supply-wrap"
          sx={{ width: "calc(50% - 14px)", height: "100%" }}
        >
          <ComposeChart
            data={clever.locked_cvx_and_flow}
            title="Overall Borrowing vs clevCVX Supply"
            details={cleverBorrowingAndSupplyDetail}
            yAxisKey={{
              left: "clevCVX_upper_limit",
              right: "Net_borrowings_counter",
            }}
            id="overall-borrowing-vs-clevcvx-supply"
          />
        </Box>
        <Box
          id="cvx-locked-vs-clevcvx-supply-wrap"
          sx={{ width: "calc(50% - 14px)", height: "100%" }}
        >
          <ComposeChart
            data={clever.locked_cvx_and_flow}
            title="CVX Locked vs clevCVX supply"
            details={cleverLockedAndSupplyDetail}
            yAxisKey={{
              left: "CVX_locked",
              // right: 'expired_unlock_usd',
            }}
            id="cvx-locked-vs-clevcvx-supply"
          />
        </Box>
      </Box>
    </>
  );
}
