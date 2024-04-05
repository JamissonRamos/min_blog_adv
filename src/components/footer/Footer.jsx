import { Box, List, ListItem, ListItemButton, ListItemIcon, Typography } from "@mui/material"

import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import styles from './Footer.module.css'

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(
    {
        socialIcon: 
        {
            color: 'var(--verde-800)',
            fontWeight: 'bold',
            fontSize: '1.8rem'
        },
        FontFooter: 
        {
            color: 'var(--verde-800)',
            fontSize: '1rem'
        }
    });

const Footer = () => {
    const classes = useStyles();
    return (

        <>
            <footer className={styles.footer}>
                <List>
                    <ListItem>
                        <ListItemButton >
                            <ListItemIcon sx={{display:'flex', alignContent:'center', justifyContent: 'center'}}>
                                <InstagramIcon className={classes.socialIcon} />
                            </ListItemIcon>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <WhatsAppIcon className={classes.socialIcon}  />
                            </ListItemIcon>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <LinkedInIcon className={classes.socialIcon}  />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                </List>

                <Box>
                    <Typography variant="h6"  className={classes.FontFooter}>
                        MiniBlog &copy; 2024
                    </Typography>
                </Box>
            </footer>
        </>

    )
}

export default Footer