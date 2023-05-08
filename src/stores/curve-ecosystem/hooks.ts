import { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import {
	getDataCurve,
	getDataCurveRevenue,
	getDataFrax,
	getDataFraxBP,
	getDatafrxETH,
	getDataLockedCRV
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
		const fetchData = async () => {
			await dispatch(getDataCurve());
			await dispatch(getDataCurveRevenue());
			await dispatch(getDataLockedCRV());
		};
		fetchData();
	}, []);
}
