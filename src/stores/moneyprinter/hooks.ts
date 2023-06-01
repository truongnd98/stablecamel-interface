import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  getListDeployedBridges,
  getListDeployedBridgesByBridge,
  getListDeployedLenders,
  getListDeployedLPs,
  getListDeployedToLendingProtocol,
  getListDeployedToLPs,
  getListExchangeBalance,
  getListExchangeBalanceByCEX,
  getListSupplyUSDC,
} from "./thunks";

export const useMoneyPrinterState = () => {
  const state = useAppSelector((state) => state.moneyprinter);
  return useMemo(() => state, [state]);
};

export const useFetchData = (callback: () => void) => {
  const dispatch = useAppDispatch();
  return useEffect(() => {
    const fetch = async () => {
      await dispatch(getListSupplyUSDC());
      await dispatch(getListExchangeBalance());
      await dispatch(getListDeployedLenders());
      await dispatch(getListDeployedLPs());
      await dispatch(getListDeployedBridges());
      await dispatch(getListExchangeBalanceByCEX());
      await dispatch(getListDeployedToLendingProtocol());
      await dispatch(getListDeployedToLPs());
      await dispatch(getListDeployedBridgesByBridge());
      //   await Promise.all([
      //     dispatch(getListSupplyUSDC()),
      //     dispatch(getListExchangeBalance()),
      //     dispatch(getListDeployedLenders()),
      //     dispatch(getListDeployedLPs()),
      //     dispatch(getListDeployedBridges()),
      //     dispatch(getListExchangeBalanceByCEX()),
      //     dispatch(getListDeployedToLendingProtocol()),
      //     dispatch(getListDeployedToLPs()),
      //     dispatch(getListDeployedBridgesByBridge()),
      //   ]);
    };

    fetch().then(() => {
      callback();
    });
  }, []);
};
