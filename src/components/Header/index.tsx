import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const fixed = {
  width: "100%",
  zIndex: "1000",
  flexGrow: 1,
};

const header = {
  backgroundColor: "#f5f5f5",
  //   borderLeft: "1px solid #e2c7ff",
  boxShadow: "none",
  color: "#293845",
  fontWeight: "400",
  overflow: "hidden",
  alignItems: "flex-end",
  justifyContent: "flex-between",
  width: "100%",
  borderBottom: "1.2px solid #8c00ef",
};

const buttons = {
  color: "#293845",
  textTransform: "none",
  // backgroundColor: "#8c00ef",
  minWidth: "max-content",
  borderRadius: "8px",
  p: "4px",
  fontWeight: 600,
  fontSize: "14px",
  boxShadow: "none",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  ".MuiTouchRipple-root": {
    backgroundColor: "rgba(0, 0, 0, 0.04) !important",
  },
  ":hover": {
    color: "#8c00ef",
  },
  a: {
    textDecoration: "none",
    color: "inherit",
  },
};

const lined = {
  minHeight: "20px",
  maxHeight: "20px",
  // width: "2px",
  borderRight: "2px solid #dcdcdc",
  transform: "translateY(4px)",
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

const link = {
  fontSize: { md: "13px", lg: "14px" },
  fontWeight: 600,
  ...animation,
  animation: { md: "slide-left 12s linear infinite", lg: "none" },
  overflow: "visible",
  textOverflow: "unset",
  a: {
    color: "#293845",
    ":active": {
      color: "#293845",
    },
    ":hover": {
      color: "#8c00ef",
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
            pr: "28px",
            minHeight: { sm: "48px" },
          }}
        >
          <Box sx={{ overflow: "hidden", width: "100%" }}>
            <Typography noWrap component="div" sx={link}>
              The cheapest & fastest place to off-ramp stablecoins in Web3 ⚡ -{" "}
              <Link to="/buy-stablecoins">Try Now</Link>
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: "flex", gap: "8px" }}>
            <Box sx={buttons}>
              <Link to="/buy-stablecoins">Buy Stablecoins</Link>
            </Box>
            <Box sx={lined} />
            <Box sx={buttons}>
              <Link to="/sell-stablecoins">Off-Ramps</Link>
            </Box>
            <Box sx={lined} />
            <Box sx={buttons}>
              <Link
                to="https://discord.com/channels/978765464186540093/1022531141535813783"
                target="_blank"
              >
                Join Community
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
