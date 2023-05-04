import { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getDataFrax } from './thunks';

export function useCurveEcosystemState() {
  const state = useAppSelector((state) => state.curveEcosystem);
  return useMemo(() => state, [state]);
}

export function useGetDataCurveEcosystem() {
  const dispatch = useAppDispatch();
  return useEffect(() => {
    dispatch(getDataFrax());
  }, []);
}
