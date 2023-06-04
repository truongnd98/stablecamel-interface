import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  getUSDTMoneyPrinterData,
} from "./thunks";

export const useUSDTMoneyPrinterState = () => {
  const state = useAppSelector((state) => state.usdt_moneyprinter);
  return useMemo(() => state, [state]);
};

export const useGetUSDTMoneyPrinterData = (callback: () => void) => {
  const dispatch = useAppDispatch();
  return useEffect(() => {
    const fetch = async () => {
      await dispatch(getUSDTMoneyPrinterData());
    };

    fetch().then(() => {
      callback();
    });
  }, []);
};
