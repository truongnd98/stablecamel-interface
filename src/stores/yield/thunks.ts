import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { HOST } from '../../configs/host';
import { YieldRes } from '../../pages/yield/types';

export const getListYield = createAsyncThunk('yield/getListYield', async () => {
  const { data } = await axios({
    method: 'GET',
    url: `${HOST}/api/google-sheet/stablecoin-yield`,
  });

  if (!data) throw new Error('Data yield undefined');
  return data;
});
