import { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getListPegTracker } from './thunks';

export function usePegTrackerState() {
  const state = useAppSelector((state) => state.pegtracker);
  return useMemo(() => state, [state]);
}

export function useGetListPegTracker() {
  const dispatch = useAppDispatch();
  return useEffect(() => {
    console.log('bbbbb');
    dispatch(getListPegTracker());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
