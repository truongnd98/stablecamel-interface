import { useGetDataConic } from '../../../stores/curve-ecosystem/hooks';
import { FraxTitle } from '../Frax/FraxTitle/FraxTitle';
import { ConicContentCNCLockedMetrics } from './ConicContentCNCLockedMetrics';
import { ConicContentDailyCNCNetLockedAndUnlocksCNCTrackerWeekly } from './ConicContentDailyCNCNetLockedAndUnlocksCNCTrackerWeekly';
import { ConicContentLockedCNCAndLeaderboard } from './ConicContentLockedCNCAndLeaderboard';
import { ConicContentMetrics } from './ConicContentMetrics';
import { ConicContentTVLByTokenAndTVLCurvePoolDistribution } from './ConicContentTVLByTokenAndTVLCurvePoolDistribution';

export function ConicContent() {
	useGetDataConic();
	return (
		<>
      <FraxTitle />
      <ConicContentMetrics/>
      <ConicContentTVLByTokenAndTVLCurvePoolDistribution/>
      <ConicContentCNCLockedMetrics/>
      <ConicContentLockedCNCAndLeaderboard/>
      <ConicContentDailyCNCNetLockedAndUnlocksCNCTrackerWeekly/>
		</>
	);
}
