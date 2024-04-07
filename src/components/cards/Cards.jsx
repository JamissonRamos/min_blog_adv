//Material UI
import { Button, Typography } from '@mui/material'

import styles from './Cards.module.css'

const Cards = ({list}) => {

    return (

        <>
            <div className={styles.cards}>

                {
                    list.map(({id, atuacao, descricao, links}) => (

                        <div  key={id} className={styles.card}>

                            <div className={styles.cardHeader}>

                                <Typography
                                    sx={{ color: 'var(--verde-800)',fontWeight: 'bold'}}  
                                    variant="h6" 
                                >
                                    {atuacao}

                                </Typography>

                                <div className={styles.line}></div>

                            </div>

                            <div className={styles.cardContent}>

                                <Typography 
                                    sx={{ color: 'var(--cinza-800)', textAlign: 'center'}}
                                    paragraph 
                                    variant='subtitle2'
                                > 

                                    {descricao}

                                </Typography>   

                            </div>

                            <div>
                                <Button variant='text'href={links} target='_blank' > Mais Detalhes </Button>
                            </div>

                        </div>

                    ))
                }

            </div>
        
        </>
    )
}

export default Cards