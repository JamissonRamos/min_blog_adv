
//Css
import styles from './Profile.module.css';

//Material UI
import { Card, CardMedia, Typography } from '@mui/material';

//Imagens
import perfilImage from '../../assets/perfil.jpg'; // Importe a imagem usando o caminho relativo correto


const Profile = () => {

    return (

        <>

            <div className={styles.contentFotoDescription}>

                <div  className={styles.fotoPerfil}>

                    <Card
                        sx={{ borderRadius: 50, width: '100%', height: '100%',display: 'flex', alignItems: 'center', justifyContent: 'center'  }}>

                        <CardMedia
                            sx={{ borderRadius: 50,  width: '96%', height: '96%'    }}
                            component="img"
                            image={perfilImage}
                        />

                    </Card>

                </div>

                <div className={styles.descriptionPerfil}>

                    <div className={styles.itemDescription}>

                        <Typography
                            sx={{ color: 'var(--verde-800)',fontWeight: 'bold'}}  
                            variant="h6" 
                        >
                            Serviços
                        </Typography>

                        <Typography 
                            sx={{ paddingLeft: '.8rem', color: 'var(--cinza-800)', textAlign: 'justify'}}
                            paragraph 
                            variant='subtitle2'
                        > 
                            Como advogada bem-sucedida, mantenho-me atualizada com as leis e regulamentos, sou especializada em diversas áreas do direito e possuo habilidades excepcionais de negociação e argumentação. Além disso, mantenho a confidencialidade e atuo sempre em conformidade com o código de ética profissional.
                        </Typography>
                    </div>

                    <div  className={styles.itemDescription} >

                        <Typography   
                            sx={{ color: 'var(--verde-800)',fontWeight: 'bold'}}  
                            variant="h6"
                        >
                            Endereço
                        </Typography>

                        <Typography 
                            sx={{ paddingLeft: '.8rem', color: 'var(--cinza-800)', textAlign: 'justify'}}
                            paragraph 
                            variant='subtitle2'
                        > 
                            Av. Paulista, Bela Vista, São Paulo - SP
                        </Typography>

                    </div>

                    <div  className={styles.itemDescription}>

                        <Typography
                            sx={{ color: 'var(--verde-800)',fontWeight: 'bold'}}  
                            variant="h6"
                        >
                            Contatos
                        </Typography>

                    <div >

                    <div className={styles.itemDescriptionContatos}>
                        
                        <Typography  
                            sx={{  paddingLeft: '.8rem', color: 'var(--cinza-800)'}} variant='subtitle2'
                        > 
                            WhatsApp: 

                        </Typography>

                        <Typography  
                            sx={{ paddingLeft: '.1rem', color: 'var(--cinza-800)'}} variant='subtitle2' 
                        > 

                            (77) 9 9999 - 9999

                        </Typography>
                    </div>

                    <div className={styles.itemDescriptionContatos}> 
                        <Typography  
                            sx={{  paddingLeft: '.8rem', color: 'var(--cinza-800)'}} variant='subtitle2'
                        > 

                        Telefone:

                        </Typography>

                        <Typography  
                            sx={{ paddingLeft: '.2rem', color: 'var(--cinza-800)'}} variant='subtitle2' 
                        > 
                            (77) 9 3333 - 3333

                        </Typography>

                    </div>

</div>
                
                </div>

                
                </div>
            </div>
            
        </>
    )
}

export default Profile