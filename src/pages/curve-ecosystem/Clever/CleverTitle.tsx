import { Box, Chip, Menu, MenuItem, SxProps, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { v4 } from "uuid";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Protocol } from "../../../App";
import { Page } from "../../../components/MainSideBar/types";
import Protocols from "../../../jsons/protocols.json";
import { CleverTitleTooltip } from "./CleverTitleTooltip";

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

export function CleverTitle() {
  const { network } = useParams();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickItem = (network: string) => {
    navigate(`/${Page.CURVE_ECOSYSTEM}/${network}`);
    setAnchorEl(null);
  };

  const getProtocol = (slug?: string) => {
    if (!slug) navigate("/");
    return Protocols.find((protocol: Protocol) => protocol.slug === slug);
  };
  return (
    <Box sx={pageTitle}>
      <Box sx={wrap}>
        <Typography variant="h5" color="primary">
          Curve Ecosystem
        </Typography>

        <CleverTitleTooltip />
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
            <img src={getProtocol(network)?.logo} alt="protocol-logo" />
            <b>{getProtocol(network)?.name}</b>
            <KeyboardArrowDownIcon />
          </Box>
        }
        sx={{
          backgroundColor: "#EDEDED",
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
        {Protocols.map((protocol: Protocol) => (
          <MenuItem
            key={v4()}
            sx={menuItem}
            onClick={() => {
              handleClickItem(protocol.name.toLowerCase().replace(" ", "-"));
            }}
          >
            <img src={protocol.logo} alt={`${protocol.name}-logo`} />
            {protocol.name}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
