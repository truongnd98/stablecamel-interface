import React, { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import WarningIcon from "@mui/icons-material/Warning";

import { Typography, SxProps, Link, Chip, Menu } from "@mui/material";
import PieChartIcon from "@mui/icons-material/PieChart";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import PercentIcon from "@mui/icons-material/Percent";
import SupportIcon from "@mui/icons-material/Support";
import SwapHorizontalCircleIcon from "@mui/icons-material/SwapHorizontalCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import InfoIcon from "@mui/icons-material/Info";
import Networks from "../../jsons/networks.json";
import { v4 } from "uuid";
import BugReportIcon from "@mui/icons-material/BugReport";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import FeedIcon from "@mui/icons-material/Feed";
import { SoonChip } from "../SoonChip/SoonChip";
import TrendingUpSharpIcon from "@mui/icons-material/TrendingUpSharp";
import { MenuExtend, Network, Page } from "./types";
import Protocols from "../../jsons/protocols.json";
import MoneyPrinter from "../../jsons/money-printers.json";
import { Protocol } from "../../App";

const button: SxProps = {
  padding: "2px 8px",
  display: "flex",
  gap: "8px",
  borderRadius: "8px",
  "&.active": {
    backgroundColor: "#8c00ef",
  },
};

const iconButton: SxProps = {
  minWidth: "fit-content",
};

const subList: SxProps = {
  padding: 0,
  display: "flex",
  flexDirection: "column",
  gap: "4px",
};

const subButton: SxProps = {
  padding: "2px 0 2px 40px",
  borderRadius: "8px",
  "&.active": {
    backgroundColor: "#8c00ef",
  },
};

const subButtonText: SxProps = {
  "&.active": {
    color: "#ffffff",
  },
};

const list: SxProps = {
  width: "100%",
  maxWidth: 360,
  position: "sticky",
  display: "flex",
  flexDirection: "column",
  gap: "4px",
};

const ListNav = () => {
  const { pathname } = useLocation();
  const { network } = useParams();
  const [extend, setExtend] = useState<MenuExtend | null>(
    pathname.includes(Page.CURVE_ECOSYSTEM)
      ? MenuExtend.CURVE_ECOSYSTEM
      : MenuExtend.ANALYTICS
  );
  const navigate = useNavigate();

  return (
    <List
      sx={list}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <Typography
          variant="body1"
          color="primary"
          sx={{ padding: "4px 8px", fontSize: 13 }}
        >
          <b>Stablecoin Dashboards</b>
        </Typography>
      }
    >
      <ListItemButton
        sx={button}
        onClick={() => {
          if (extend !== MenuExtend.ANALYTICS) setExtend(MenuExtend.ANALYTICS);
          else setExtend(null);
        }}
      >
        <ListItemIcon sx={iconButton}>
          <PieChartIcon />
        </ListItemIcon>
        <ListItemText primary={<b>Stablecoin TVL</b>} />
        {extend === MenuExtend.ANALYTICS ? (
          <ArrowDropUpIcon />
        ) : (
          <ArrowDropDownIcon />
        )}
      </ListItemButton>
      <Collapse
        in={extend === MenuExtend.ANALYTICS}
        timeout="auto"
        unmountOnExit
      >
        <List component="div" sx={subList}>
          <ListItemButton
            sx={subButton}
            key={v4()}
            className={!pathname.split("/")[1] ? "active" : ""}
            onClick={() => {
              navigate("/");
            }}
          >
            <ListItemText
              primary="All Chains"
              className={!pathname.split("/")[1] ? "active" : ""}
              sx={subButtonText}
            />
          </ListItemButton>
          {Networks.slice(1, 6).map((item: Network, index: number) => (
            <ListItemButton
              sx={subButton}
              key={v4()}
              className={pathname.includes(item.slug) ? "active" : ""}
              onClick={() => {
                if (item.slug === "polygon") navigate("#");
                else navigate(`${item.slug}`);
              }}
            >
              <ListItemText
                primary={
                  <>
                    {item.name}{" "}
                    {item.slug === "polygon" ? (
                      <SoonChip label="SOON" />
                    ) : (
                      <></>
                    )}
                  </>
                }
                className={pathname.includes(item.slug) ? "active" : ""}
                sx={subButtonText}
              />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
      <ListItemButton
        sx={button}
        // className={pathname.includes(Page.CURVE_ECOSYSTEM) ? 'active' : ''}
        onClick={() => {
          if (extend !== MenuExtend.CURVE_ECOSYSTEM)
            setExtend(MenuExtend.CURVE_ECOSYSTEM);
          else setExtend(null);
        }}
      >
        <ListItemIcon sx={iconButton}>
          <LocalFireDepartmentIcon
          // style={{
          //   color: pathname.includes(Page.CURVE_ECOSYSTEM) ? '#f5f5f5' : '',
          // }}
          />
        </ListItemIcon>
        <ListItemText
          primary={<b>Curve Ecosystem</b>}
          // style={{
          //   color: pathname.includes(Page.CURVE_ECOSYSTEM) ? '#f5f5f5' : '',
          // }}
        />
        {extend === MenuExtend.CURVE_ECOSYSTEM ? (
          <ArrowDropUpIcon />
        ) : (
          <ArrowDropDownIcon />
        )}
      </ListItemButton>
      <Collapse
        in={extend === MenuExtend.CURVE_ECOSYSTEM}
        timeout="auto"
        unmountOnExit
      >
        <List component="div" sx={subList}>
          {Protocols.map((protocol: Protocol) => (
            <ListItemButton
              sx={subButton}
              key={v4()}
              className={network === protocol.slug ? "active" : ""}
              onClick={() => {
                navigate(`${Page.CURVE_ECOSYSTEM}/${protocol.slug}`);
              }}
            >
              <ListItemText
                primary={protocol.name}
                className={network === protocol.slug ? "active" : ""}
                sx={subButtonText}
              />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
      <ListItemButton
        sx={button}
        // className={pathname.includes(Page.CURVE_ECOSYSTEM) ? 'active' : ''}
        onClick={() => {
          if (extend !== MenuExtend.MONEY_PRINTER)
            setExtend(MenuExtend.MONEY_PRINTER);
          else setExtend(null);
        }}
      >
        <ListItemIcon sx={iconButton}>
          <AttachMoneyIcon
          // style={{
          //   color: pathname.includes(Page.MONEY_PRINTER) ? "#f5f5f5" : "",
          // }}
          />
        </ListItemIcon>
        <ListItemText primary={<b>Money Printer</b>} />
        {extend === MenuExtend.MONEY_PRINTER ? (
          <ArrowDropUpIcon />
        ) : (
          <ArrowDropDownIcon />
        )}
      </ListItemButton>
      <Collapse
        in={extend === MenuExtend.MONEY_PRINTER}
        timeout="auto"
        unmountOnExit
      >
        <List component="div" sx={subList}>
          {MoneyPrinter.map((item: Protocol) => (
            <ListItemButton
              sx={subButton}
              key={v4()}
              className={network === item.slug ? "active" : ""}
              onClick={() => {
                if (
                  item.slug === "usdt" ||
                  item.slug === "frax-printer"
                  // || item.slug === "crvUSD"
                )
                  navigate("#");
                else navigate(`${Page.MONEY_PRINTER}/${item.slug}`);
              }}
            >
              <ListItemText
                primary={
                  <>
                    {item.name}{" "}
                    {item.slug === "usdt" || item.slug === "frax-printer" ? (
                      <SoonChip label="SOON" />
                    ) : (
                      <></>
                    )}
                  </>
                }
                // primary={item.name}
                className={network === item.slug ? "active" : ""}
                sx={subButtonText}
              />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
      <ListItemButton
        sx={button}
        className={pathname.includes(Page.YIELDS) ? "active" : ""}
        onClick={() => {
          navigate(Page.YIELDS);
        }}
      >
        <ListItemIcon sx={iconButton}>
          <PercentIcon
            style={{ color: pathname.includes(Page.YIELDS) ? "#f5f5f5" : "" }}
          />
        </ListItemIcon>
        <ListItemText
          primary={<b>Stablecoin Yields</b>}
          style={{ color: pathname.includes(Page.YIELDS) ? "#f5f5f5" : "" }}
        />
      </ListItemButton>
      <ListItemButton
        sx={button}
        className={pathname.includes(Page.GRAVEYARD) ? "active" : ""}
        onClick={() => {
          navigate(Page.GRAVEYARD);
        }}
      >
        <ListItemIcon sx={iconButton}>
          <SupportIcon
            style={{
              color: pathname.includes(Page.GRAVEYARD) ? "#f5f5f5" : "",
            }}
          />
        </ListItemIcon>
        <ListItemText
          primary={<b>Stablecoin Graveyard</b>}
          style={{ color: pathname.includes(Page.GRAVEYARD) ? "#f5f5f5" : "" }}
        />
      </ListItemButton>
      <ListItemButton
        sx={button}
        className={pathname.includes(Page.ACTIVITY_MONITOR) ? "active" : ""}
        onClick={() => {
          navigate(Page.ACTIVITY_MONITOR);
        }}
      >
        <ListItemIcon sx={iconButton}>
          <TrendingUpSharpIcon
            style={{
              color: pathname.includes(Page.ACTIVITY_MONITOR) ? "#f5f5f5" : "",
            }}
          />
        </ListItemIcon>
        <ListItemText
          primary={<b>Stablecoin Activity Monitor</b>}
          style={{
            color: pathname.includes(Page.ACTIVITY_MONITOR) ? "#f5f5f5" : "",
          }}
        />
      </ListItemButton>
      {/* <Link href="/trade-stablecoins" sx={{ textDecoration: "none" }}>
        <ListItemButton
          sx={button}
          className={pathname.includes(Page.TRADING) ? "active" : ""}
          // onClick={() => {
          //   navigate(Page.TRADING);
          // }}
        >
          <ListItemIcon sx={iconButton}>
            <SwapHorizontalCircleIcon
              style={{
                color: pathname.includes(Page.TRADING) ? "#f5f5f5" : "",
              }}
            />
          </ListItemIcon>
          <ListItemText
            primary={<b>Stablecoin On/Off-Ramp</b>}
            style={{
              color: pathname.includes(Page.TRADING) ? "#f5f5f5" : "",
            }}
          />
        </ListItemButton>
      </Link> */}

      <Link
        target="_blank"
        href="https://cryptoslate.com/"
        sx={{ textDecoration: "none" }}
      >
        <ListItemButton
          sx={button}
          className={pathname.includes(Page.NEWS) ? "active" : ""}
        >
          <ListItemIcon sx={iconButton}>
            <FeedIcon />
          </ListItemIcon>
          <ListItemText primary={<b>Crypto News</b>} />
        </ListItemButton>
      </Link>

      <Link
        target="_blank"
        href="https://docs.google.com/forms/d/e/1FAIpQLScmGMeGseagnh4h1nCRwvWp8v3bl74acvS-y4uH04JxdZpngA/viewform"
        sx={{ textDecoration: "none" }}
      >
        <ListItemButton
          sx={button}
          className={pathname.includes(Page.BUG) ? "active" : ""}
          // onClick={() => {
          //   navigate('#');
          // }}
        >
          <ListItemIcon sx={iconButton}>
            <BugReportIcon />
          </ListItemIcon>
          <ListItemText primary={<b>Report Bug / Feedback</b>} />
        </ListItemButton>
      </Link>

      <ListItemButton
        sx={button}
        className={pathname.includes(Page.ABOUT) ? "active" : ""}
        onClick={() => {
          navigate("/about");
        }}
      >
        <ListItemIcon sx={iconButton}>
          <InfoIcon
            style={{ color: pathname.includes(Page.ABOUT) ? "#f5f5f5" : "" }}
          />
        </ListItemIcon>
        <ListItemText
          primary={<b>About</b>}
          style={{ color: pathname.includes(Page.ABOUT) ? "#f5f5f5" : "" }}
        />
      </ListItemButton>

      <ListItemButton
        sx={button}
        className={pathname.includes(Page.DISCLAIMER) ? "active" : ""}
        onClick={() => {
          navigate("/disclaimer");
        }}
      >
        <ListItemIcon sx={iconButton}>
          <WarningIcon
            style={{
              color: pathname.includes(Page.DISCLAIMER) ? "#f5f5f5" : "",
            }}
          />
        </ListItemIcon>
        <ListItemText
          primary={<b>Risk Disclaimer</b>}
          style={{ color: pathname.includes(Page.DISCLAIMER) ? "#f5f5f5" : "" }}
        />
      </ListItemButton>
    </List>
  );
};

export default ListNav;
