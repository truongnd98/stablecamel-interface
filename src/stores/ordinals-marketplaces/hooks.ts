import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  getOrdinalsMarketplacesData,
} from "./thunks";

export const useOrdinalsMarketplacesState = () => {
  const state = useAppSelector((state) => state.ordinals_marketplaces);
  return useMemo(() => state, [state]);
};

export const useGetOrdinalsMarketplacesData = (callback: () => void) => {
  const dispatch = useAppDispatch();
  return useEffect(() => {
    const fetch = async () => {
      await dispatch(getOrdinalsMarketplacesData());
    };

    fetch().then(() => {
      callback();
    });
  }, []);
};
