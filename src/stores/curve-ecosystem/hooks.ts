import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  getDataCLever,
  getDataConic,
  getDataConvex,
  getDataCurve,
  getDataCurveRevenue,
  getDataFrax,
  getDataFraxBP,
  getDatafrxETH,
  getDataLockedCRV,
} from "./thunks";

export function useCurveEcosystemState() {
  const state = useAppSelector((state) => state.curveEcosystem);
  return useMemo(() => state, [state]);
}

export function useGetDataFrax(callback: () => void) {
  const dispatch = useAppDispatch();
  return useEffect(() => {
    const fetchData = async () => {
      await dispatch(getDataFrax());
      await dispatch(getDataFraxBP());
      await dispatch(getDatafrxETH());
    };
    fetchData().then(() => {
      callback();
    });
  }, []);
}

export function useGetDataCurve(callback: () => void) {
  const dispatch = useAppDispatch();
  return useEffect(() => {
    const fetchData = async () => {
      await dispatch(getDataCurve());
      await dispatch(getDataCurveRevenue());
      await dispatch(getDataLockedCRV());
    };
    fetchData().then(() => {
      callback();
    });
  }, []);
}

export function useGetDataConvex(callback: () => void) {
  const dispatch = useAppDispatch();
  return useEffect(() => {
    const fetchData = async () => {
      await dispatch(getDataConvex());
    };
    fetchData().then(() => {
      callback();
    });
  }, []);
}

export function useGetDataConic(callback: () => void) {
  const dispatch = useAppDispatch();
  return useEffect(() => {
    const fetchData = async () => {
      await dispatch(getDataConic());
    };
    fetchData().then(() => {
      callback();
    });
  }, []);
}

export function useGetDataClever(callback: () => void) {
  const dispatch = useAppDispatch();
  return useEffect(() => {
    const fetchData = async () => {
      await dispatch(getDataCLever());
    };
    fetchData().then(() => {
      callback();
    });
  }, []);
}
