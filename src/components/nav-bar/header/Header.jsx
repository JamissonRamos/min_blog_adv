
    //React
    import { useState } from "react";   
    
    //React Router
    import { Link } from "react-router-dom";

    //Material UI
    // Button, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme,
    import { AppBar, Box, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";

    //Icons
    import GavelIcon from '@mui/icons-material/Gavel';
    import HomeIcon from '@mui/icons-material/Home';
    import LanguageIcon from '@mui/icons-material/Language';
    import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
    import InfoIcon from '@mui/icons-material/Info';

    //CSS
    import styles from './Header.module.css'

    //Components
    import DrawerComp from "../drawer-comp/DrawerComp";
    import SubMenu from "../sub-menu/SubMenu";

    const Header = () => {

        const [value, setValue] = useState(0); //Monitorando os estados do btns do menu;
        const theme = useTheme();

        const isMatch = useMediaQuery(theme.breakpoints.down('md')) //Retorna true de a tela for igual a medida definida

        const pages = [
            {id: 1, page: 'HOME', icon: <HomeIcon/>, linkPage: '/'},
            {id: 2, page: 'BLOG', icon: <LanguageIcon/>, linkPage: '/'},
            {id: 3, page: 'SERVIÇOS', icon: <MedicalServicesIcon/>, linkPage: '/'},
            {id: 4, page: 'SOBRE', icon: <InfoIcon/>, linkPage: '/about'},
        ];
        
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

                    <SubMenu/>
                </AppBar>

            </nav>
        )
    }   

export default Header