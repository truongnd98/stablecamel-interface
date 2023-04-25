import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import WarningIcon from '@mui/icons-material/Warning';

import { Typography, SxProps, Link, Chip } from '@mui/material';
import PieChartIcon from '@mui/icons-material/PieChart';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import PercentIcon from '@mui/icons-material/Percent';
import SupportIcon from '@mui/icons-material/Support';
import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import InfoIcon from '@mui/icons-material/Info';
import Networks from '../../jsons/networks.json';
import { v4 } from 'uuid';
import BugReportIcon from '@mui/icons-material/BugReport';
import { useLocation, useNavigate } from 'react-router-dom';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import FeedIcon from '@mui/icons-material/Feed';
import { SoonChip } from '../SoonChip/SoonChip';
import TrendingUpSharpIcon from '@mui/icons-material/TrendingUpSharp';

interface Network {
  chainId: string;
  name: string;
  slug: string;
  logo: string;
}

const button: SxProps = {
  padding: '2px 8px',
  display: 'flex',
  gap: '8px',
  borderRadius: '8px',
  '&.active': {
    backgroundColor: '#8c00ef',
  },
};

const iconButton: SxProps = {
  minWidth: 'fit-content',
};

const subList: SxProps = {
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
};

const subButton: SxProps = {
  padding: '2px 0 2px 40px',
  borderRadius: '8px',
  '&.active': {
    backgroundColor: '#8c00ef',
  },
};

const subButtonText: SxProps = {
  '&.active': {
    color: '#ffffff',
  },
};

const list: SxProps = {
  width: '100%',
  maxWidth: 360,
  position: 'sticky',
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
};

export enum Page {
  ANALYTICS = 'analytics',
  MONEYPRINTER = 'money-printer',
  WARS = 'wars',
  YIELDS = 'stablecoin-yields',
  GRAVEYARD = 'stablecoin-graveyard',
  TRADING = 'trading',
  NEWS = 'news',
  BUG = 'bug',
  ABOUT = 'about',
  DISCLAIMER = 'disclaimer',
  ACTIVITYMONITOR = 'activity-monitor',
}

