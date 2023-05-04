import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { HOST } from '../../configs/host';

export const getDataFrax = createAsyncThunk('curve-ecosystem', async () => {
  const { data } = await axios({
    method: 'GET',
    url: `${HOST}/api/curve-ecosystem/frax/frax`,
  });
  if (!data) throw new Error('Data Frax not available');
  return data;
});
