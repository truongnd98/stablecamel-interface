import { Box, SxProps, Typography, Link } from '@mui/material';

const footer: SxProps = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  padding: '12px 50px',
  justifyContent: 'space-between',
  borderTop: '1px solid #8c00ef',
  marginTop: '28px',
};

const text: SxProps = {
  // opacity: 0.6
};

const wrap: SxProps = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
};

const link: SxProps = {
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
};

const item: SxProps = {
  fontWeight: 500,
};

export default function Footer() {
  return (
    <Box sx={footer}>
      <Typography
        variant='body1'
        color='secondary'
        sx={text}
      >
        © 2023 Stably Corporation
      </Typography>
      <Box sx={wrap}>
        <Link
          // target='_blank'
          href='/disclaimer'
          sx={link}
          color='secondary'
        >
          <Typography
            variant='body1'
            color='secondary'
            sx={item}
          >
            Disclaimer
          </Typography>
        </Link>
        <Link
          target='_blank'
          href='https://stably.io/privacy-policy/'
          sx={link}
          color='secondary'
        >
          <Typography
            variant='body1'
            color='secondary'
            sx={item}
          >
            Privacy Policy
          </Typography>
        </Link>
        <Link
          target='_blank'
          href='https://stably.io/terms-of-service/'
          sx={link}
          color='secondary'
        >
          <Typography
            variant='body1'
            color='secondary'
            sx={item}
          >
            Terms of Service
          </Typography>
        </Link>
      </Box>
    </Box>
  );
}
