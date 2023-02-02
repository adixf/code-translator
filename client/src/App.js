import Main from './Main';
import Menu from './Menu';
import './fonts/ProductSansBoldItalic.ttf'
import { Stack } from '@mui/system';
import {Box, CssBaseline, Divider} from '@mui/material'

function App() {
  return (
    <div>   
      <CssBaseline/>
       <Box display='flex' flexDirection='column' >
        <Menu></Menu>
        <Divider variant='fullWidth'/> 
        <Main></Main>
      </Box>
    </div>
  );
}

export default App;
