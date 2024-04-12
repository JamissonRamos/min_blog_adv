
//Css
import styles from './About.module.css';

//Material UI
import { Button, Typography } from "@mui/material";

//React Router
import { Link } from "react-router-dom"


const About = () => {

    return (

        <>
            <div className={styles.container}>

                <Typography 
                    sx={{ color: 'var(--verde-800)', fontWeight: 'bold'}} 
                    variant='h3'
                > 
                    Sobre o Blog
                </Typography>


                <Typography 
                    sx={{ color: 'var(--cinza-800)', textAlign: 'center'}}
                    paragraph 
                    variant='subtitle2'
                > 
                    Projeto desenvolvido em react o front-end e firebese no back-end

                </Typography>   

                <p></p>

                <Button variant='contained' LinkComponent={Link} to={'/'}> Criar Post </Button>
            </div>
        </>

    )
}

export default About