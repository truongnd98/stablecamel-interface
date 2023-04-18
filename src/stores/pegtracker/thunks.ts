import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { HOST } from '../../configs/host';

export const getListPegTracker = createAsyncThunk(
  'peg-tracker/getListPegTracker',
  async () => {
    console.log('aaaa');
    const { data } = await axios({
      method: 'GET',
      url: `${HOST}/api/coingecko/stablecoin-peg-tracker`,
    });
    if (!data) throw new Error('Data page tracker not found');
    return data;
  }
);
