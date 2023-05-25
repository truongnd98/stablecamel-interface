import { Box, SxProps, Typography } from "@mui/material";

const main: SxProps = {
  // position: 'absolute',
  // bottom: 0,
  // margin: '0 10%',
  // marginBottom: '20px',
  // textAlign: 'center',
  backgroundColor: "#ffffff",
  padding: "20px",
  m: "0 28px",
  borderRadius: "8px",
};
const text = {
  color: "#293845",
};

export function TradeStablecoinsDisclaimer() {
  return (
    <Box sx={main}>
      <Typography variant="body1" color="secondary" sx={text}>
        <b>RISK DISCLAIMER: </b>
        Nothing contained herein shall be considered financial advice or
        recommendation to buy or sell any security, commodity, cryptocurrency,
        digital asset, or any other financial instrument or asset.
        Cryptocurrencies, digital assets, and investing have many risks,
        including risk of losses beyond principal investment or purchase amount.
        Past performance is not indicative of future results. You should be
        aware of all the risks associated with cryptocurrency and digital asset
        investing, purchasing, and transacting and seek advice from an
        independent licensed financial advisor.
      </Typography>
    </Box>
  );
}
