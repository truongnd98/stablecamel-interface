import { useGetDataConvex } from '../../../stores/curve-ecosystem/hooks';
import { ConvexContentMetrics } from './ConvexContentMetrics';
import { ConvexContentLockedCVXAndLeaderboard } from './ConvexContentLockedCVXAndLeaderboard';
import { ConvexContentBribeRevenueAndUnlockTracker } from './ConvexContentBribeRevenueAndUnlockTracker';
import { ConvexContentCumulative } from './ConvexContentCumulative';

export function ConvexContent() {
	useGetDataConvex();
	return (
		<>
			<ConvexContentMetrics />
			<ConvexContentLockedCVXAndLeaderboard />
			<ConvexContentBribeRevenueAndUnlockTracker />
			<ConvexContentCumulative />
		</>
	);
}
