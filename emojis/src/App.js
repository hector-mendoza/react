import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

import Button from './components/Button';
import Logo from './components/Logo';

function App() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Item>
            <Logo />
          </Item>
        </Grid>
        <Grid xs={12}>
          <Item>
            <h1>
              Random Emoji
            </h1>
          </Item>
        </Grid>
        <Grid xs={12}>
          <Item>
            <Button />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;