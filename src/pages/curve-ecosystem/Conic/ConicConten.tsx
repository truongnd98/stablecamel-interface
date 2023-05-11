import { useGetDataConic } from '../../../stores/curve-ecosystem/hooks';
import { ConicContentCNCLockedMetrics } from './ConicContentCNCLockedMetrics';
import { ConicContentDailyCNCNetLockedAndUnlocksCNCTrackerWeekly } from './ConicContentDailyCNCNetLockedAndUnlocksCNCTrackerWeekly';
import { ConicContentLockedCNCAndLeaderboard } from './ConicContentLockedCNCAndLeaderboard';
import { ConicContentMetrics } from './ConicContentMetrics';
import { ConicContentTVLByTokenAndTVLCurvePoolDistribution } from './ConicContentTVLByTokenAndTVLCurvePoolDistribution';

export function ConicContent() {
	useGetDataConic();
	return (
		<>
      <ConicContentMetrics/>
      <ConicContentTVLByTokenAndTVLCurvePoolDistribution/>
      <ConicContentCNCLockedMetrics/>
      <ConicContentLockedCNCAndLeaderboard/>
      <ConicContentDailyCNCNetLockedAndUnlocksCNCTrackerWeekly/>
		</>
	);
}
