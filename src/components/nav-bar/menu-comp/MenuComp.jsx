//React
import { useState } from 'react';

//React Router
import { Link } from 'react-router-dom';

//Icon
import GavelIcon from '@mui/icons-material/Gavel';
import { Box, Tab, Tabs, Toolbar } from '@mui/material';

const MenuComp = ({pages}) => {

    const [value, setValue] = useState(0); //Monitorando os estados do btns do menu;

    return (
        
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

export default MenuComp