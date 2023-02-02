import {AppBar, Toolbar, IconButton, Typography, Avatar, Divider} from '@mui/material';
import {Menu as MenuBook, AppsRounded} from '@mui/icons-material';
import './menu.css'

const Menu = () => {
    return(
            <AppBar position="static" style={{ boxShadow: 'none', borderBottomWidth: '0px', borderBottomStyle: 'solid', borderBottomColor: 'lightgrey', background: 'transparent'}}>
                <Toolbar>
                    <IconButton
                        size='medium'
                        edge="start"
                        aria-label="menu"
                        sx={{ mr: 1 }}
                    >
                        <MenuBook />
                    </IconButton>
                    <Typography className='font' color='#4285F4' variant="h6" >C</Typography>
                    <Typography className='font' color='#DB4437' variant="h6" >o</Typography>
                    <Typography className='font' color='#F4B400' variant="h6" >d</Typography>
                    <Typography className='font' color='#0F9D58' variant="h6" >e</Typography>
                    <Typography className='font' color='#5f5b5b' variant="h6"  marginLeft='10px' sx={{ flexGrow: 1 }}>
                        Translate
                    </Typography>
                    
                    <IconButton>
                        <AppsRounded/>
                    </IconButton>
                    <Avatar component={IconButton}  sx={{ bgcolor: 'crimson', marginLeft: '10px' }}>A</Avatar>
                </Toolbar>
            </AppBar> 
    )
}

export default Menu