const ListNav = () => {
  const { pathname } = useLocation();
  const [extend, setExtend] = useState<boolean>(true);
  const navigate = useNavigate();

  return (
    <List
      sx={list}
      component='nav'
      aria-labelledby='nested-list-subheader'
      subheader={
        <Typography
          variant='body1'
          color='primary'
          sx={{ padding: '4px 8px', fontSize: 13 }}
        >
          <b>Stablecoin Dashboards</b>
        </Typography>
      }
    >
      <ListItemButton
        sx={button}
        onClick={() => {
          setExtend(!extend);
        }}
      >
        <ListItemIcon sx={iconButton}>
          <PieChartIcon />
        </ListItemIcon>
        <ListItemText primary={<b>Stablecoin TVL</b>} />
        {extend ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </ListItemButton>
      <Collapse
        in={extend}
        timeout='auto'
        unmountOnExit
      >
        <List
          component='div'
          sx={subList}
        >
          <ListItemButton
            sx={subButton}
            key={v4()}
            className={!pathname.split('/')[1] ? 'active' : ''}
            onClick={() => {
              navigate('/');
            }}
          >
            <ListItemText
              primary='All Chains'
              className={!pathname.split('/')[1] ? 'active' : ''}
              sx={subButtonText}
            />
          </ListItemButton>
          {Networks.slice(1, 6).map((item: Network, index: number) => (
            <ListItemButton
              sx={subButton}
              key={v4()}
              className={pathname.includes(item.slug) ? 'active' : ''}
              onClick={() => {
                if (item.slug === 'polygon') navigate('#');
                else navigate(`${item.slug}`);
              }}
            >
              <ListItemText
                primary={
                  <>
                    {item.name}{' '}
                    {item.slug === 'polygon' ? (
                      <SoonChip label='SOON' />
                    ) : (
                      <></>
                    )}
                  </>
                }
                className={pathname.includes(item.slug) ? 'active' : ''}
                sx={subButtonText}
              />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
      <ListItemButton
        sx={button}
        className={pathname.includes(Page.WARS) ? 'active' : ''}
        onClick={() => {
          navigate('#');
        }}
      >
        <ListItemIcon sx={iconButton}>
          <LocalFireDepartmentIcon
            style={{ color: pathname.includes(Page.WARS) ? '#f5f5f5' : '' }}
          />
        </ListItemIcon>
        <ListItemText
          primary={
            <>
              <b>Stablecoin Wars</b> <SoonChip label='SOON' />
            </>
          }
          style={{ color: pathname.includes(Page.WARS) ? '#f5f5f5' : '' }}
        />
      </ListItemButton>
      <ListItemButton
        sx={button}
        className={pathname.includes(Page.MONEYPRINTER) ? 'active' : ''}
        onClick={() => {
          navigate(Page.MONEYPRINTER);
        }}
      >
        <ListItemIcon sx={iconButton}>
          <AttachMoneyIcon
            style={{
              color: pathname.includes(Page.MONEYPRINTER) ? '#f5f5f5' : '',
            }}
          />
        </ListItemIcon>
        <ListItemText
          primary={<b>USDC Money Printer</b>}
          style={{
            color: pathname.includes(Page.MONEYPRINTER) ? '#f5f5f5' : '',
          }}
        />
      </ListItemButton>
      <ListItemButton
        sx={button}
        className={pathname.includes(Page.YIELDS) ? 'active' : ''}
        onClick={() => {
          navigate(Page.YIELDS);
        }}
      >
        <ListItemIcon sx={iconButton}>
          <PercentIcon
            style={{ color: pathname.includes(Page.YIELDS) ? '#f5f5f5' : '' }}
          />
        </ListItemIcon>
        <ListItemText
          primary={<b>Stablecoin Yields</b>}
          style={{ color: pathname.includes(Page.YIELDS) ? '#f5f5f5' : '' }}
        />
      </ListItemButton>
      <ListItemButton
        sx={button}
        className={pathname.includes(Page.GRAVEYARD) ? 'active' : ''}
        onClick={() => {
          navigate(Page.GRAVEYARD);
        }}
      >
        <ListItemIcon sx={iconButton}>
          <SupportIcon
            style={{
              color: pathname.includes(Page.GRAVEYARD) ? '#f5f5f5' : '',
            }}
          />
        </ListItemIcon>
        <ListItemText
          primary={<b>Stablecoin Graveyard</b>}
          style={{ color: pathname.includes(Page.GRAVEYARD) ? '#f5f5f5' : '' }}
        />
      </ListItemButton>
      <ListItemButton
        sx={button}
        className={pathname.includes(Page.ACTIVITYMONITOR) ? 'active' : ''}
        onClick={() => {
          navigate(Page.ACTIVITYMONITOR);
        }}
      >
        <ListItemIcon sx={iconButton}>
          <TrendingUpSharpIcon
            style={{
              color: pathname.includes(Page.ACTIVITYMONITOR) ? '#f5f5f5' : '',
            }}
          />
        </ListItemIcon>
        <ListItemText
          primary={<b>Stablecoin Activity Monitor</b>}
          style={{
            color: pathname.includes(Page.ACTIVITYMONITOR) ? '#f5f5f5' : '',
          }}
        />
      </ListItemButton>
      <Link
        href='/trade-stablecoins'
        sx={{ textDecoration: 'none' }}
      >
        <ListItemButton
          sx={button}
          className={pathname.includes(Page.TRADING) ? 'active' : ''}
          // onClick={() => {
          //   navigate(Page.TRADING);
          // }}
        >
          <ListItemIcon sx={iconButton}>
            <SwapHorizontalCircleIcon
              style={{
                color: pathname.includes(Page.TRADING) ? '#f5f5f5' : '',
              }}
            />
          </ListItemIcon>
          <ListItemText
            primary={<b>Trade Stablecoins</b>}
            style={{
              color: pathname.includes(Page.TRADING) ? '#f5f5f5' : '',
            }}
          />
        </ListItemButton>
      </Link>

      <Link
        target='_blank'
        href='https://cryptobriefing.com'
        sx={{ textDecoration: 'none' }}
      >
        <ListItemButton
          sx={button}
          className={pathname.includes(Page.NEWS) ? 'active' : ''}
        >
          <ListItemIcon sx={iconButton}>
            <FeedIcon />
          </ListItemIcon>
          <ListItemText primary={<b>Crypto News</b>} />
        </ListItemButton>
      </Link>

      <Link
        target='_blank'
        href='https://docs.google.com/forms/d/e/1FAIpQLScmGMeGseagnh4h1nCRwvWp8v3bl74acvS-y4uH04JxdZpngA/viewform'
        sx={{ textDecoration: 'none' }}
      >
        <ListItemButton
          sx={button}
          className={pathname.includes(Page.BUG) ? 'active' : ''}
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
        className={pathname.includes(Page.ABOUT) ? 'active' : ''}
        onClick={() => {
          navigate('/about');
        }}
      >
        <ListItemIcon sx={iconButton}>
          <InfoIcon
            style={{ color: pathname.includes(Page.ABOUT) ? '#f5f5f5' : '' }}
          />
        </ListItemIcon>
        <ListItemText
          primary={<b>About</b>}
          style={{ color: pathname.includes(Page.ABOUT) ? '#f5f5f5' : '' }}
        />
      </ListItemButton>

      <ListItemButton
        sx={button}
        className={pathname.includes(Page.DISCLAIMER) ? 'active' : ''}
        onClick={() => {
          navigate('/disclaimer');
        }}
      >
        <ListItemIcon sx={iconButton}>
          <WarningIcon
            style={{
              color: pathname.includes(Page.DISCLAIMER) ? '#f5f5f5' : '',
            }}
          />
        </ListItemIcon>
        <ListItemText
          primary={<b>Risk Disclaimer</b>}
          style={{ color: pathname.includes(Page.DISCLAIMER) ? '#f5f5f5' : '' }}
        />
      </ListItemButton>
    </List>
  );
};

export default ListNav;
