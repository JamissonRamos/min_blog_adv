
//CSS
import styles from './Home.module.css'

//Material UI
import { Alert, Button, Typography } from '@mui/material'

//Icons
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Cards from '../../components/cards/Cards';
import Blog from '../../components/blog/CardsBlog';
import Profile from './Profile';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';


const atuacoes = 
[
    {
    "id": 1,
    "atuacao": "Direito do Trabalho",
    "descricao": "Atuando em questões relacionadas a relações de trabalho, rescisões, direitos trabalhistas, entre outros.",
    "links": "http://www.tst.jus.br/"
    },
    {
    "id": 2,
    "atuacao": "Direito Tributario",
    "descricao": "Lidando com questões relacionadas a impostos, planejamento tributário e contencioso fiscal.",
    "links": "https://www.gov.br/receitafederal/pt-br"
    },
    {
    "id": 3,
    "atuacao": "Direito Contratual",
    "descricao": "Assessorando em questões contratuais, comerciais, societárias e de propriedade intelectual.",
    "links": "https://www.oab.org.br/"
    },
    {
    "id": 4,
    "atuacao": "Direito Empresarial",
    "descricao": "Representando empresas em questões comerciais, societárias, contratuais e de propriedade intelectual.",
    "links": "https://www.aasp.org.br/"
    }
]


const Home = () => {

    const { documents: posts , error: errorFetch } = useFetchDocuments('posts')

    return (

        <>
            <div className={styles.container}>
            {
                    errorFetch && (

                    <Alert  
                        sx={{width: '100%', padding: '0 .4rem', m: 0, border: 'none', fontSize: '0.2rem'}} 
                        variant="outlined" 
                        severity="error" >
                            {errorFetch}
                    </Alert>

                    )
                }

                <div className={styles.contentPerfil}>

                    <Profile />

                    <div  className={styles.buttonPerfil}>

                        <Button  variant="contained" endIcon={<WhatsAppIcon />}>
                            <Typography variant="button" >
                                ENTRAR EM CONTATO
                            </Typography>   
                        </Button>

                    </div>

                </div>

                <div className={styles.contentService}>

                    <Cards list={atuacoes} />

                </div>

                <div className={styles.blog}>

                    <div className={styles.titleBlog}>

                        <Typography
                            sx={{color: 'var(--verde-800)', fontWeight: 'bold'}}
                            variant='h4'
                        >
                            Meu Blog

                        </Typography>

                        <Typography
                            sx={{color: 'var(--cinza-800)'}}
                            paragraph
                        >
                            Confira aqui no blog informações e dicas sobre o mundo do direito
                        </Typography>
                                
                    </div> 

                    <Blog posts={posts}/>
                    
                </div>

                {/* <div>home-footer</div> */}
                
                
            </div>
        </>
    )
    }

export default Home