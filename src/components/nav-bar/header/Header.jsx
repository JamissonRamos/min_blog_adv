
    //React
    import { useState } from "react";   

    //Material UI
    // Button, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme,
    import { AppBar, Avatar, Tab, Tabs, Toolbar, Tooltip } from "@mui/material";

    //Icons
    import GavelIcon from '@mui/icons-material/Gavel';
    import HomeIcon from '@mui/icons-material/Home';

    //CSS
    import styles from './Header.module.css'
import { Link } from "react-router-dom";




const Header = () => {
    const [value, setValue] = useState(0);
    
    return (

        <nav className={styles.container}>
            
            <AppBar sx={{ width: '100%', height: '100%', position: 'relative', background: 'none', boxShadow: 'none'}} >

                <Toolbar>

                    <GavelIcon sx={{ fontSize: "3rem" }}/>

                    <Tabs 
                        value={value}
                        onChange={(e, newValue) => setValue(newValue)}
                        sx={{
                            marginLeft: 'auto',
                            '& .MuiTabs-indicator': {
                                backgroundColor: 'var(--cinza-500)' // Definindo a cor do indicador
                        }
                    }}>
                        <Tab 
                            label="HOME" 
                            component={Link} to="/"
                            iconPosition="start" icon={<HomeIcon />}
                            sx={{
                                color: 'var(--cinza-500)', 
                                '&.Mui-selected': { color: 'var(--amarelo-800)',
                                    borderBottom: '2px solid var(--amarelo-800' }
                            }} 
                        />
                    
                        <Tab label="BLOG" iconPosition="start"  
                            sx={{
                                color: 'var(--cinza-500)', 
                                '&.Mui-selected': {  color: 'var(--amarelo-800)', 
                                    borderBottom: '2px solid var(--amarelo-800)' }
                                }}
                        />

                        <Tab label="SERVIÇOS" 
                            sx={{
                                color: 'var(--cinza-500)', 
                                '&.Mui-selected': { color: 'var(--amarelo-800)', 
                                    borderBottom: '2px solid var(--amarelo-800)' }
                            }}
                        />
                        <Tab label="Sobre" component={Link} to="/about"
                            sx={{
                                color: 'var(--cinza-500)', 
                                '&.Mui-selected': { color: 'var(--amarelo-800)', 
                                    borderBottom: '2px solid var(--amarelo-800)' }
                            }}
                        />

                    </Tabs>

                    <Tooltip title="Open settings">
                        
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />

                    </Tooltip>

                </Toolbar>


                

            </AppBar>

        </nav>
    )
}

export default Header