import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { useMemo, useEffect } from 'react';
import { getListYield } from './thunks';

export const useYieldState = () => {
	const state = useAppSelector((state) => state.yield);
	return useMemo(() => state, [state]);
};

export const useGetListYield = () => {
	const dispatch = useAppDispatch();
	return useEffect(() => {
		dispatch(getListYield());
	}, []);
};
