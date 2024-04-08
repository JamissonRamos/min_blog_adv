//React
import { useState } from "react";

//React Router
import { Link } from "react-router-dom";

//MAterial UI
import { Avatar, Box, Divider, ListItemIcon, Menu, MenuItem, Tooltip, Typography } from "@mui/material"

//Icons
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import LogoutIcon from '@mui/icons-material/Logout';

//Imagens
import perfilImage from '../../../assets/perfil.jpg'; // Importe a imagem usando o caminho relativo correto


const SubMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null); //Monitorar o menu do avatar;

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    //Fechar o menu do avatar
    const handleClose = () => {
        setAnchorEl(null);
    };

    const pagesSubMenu = [
        {id: 1, page: 'NOVO POST', icon: <AddCircleIcon/>, linkPage: '/'},
        {id: 2, page: 'DASHBOARD', icon: <DashboardCustomizeIcon/>, linkPage: '/'},
        {id: 3, page: 'SAIR', icon: <LogoutIcon/>, linkPage: '/'},
        {id: 4, page: 'LOGIN', icon: <LogoutIcon/>, linkPage: '/login'},
        {id: 5, page: 'REGISTRAR', icon: <AddCircleIcon/>, linkPage: '/register'}
    ];

    return ( 

        <>
            {/* Coloca o nome do usuário logado no sistema  */}
            <Tooltip title="Alana"> 

                <Avatar alt="Remy Sharp" src={perfilImage} onClick={handleClick} />

            </Tooltip>

            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                sx={{mt: '4px', ml: '-18px' }}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
            >
                {
                    pagesSubMenu.map(({id, page, icon, linkPage}) => (

                        page !== "SAIR" ? 

                            <MenuItem key={id} onClick={handleClose}  component={Link} to={linkPage} > 

                                <ListItemIcon  sx={{color: 'var(--blue-800)', fontWeight: 'bold'}}>

                                    {icon} 

                                </ListItemIcon>

                                <Typography 
                                    textAlign="center" 
                                    sx={{color: 'var(--blue-800)', fontSize: '.8rem', fontWeight: 'bold'}}>
                                    {page}
                                </Typography>

                            </MenuItem> 
                            :
                            <Box key={id} sx={{paddingY: '.8rem'}}>

                                <Divider/>
            
                                <MenuItem key={id} onClick={handleClose}  sx={{paddingY: '.8rem'}} component={Link} to={linkPage}> 

                                    <ListItemIcon>
                                        <LogoutIcon  sx={{color: 'var(--blue-800)', fontWeight: 'bold'}}/> 
                                    </ListItemIcon>

                                    <Typography 
                                        textAlign="center" 
                                        sx={{color: 'var(--blue-800)', fontSize: '.8rem', fontWeight: 'bold'}}>
                                        {page}
                                    </Typography>

                                </MenuItem>

                            </Box>
                    ))
                }

            </Menu>
        </>
    )
}

export default SubMenu