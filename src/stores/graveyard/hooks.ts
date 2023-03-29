import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { useMemo, useEffect } from 'react';
import { getListGraveYard } from './thunks';

export function useGraveYardState() {
	const state = useAppSelector((state) => state.graveyard);
	return useMemo(() => state, [state]);
}

export function useGetListGraveYard() {
	const dispatch = useAppDispatch();
	return useEffect(() => {
		dispatch(getListGraveYard());
	}, []);
}
