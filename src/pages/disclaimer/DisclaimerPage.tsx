import { Box, SxProps, Typography, Link } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import Footer from '../../components/Footer';

const container: SxProps = {
  width: 'calc(100% - 260px)',
  marginLeft: '260px',
  padding: '20px 28px',
  paddingBottom: '0',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100%',
  backgroundColor: '#f5f5f5',
  justifyContent: 'space-between',
};

const main: SxProps = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '28px',
};

const card: SxProps = {
  backgroundColor: '#ffffff',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  padding: '20px',
  borderRadius: '8px',
};

const wrapInfoCard: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  paddingBottom: '12px',
};

export default function DisclaimerPage() {
  return (
    <>
      <Helmet>
        {/* <title>Disclaimer Page</title> */}
        <meta
          property='og:description'
          content='Stable Camel Disclaimer page'
        />
        <meta
          property='og:image'
          content='/thumbnails/thumbnail-general.png'
        />
      </Helmet>
      <Box sx={container}>
        <Box sx={main}>
          <Typography
            variant='h5'
            color='primary'
          >
            Disclaimer
          </Typography>
          <Box sx={card}>
            {/* <Typography
						variant='body1'
						color='primary'
						sx={{
							fontSize: 16,
							fontWeight: 500
						}}>
						About Stable Camel
					</Typography> */}
            <Typography
              variant='body1'
              color='primary'
            >
              Nothing contained herein shall be considered financial advice or
              recommendation to buy or sell any security, commodity,
              cryptocurrency, digital asset, or any other financial instrument
              or asset. Cryptocurrencies, digital assets, and investing have
              many risks, including risk of losses beyond principal investment
              or purchase amount. Past performance is not indicative of future
              results. You should be aware of all the risks associated with
              cryptocurrency and digital asset investing, purchasing, and
              transacting and seek advice from an independent licensed financial
              advisor.
            </Typography>
            {/* <Box sx={wrapInfoCard}>
						<Typography
							variant='body1'
							color='primary'>
							Stable Camel is a DeFi dashboard that provides the most important
							on-chain stablecoin TVL stats, metrics, and charts.
						</Typography>
						<Typography
							variant='body1'
							color='primary'>
							We use open-source blockchain data to develop Stable Camel and
							also publish many{' '}
							<Link
								href='https://dune.com/stablecamel'
								target='_blank'
								color='secondary'
								sx={{
									textDecoration: 'none'
								}}>
								Dune dashboards
							</Link>{' '}
							which got featured on newsletter{' '}
							<Link
								href='https://dunedigest.substack.com/p/dune-digest-36'
								target='_blank'
								color='secondary'
								sx={{
									textDecoration: 'none'
								}}>
								Dune Digest #36
							</Link>{' '}
							and stablecoin research decks including{' '}
							<Link
								href='https://drive.google.com/file/d/14koAek8fHQgJ5lIX-vKsjjjzs0bsBME4/view'
								target='_blank'
								color='secondary'
								sx={{
									textDecoration: 'none'
								}}>
								Frax Finance report
							</Link>
							.
						</Typography>
						<Typography
							variant='body1'
							color='primary'>
							Our popular{' '}
							<Link
								href='https://dune.com/stablecamel/usdc-money-printer'
								target='_blank'
								color='secondary'
								sx={{
									textDecoration: 'none'
								}}>
								USDC Money Printer
							</Link>{' '}
							dashboard got into the top 180 most favorited dashboards all time
							on Dune, out of 66k dashboards.
						</Typography>
					</Box> */}
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
}
