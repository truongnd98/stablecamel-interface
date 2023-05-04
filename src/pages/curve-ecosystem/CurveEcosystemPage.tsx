import { Box, SxProps } from '@mui/material';
import { useParams } from 'react-router-dom';
import { CurveEcosystemTitle } from './CurveEcosystemTitle/CurveEcosystemTitle';
import { CurveEcosystemMain } from './CurveEcosystemMain/CurveEcosystemMain';
import Footer from '../../components/Footer';
import { CurveEcosystemSubContent } from './CurveEcosystemSubContent/CurveEcosystemSubContent';
import { CurveEcosystemSecondSub } from './CurveEcosystemSecondSub/CurveEcosystemSecondSub';
import { CurveEcosystemThirdSub } from './CurveEcosystemThirdSub/CurveEcosystemThirdSub';
import { useGetDataCurveEcosystem } from '../../stores/curve-ecosystem/hooks';

const container: SxProps = {
  width: '100%',
  padding: '20px 28px',
  paddingBottom: '0',
  display: 'flex',
  flexDirection: 'column',
  height: 'fit-content',
  gap: '28px',
};

export function CurveEcosystemPage() {
  const { network } = useParams();
  useGetDataCurveEcosystem();
  return (
    <Box sx={container}>
      <CurveEcosystemTitle />
      <CurveEcosystemMain />
      <CurveEcosystemSubContent />
      <CurveEcosystemSecondSub />
      <CurveEcosystemThirdSub />
      <Footer />
    </Box>
  );
}
