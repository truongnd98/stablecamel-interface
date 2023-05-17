import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const fixed = {
  width: "100%",
  zIndex: "1000",
  flexGrow: 1,
};

const header = {
  backgroundColor: "#dfdefc",
  //   borderLeft: "1px solid #e2c7ff",
  boxShadow: "none",
  color: "#293845",
  fontWeight: "400",
  overflow: "hidden",
  alignItems: "flex-end",
  justifyContent: "flex-between",
  width: "100%",
};

const buttons = {
  color: "#fff",
  textTransform: "none",
  backgroundColor: "rgb(140 0 239)",
  minWidth: "max-content",
  borderRadius: "8px",
  p: "4px 16px",
  fontWeight: 400,
  fontSize: "14px",
  boxShadow: "none",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  ".MuiTouchRipple-root": {
    backgroundColor: "rgba(0, 0, 0, 0.04) !important",
  },
  ":hover": {
    backgroundColor: "rgb(140 0 239)",
    boxShadow: "none",
  },
  a: {
    textDecoration: "none",
    color: "inherit",
  },
};

const animation = {
  "@keyframes slide-left": {
    md: {
      from: {
        "-webkit-transform": "translateX(50%)",
        transform: "translateX(50%)",
      },
      to: {
        "-webkit-transform": "translateX(-180%)",
        transform: "translateX(-180%)",
      },
    },
  },
};

export default function Header() {
  return (
    <Box sx={fixed}>
      <AppBar position="static" sx={header}>
        <Toolbar
          sx={{
            width: "100%",
            justifyContent: "flex-end",
            pl: { md: "0", lg: "28px" },
            minHeight: { sm: "48px" },
          }}
        >
          <Box sx={{ overflow: "hidden", width: "100%" }}>
            <Typography
              noWrap
              component="div"
              sx={{
                //   display: { xs: "none", sm: "block" },
                fontSize: { md: "13px", lg: "14px" },
                fontWeight: 600,
                ...animation,
                animation: { md: "slide-left 12s linear infinite", lg: "none" },
                overflow: "visible",
                textOverflow: "unset",
              }}
            >
              The cheapest & fastest place to off-ramp stablecoins in Web3 ⚡ -{" "}
              <Link to="https://ramp.stably.io/?integrationId=stablecamel-5c58e755">
                Try Now
              </Link>
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: "flex", gap: "8px" }}>
            <Box>
              <Button
                variant="contained"
                href="#contained-buttons"
                disableTouchRipple
                sx={buttons}
              >
                <Link
                  to="https://ramp.stably.io/?integrationId=stablecamel-5c58e755"
                  target="_blank"
                >
                  Buy Stablecoins
                </Link>
              </Button>
            </Box>
            <Box>
              <Button
                variant="contained"
                href="#contained-buttons"
                sx={buttons}
                disableTouchRipple
              >
                <Link
                  to="https://ramp.stably.io/?integrationId=stablecamel-5c58e755"
                  target="_blank"
                >
                  Off-Ramps
                </Link>
              </Button>
            </Box>
            <Box>
              <Button
                variant="contained"
                href="#contained-buttons"
                color="secondary"
                disableTouchRipple
                sx={buttons}
              >
                <Link
                  to="https://discord.com/channels/978765464186540093/1022531141535813783"
                  target="_blank"
                >
                  Join Community
                </Link>
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
