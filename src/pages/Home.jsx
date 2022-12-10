import images from '../image/phonebooks.jpg';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
// import LinkWrap from '@mui/material/Link';

const styles = {
  container: {
    minHeight: 'calc(100vh - 300px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: 20,
  },
  link: {
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontWeight: 500,
    color: '#ffffff',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          boxShadow:
            ' rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;',
          p: 3,
          marginBottom: 20,
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          mt={{ color: '#6a79a6', fontWeight: 700 }}
        >
          The Phonebook
        </Typography>
        <img src={images} alt="phone" width="400" />
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          boxShadow:
            ' rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;',
          p: 5,
          fontSize: 25,
        }}
      >
        <Typography variant="string" component="p" mt={{ color: '#6a79a6' }}>
          {' '}
          Sign up and create a profile{' '}
        </Typography>
        <Link style={styles.link} to={'register'}>
          {' '}
          Register{' '}
        </Link>
        <Typography variant="string" component="p" mt={{ color: '#6a79a6' }}>
          Log in, if you have already registered
        </Typography>
        <Link style={styles.link} to={'login'}>
          {' '}
          Login{' '}
        </Link>
      </Box>
    </div>
  );
}
