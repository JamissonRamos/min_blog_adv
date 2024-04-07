
//CSS
import styles from './Home.module.css'

//Material UI
import { Button, Typography } from '@mui/material'

//Icons
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Cards from '../../components/cards/Cards';
import Blog from '../../components/blog/Blog';
import Profile from './Profile';


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

    return (

        <>
            <div className={styles.container}>


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

                    <Blog />
                    
                </div>

                <div>home-footer</div>
                
                
            </div>
        </>
    )
    }

export default Home