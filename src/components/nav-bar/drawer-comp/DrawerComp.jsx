    //React
    import { useState } from "react";

    //Material UI
    import { Box, Divider, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material"

    //Icons
    import GavelIcon from '@mui/icons-material/Gavel';
    import MenuIcon from '@mui/icons-material/Menu';




    const DrawerComp = () => {

        const [openDrawer, setOpenDrawer] = useState(false);

        return (

            <>

                <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} >
                    
                    {/*   sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }} */}
                    <Box height={'100%'} sx={{background: 'var(--blue-800)'}} width={200}>

                        <List >

                            <ListItemButton sx={{display:'flex', justifyContent:'center'}}>

                                <ListItemIcon  >
                                    
                                    <GavelIcon sx={{ color: 'var(--cinza-500)', fontSize: "3.5rem" }}/>

                                </ListItemIcon>

                            </ListItemButton>

                            <Divider> Menu </Divider>

                            <ListItemButton sx={{display:'flex', alignItems:'center'}}>

                                <ListItemIcon>

                                    <GavelIcon sx={{ color: 'var(--cinza-500)', fontSize: "1.5rem" }}/>

                                </ListItemIcon>

                                <ListItemText>
                                    <Typography 
                                        
                                        sx={{color: 'var(--cinza-500)', fontSize: '1rem', fontWeight: 'regular'}}>
                                        {/* {page} */}
                                        HOME
                                    </Typography>
                                </ListItemText>

                            </ListItemButton>

                        </List>

                    </Box>

                </Drawer>

                <IconButton onClick={() => setOpenDrawer(!openDrawer)}>

                    <MenuIcon sx={{color: 'var(--cinza-500)'}}/>

                </IconButton>
            </>
        )
    }

export default DrawerComp