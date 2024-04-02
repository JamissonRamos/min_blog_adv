import { Box, List, ListItem, ListItemButton, ListItemIcon, Typography } from "@mui/material"

import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import styles from './Footer.module.css'


const Footer = () => {

    return (

        <>
            <footer className={styles.footer}>
                <List>
                    <ListItem>
                        <ListItemButton >
                            <ListItemIcon>
                                <InstagramIcon  sx={{color: 'var(--verde-800)', fontWeight: 'bold'}} />
                            </ListItemIcon>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <WhatsAppIcon sx={{color: 'var(--verde-800)', fontWeight: 'bold'}}  />
                            </ListItemIcon>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <LinkedInIcon sx={{color: 'var(--verde-800)', fontWeight: 'bold'}}  />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                </List>

                <Box>
                    <Typography variant="h6" gutterBottom sx={{color: 'var(--verde-800)'}}>
                        MiniBlog &copy;
                    </Typography>
                </Box>
            </footer>
        </>

    )
}

export default Footer