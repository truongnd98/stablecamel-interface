import { useGetDataFrax } from '../../../stores/curve-ecosystem/hooks';
import { CurveEcosystemMain } from './CurveEcosystemMain/CurveEcosystemMain';
import { CurveEcosystemSecondSub } from './CurveEcosystemSecondSub/CurveEcosystemSecondSub';
import { CurveEcosystemSubContent } from './CurveEcosystemSubContent/CurveEcosystemSubContent';
import { CurveEcosystemThirdSub } from './CurveEcosystemThirdSub/CurveEcosystemThirdSub';
import { FraxTitle } from './FraxTitle/FraxTitle';

export function FraxContent() {
	useGetDataFrax();
	return (
		<>
			<FraxTitle />
			<CurveEcosystemMain />
			<CurveEcosystemSubContent />
			<CurveEcosystemSecondSub />
			<CurveEcosystemThirdSub />
		</>
	);
}
