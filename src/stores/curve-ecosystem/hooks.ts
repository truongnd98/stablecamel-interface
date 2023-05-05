import { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getDataFrax, getDataFraxBP } from './thunks';

export function useCurveEcosystemState() {
	const state = useAppSelector((state) => state.curveEcosystem);
	return useMemo(() => state, [state]);
}

export function useGetDataCurveEcosystem() {
	const dispatch = useAppDispatch();
	return useEffect(() => {
		const fetchData = async () => {
			await dispatch(getDataFrax());
			await dispatch(getDataFraxBP());
		};
		fetchData();
	}, []);
}
