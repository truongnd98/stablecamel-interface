import { useGetDataFrax } from '../../../stores/curve-ecosystem/hooks';
import { CurveEcosystemMain } from './CurveEcosystemMain/CurveEcosystemMain';
import { CurveEcosystemSecondSub } from './CurveEcosystemSecondSub/CurveEcosystemSecondSub';
import { CurveEcosystemSubContent } from './CurveEcosystemSubContent/CurveEcosystemSubContent';
import { CurveEcosystemThirdSub } from './CurveEcosystemThirdSub/CurveEcosystemThirdSub';

export function FraxContent() {
	useGetDataFrax();
	return (
		<>
			<CurveEcosystemMain />
			<CurveEcosystemSubContent />
			<CurveEcosystemSecondSub />
			<CurveEcosystemThirdSub />
		</>
	);
}
