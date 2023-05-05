import { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import {
	getDataCurvePoolVolume,
	getDataCurveVolume,
	getDataFrax,
	getDataFraxBP,
	getDatafrxETH
} from './thunks';

export function useCurveEcosystemState() {
	const state = useAppSelector((state) => state.curveEcosystem);
	return useMemo(() => state, [state]);
}

export function useGetDataFrax() {
	const dispatch = useAppDispatch();
	return useEffect(() => {
		const fetchData = async () => {
			await dispatch(getDataFrax());
			await dispatch(getDataFraxBP());
			await dispatch(getDatafrxETH());
		};
		fetchData();
	}, []);
}

export function useGetDataCurve() {
	const dispatch = useAppDispatch();
	return useEffect(() => {
		dispatch(getDataCurveVolume());
		dispatch(getDataCurvePoolVolume());
	}, []);
}
