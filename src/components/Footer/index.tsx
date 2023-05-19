import { Box, SxProps, Typography, Link } from "@mui/material";

const footer: SxProps = {
  color: "#293845",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "12px 28px",
  borderTop: "1px solid #8c00ef",
  marginTop: "28px",
};

const text: SxProps = {
  // opacity: 0.6
  fontWeight: "500",
};

const wrap: SxProps = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
};

const link: SxProps = {
  textDecoration: "none",
  color: "#293845",
  ":hover": {
    color: "#8c00ef",
  },
};

const item: SxProps = {
  fontWeight: 500,
};

const lined = {
  minHeight: "20px",
  maxHeight: "20px",
  // width: "2px",
  borderRight: "2px solid #dcdcdc",
  transform: "translateY(-1px)",
};

export default function Footer() {
  return (
    <Box sx={footer}>
      <Typography variant="body1" sx={text}>
        © 2023 Stably Corporation
      </Typography>
      <Box sx={wrap}>
        <Link
          // target='_blank'
          href="/disclaimer"
          sx={link}
        >
          <Typography variant="body1" sx={item}>
            Disclaimer
          </Typography>
        </Link>
        <Box sx={lined} />
        <Link
          target="_blank"
          href="https://stably.io/privacy-policy/"
          sx={link}
        >
          <Typography variant="body1" sx={item}>
            Privacy Policy
          </Typography>
        </Link>
        <Box sx={lined} />
        <Link
          target="_blank"
          href="https://stably.io/terms-of-service/"
          sx={link}
        >
          <Typography variant="body1" sx={item}>
            Terms of Service
          </Typography>
        </Link>
      </Box>
    </Box>
  );
}
