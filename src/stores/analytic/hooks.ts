import { useCallback, useEffect, useMemo } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import {
  getAggregateDataSummary,
  getDataBridged,
  getDataBUSD,
  getDataDAI,
  getDataFrax,
  getDataUSDC,
  getDataUSDT,
  getDAUAndDailyStableCoin,
  getListDataDetail,
  getListSupply,
  getListTVL,
  getStableCoinInflow,
} from './thunks';
import { Chain } from '../../App';

export const useAnalyticState = () => {
  const state = useAppSelector((state) => state.analytic);
  return useMemo(() => state, [state]);
};

// export const useFetchData = async (network: string) => {
//   const dispatch = useAppDispatch();

//     await dispatch(getListTVL(network));
//     await dispatch(getListSupply(network));
//     await dispatch(getListDataDetail(network));
//     await dispatch(getDataUSDC(network));
//     await dispatch(getDataUSDT(network));
//     await dispatch(getDataDAI(network));
//     await dispatch(getDataFrax(network));
//     await dispatch(getDataBUSD(network));
//     await dispatch(getStableCoinInflow(network));
//     await dispatch(getDAUAndDailyStableCoin(network));

// };

export const useGetListData = (network: string) => {
  const dispatch = useAppDispatch();
  return useEffect(() => {
    if (network) {
      const fetchData = async () => {
        await dispatch(getListTVL(network));
        await dispatch(getListSupply(network));
        await dispatch(getListDataDetail(network));
        await dispatch(getDataUSDC(network));
        await dispatch(getDataUSDT(network));
        await dispatch(getDataDAI(network));
        await dispatch(getDataFrax(network));
        await dispatch(getDataBUSD(network));
        await dispatch(getStableCoinInflow(network));
        await dispatch(getDAUAndDailyStableCoin(network));
        if (network === Chain.AVAX) {
          await dispatch(getDataBridged(network));
        }
      };
      fetchData();
    } else {
      dispatch(getListTVL(''));
      dispatch(getListSupply(''));
      dispatch(getAggregateDataSummary());
      // const fetchData = async () => {
      //   await dispatch(getListTVL(''));
      //   await dispatch(getListSupply(''));
      //   await dispatch(getAggregateDataSummary());
      // };
      // fetchData();
    }
  }, [network]);
};
