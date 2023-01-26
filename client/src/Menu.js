import {AppBar, Box, Toolbar, IconButton, Typography, Button} from '@mui/material';
import {Menu as MenuBook} from '@mui/icons-material';
import { color } from '@mui/system';

const Menu = () => {
    return(
            <AppBar position="static" style={{ boxShadow: 'none', borderBottomWidth: '1px', borderBottomStyle: 'solid', borderBottomColor: 'lightgrey', background: 'transparent'}}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuBook />
                    </IconButton>
                    <Typography fontWeight='bold' color='#4285F4' variant="h6" component="div">C</Typography>
                    <Typography fontWeight='bold' color='#DB4437' variant="h6" component="div">o</Typography>
                    <Typography fontWeight='bold' color='#F4B400' variant="h6" component="div">d</Typography>
                    <Typography fontWeight='bold' color='#0F9D58' variant="h6" component="div">e</Typography>
                    <Typography fontWeight='bold' color='grey' variant="h6" component="div" marginLeft='10px'>
                        Translate
                    </Typography>
                </Toolbar>
            </AppBar>
    )
}

export default Menu