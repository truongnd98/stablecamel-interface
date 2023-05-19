import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getDataCurveCrvUSD } from "./thunks";


export function useCurveCrvUSDState() {
	const state = useAppSelector((state) => state.curveCrvUSD);
	return useMemo(() => state, [state]);
}

export function useGetDataCurveCrvUSD() {
	const dispatch = useAppDispatch();
	return useEffect(() => {
		const fetchData = async () => {
			await dispatch(getDataCurveCrvUSD());
		};
		fetchData();
	}, []);
}