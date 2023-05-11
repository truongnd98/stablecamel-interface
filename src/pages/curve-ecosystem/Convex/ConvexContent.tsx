import { useGetDataConvex } from '../../../stores/curve-ecosystem/hooks';
import { ConvexContentMetrics } from './ConvexContentMetrics';
import { ConvexContentLockedCVXAndLeaderboard } from './ConvexContentLockedCVXAndLeaderboard';
import { ConvexContentBribeRevenueAndUnlockTracker } from './ConvexContentBribeRevenueAndUnlockTracker';
import { ConvexContentCumulative } from './ConvexContentCumulative';
import { FraxTitle } from '../Frax/FraxTitle/FraxTitle';

export function ConvexContent() {
	useGetDataConvex();
	return (
		<>
			<FraxTitle/>
			<ConvexContentMetrics />
			<ConvexContentLockedCVXAndLeaderboard />
			<ConvexContentBribeRevenueAndUnlockTracker />
			<ConvexContentCumulative />
		</>
	);
}
