//React
import { useState } from "react";

//Hooks
import { useAuthentication } from '../../../hooks/useAuthentication'
import { useAuthValue } from "../../../context/AuthContext";

//React Router
import { Link } from "react-router-dom";

//MAterial UI
import { Avatar, Box, Divider, ListItemIcon, Menu, MenuItem, Tooltip, Typography } from "@mui/material"

//Icons
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import LogoutIcon from '@mui/icons-material/Logout';

const SubMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null); //Monitorar o menu do avatar;

    //Passando usuário logado
    const user = useAuthValue() || "";

    console.log(user)

    //Função para fazer o logout sing in do sistema
    const { logout } = useAuthentication() ;

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    //Fechar o menu do avatar
    const handleClose = () => {
        setAnchorEl(null);
    };

    const pagesSubMenu = [
        // visibliPageUser: indica se a pagina pode ou não ser mostrada se user não tiver logado;
        // linkPage coloca o link da pagina a ser mostrado;
        {id: 1, page: 'NOVO POST', icon: <AddCircleIcon/>, linkPage: '/post/createPost', visibliPageUser: true}, 
        {id: 2, page: 'DASHBOARD', icon: <DashboardCustomizeIcon/>, linkPage: '/dashboard', visibliPageUser: true},
        {id: 3, page: 'SAIR', icon: <LogoutIcon/>, linkPage: '/', visibliPageUser: true},
        {id: 4, page: 'REGISTRAR', icon: <AddCircleIcon/>, linkPage: '/register', visibliPageUser: false},
        {id: 5, page: 'LOGIN', icon: <LogoutIcon/>, linkPage: '/login', visibliPageUser: false},
    ];


    return ( 

        <>
            {/* Coloca o nome do usuário logado no sistema  */}
            <Tooltip title={user.displayName}> 

                <Avatar alt={user.displayName } src={user.photoURL ? user.photoURL : user.displayName} onClick={handleClick} />

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
                    pagesSubMenu.map(({id, page, icon, linkPage, visibliPageUser}) => (
                        
                    (user ? visibliPageUser : !user && !visibliPageUser) ? (

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
                
                                    <MenuItem key={id} onClick={() => {handleClose(); logout();}}  sx={{paddingY: '.8rem'}} component={Link} to={linkPage}> 
        
                                        <ListItemIcon>
                                            <LogoutIcon  sx={{color: 'var(--blue-800)', fontWeight: 'bold'}}/> 
                                        </ListItemIcon>
        
                                        <Typography 
                                            textAlign="center" 
                                            sx={{color: 'var(--blue-800)', fontSize: '.8rem', fontWeight: 'bold'}}>
                                            {page}
                                        </Typography>
        
                                    </MenuItem>

                                    <Divider/>

                                    <Typography 
                                            textAlign="center" 
                                            sx={{color: 'var(--blue-800)', fontSize: '.8rem', fontWeight: 'bold'}}>
                                            {user.displayName}
                                    </Typography>
        
                                </Box>
                            ) : null
                        
                    ))
                        
                }       

            </Menu>
        </>
    )
}

export default SubMenu