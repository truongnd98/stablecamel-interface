import { Box, SxProps, Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { v4 } from "uuid";
import { Network } from "../../App";
import Tooltip from "./AnalyticPageTitleTooltip";
import { useNavigate } from "react-router-dom";
import { useNetworkContext } from "./AnalyticPage";
import Networks from "../../jsons/networks.json";

const pageTitle: SxProps = {
  width: "100%",
  height: 32,
  display: "flex",
  alignItems: "center",
  gap: "20px",
};

const chipLabel: SxProps = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  img: {
    width: 20,
    height: 20,
  },
};

const menu: SxProps = {
  borderRadius: "8px",
};

const menuItem: SxProps = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  img: {
    width: 20,
    height: 20,
  },
};

const wrap: SxProps = {
  height: "100%",
  display: "flex",
  alignItems: "center",
  gap: "12px",
};

const handleBgColor = (
  chainId?: string
): { bgColor: string; textColor: string } => {
  switch (chainId) {
    case "0":
      return {
        bgColor: "#dfdefc",
        textColor: "#293845",
      };
    case "1":
      return {
        bgColor: "#627eea",
        textColor: "#ffffff",
      };
    case "56":
      return {
        bgColor: "#f1b90a",
        textColor: "#ffffff",
      };
    case "137":
      return {
        bgColor: "#8f32d3",
        textColor: "#ffffff",
      };
    case "42161":
      return {
        bgColor: "#2d374b",
        textColor: "#ffffff",
      };
    case "43114":
      return {
        bgColor: "#e84142",
        textColor: "#ffffff",
      };
    default:
      return {
        bgColor: "transparent",
        textColor: "#ffffff",
      };
  }
};

const Title = () => {
  const currentNetwork = useNetworkContext();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickItem = (network: Network) => {
    navigate(`../${network.slug}`);
    setAnchorEl(null);
  };

  return (
    <Box sx={pageTitle}>
      <Box sx={wrap}>
        <Typography variant="h5" color="primary">
          Stablecoin Total Value Locked (TVL)
        </Typography>

        <Tooltip />
      </Box>

      <Chip
        id="network"
        aria-controls={open ? "network-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        clickable
        label={
          <Box sx={chipLabel}>
            <img
              src={currentNetwork.logo}
              alt={`Stable-Camel-Stablecoin-TVL-${currentNetwork?.name?.replaceAll(
                " ",
                "-"
              )}-icon`}
            />
            <b>{currentNetwork.name}</b>
            <KeyboardArrowDownIcon />
          </Box>
        }
        sx={{
          backgroundColor: handleBgColor(currentNetwork.chainId).bgColor,
          color: handleBgColor(currentNetwork.chainId).textColor,
          borderRadius: "8px",
          ":hover": {
            backgroundColor: handleBgColor(currentNetwork.chainId).bgColor,
            opacity: 0.8,
          },
        }}
      />
      <Menu
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl}
        id="network-menu"
        MenuListProps={{
          "aria-labelledby": "network",
        }}
        sx={menu}
      >
        {Networks.slice(0, 6).map((network: Network, index: number) => (
          <MenuItem
            key={v4()}
            sx={menuItem}
            onClick={() => {
              handleClickItem(network);
            }}
            disabled={network.chainId === "137"}
          >
            <img
              src={network.logo}
              alt={`Stable-Camel-Stablecoin-TVL-${network?.name?.replaceAll(
                " ",
                "-"
              )}-icon`}
            />
            {network.name}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default Title;
