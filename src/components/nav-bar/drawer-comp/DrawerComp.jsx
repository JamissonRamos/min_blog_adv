    //React
    import { useState } from "react";

    //React Router
    import { Link } from "react-router-dom";

    //Material UI
    import { Box, Divider, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material"

    //Icons
    import GavelIcon from '@mui/icons-material/Gavel';
    import MenuIcon from '@mui/icons-material/Menu';


    const DrawerComp = ({pages}) => {

        const [openDrawer, setOpenDrawer] = useState(false);

        return (

            <>

                <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} >
                    
                    {/*   sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }} */}
                    <Box height={'100%'} sx={{background: 'var(--blue-800)'}} width={200}>

                        <List >

                            <Box sx={{display:'flex', justifyContent:'center'}}  onClick={() => setOpenDrawer(!openDrawer)} component={Link} to={"/"} >

                                <ListItemIcon  >
                                    
                                    <GavelIcon sx={{ color: 'var(--cinza-500)', fontSize: "3.5rem" }}/>

                                </ListItemIcon>

                            </Box>

                            <Divider />

                            {
                                pages.map(({id, page, icon, linkPage}) => (

                                    <div key={id}>
                                        <ListItemButton key={id} sx={{display:'flex', alignItems:'center'}} onClick={() => setOpenDrawer(!openDrawer)} component={Link} to={linkPage}>

                                            <ListItemIcon sx={{ color: 'var(--cinza-500)', fontSize: "1.5rem" }}>

                                                {icon}

                                            </ListItemIcon>

                                            <ListItemText>

                                                <Typography 

                                                    sx={{color: 'var(--cinza-500)', fontSize: '1rem', fontWeight: 'regular'}}>

                                                    {page}
                                                    
                                                </Typography>

                                            </ListItemText>

                                        </ListItemButton>
                                    
                                    </div>

                                ))
                            }

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