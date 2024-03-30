
    //React
    import { useState } from "react";   
    
    //React Router
    import { Link } from "react-router-dom";

    //Material UI
    // Button, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme,
    import { AppBar, Avatar, Box, Divider, ListItemIcon, Menu, MenuItem, Tab, Tabs, Toolbar, Tooltip, Typography, useMediaQuery, useTheme } from "@mui/material";

    //Icons
    import GavelIcon from '@mui/icons-material/Gavel';
    import HomeIcon from '@mui/icons-material/Home';
    import LanguageIcon from '@mui/icons-material/Language';
    import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
    import InfoIcon from '@mui/icons-material/Info';
    import AddCircleIcon from '@mui/icons-material/AddCircle';
    import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
    import LogoutIcon from '@mui/icons-material/Logout';

    //Imagens
    import perfilImage from '../../../assets/perfil.jpg'; // Importe a imagem usando o caminho relativo correto
    
    //CSS
    import styles from './Header.module.css'

    //Components
    import DrawerComp from "../drawer-comp/DrawerComp";

    const Header = () => {

        const [value, setValue] = useState(0); //Monitorando os estados do btns do menu;
        const [anchorEl, setAnchorEl] = useState(null); //Monitorar o menu do avatar;
        const theme = useTheme();

        console.log(theme)
        const isMatch = useMediaQuery(theme.breakpoints.down('md')) //Retorna true de a tela for igual a medida definida
        console.log(isMatch);

        const pages = [
            {id: 1, page: 'HOME', icon: <HomeIcon/>, linkPage: '/'},
            {id: 2, page: 'BLOG', icon: <LanguageIcon/>, linkPage: '/'},
            {id: 3, page: 'SERVIÇOS', icon: <MedicalServicesIcon/>, linkPage: '/'},
            {id: 4, page: 'SOBRE', icon: <InfoIcon/>, linkPage: '/about'},
        ];
            
        const pagesSubMenu = [
            {id: 1, page: 'NOVO POST', icon: <AddCircleIcon/>, linkPage: '/'},
            {id: 2, page: 'DASHBOARD', icon: <DashboardCustomizeIcon/>, linkPage: '/'},
            {id: 3, page: 'SAIR', icon: <LogoutIcon/>, linkPage: '/'}
        ];
        
        //Clique do btns do avatar, retorna true 
        const handleClick = (e) => {
            setAnchorEl(e.currentTarget);
        };

        //Fechar o menu do avatar
        const handleClose = () => {
            setAnchorEl(null);
        };
        
        return (

            <nav className={styles.container}>
                
                <AppBar sx={{ width: '100%', height: '100%', position: 'relative', background: 'none', boxShadow: 'none', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}} >
                
                    {
                        isMatch ? (
                            
                            <>
                                <DrawerComp/>

                                <Typography 
                                    textAlign="center" 
                                    sx={{color: 'var(--cinza-500)', fontSize: '1rem', fontWeight: 'bold'}}>
                                            Allana
                                </Typography>

                            </>

                        ) : (

                            <>
                                <GavelIcon sx={{ fontSize: "3rem" }}/>

                                <Box sx={{ ml:'auto', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>

                                    <Toolbar sx={{marginLeft: 'auto'}}>

                                        <Tabs 
                                            value={value}
                                            onChange={(e, newValue) => setValue(newValue)}
                                            sx={{ marginLeft: 'auto', '& .MuiTabs-indicator': {backgroundColor: 'var(--cinza-500)'}}}
                                        >
                                            {
                                                pages.map(({id, page, icon, linkPage}) => (

                                                    <Tab 
                                                        key={id}
                                                        label={page} 
                                                        component={Link} to={linkPage}
                                                        icon={icon}// Crie dinamicamente o ícone com base no nome fornecido
                                                        iconPosition="start" 
                                                        sx={{ color: 'var(--cinza-500)', '&.Mui-selected': { color: 'var(--amarelo-800)', borderBottom: '2px solid var(--amarelo-800' }}} 
                                                    />
                                                ))
                                            }

                                        </Tabs>

                                    </Toolbar>
                                </Box>

                            </>
                        )
                    }

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

                </AppBar>

            </nav>
        )
    }   

export default Header