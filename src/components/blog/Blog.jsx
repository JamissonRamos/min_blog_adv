
//Css
import styles from './Blog.module.css';

//Material UI
import { Button, Typography } from '@mui/material';

import undFotoPost from '../../assets/undFotoPost.png';

const Blog = () => {

    return (

        <>

            <div className={styles.container}>

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

                <div className={styles.cards}>

                    <div className={styles.card}>

                        <div className={styles.cardHeader}>
                            <img src={'https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/irpf2024/@@collective.cover.banner/e2b8cd9f-7357-46d6-b85c-812704d631b8/@@images/f717193d-7b40-49c2-a86b-efb1a1a21c51.jpeg'} alt="foto do postxxx" className={styles.fotoPost}/>
                        </div>

                        <div className={styles.cardBody}>

                            <div className={styles.cardBodyTitle}>

                                <Typography
                                    sx={{ color: 'var(--cinza-800)', 
                                        fontSize: '1em', 
                                        fontWeight: 'bold',
                                        overflow:'hidden',
                                        textOverflow:'ellipsis',
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2, // Este valor define o número de linhas antes do corte
                                        WebkitBoxOrient: 'vertical'
                                    }}  
                                        variant="subtitle1"
                                >
                                    Contatos Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, dignissimos!
                                </Typography>

                            </div>

                            <div className={styles.cardBodyPost} >

                                <Typography
                                        sx={{ color: 'var(--cinza-800)', fontSize: '1rem',
                                            overflow:'hidden',
                                            textOverflow:'ellipsis',
                                            display: '-webkit-box',
                                            WebkitLineClamp: 3, // Este valor define o número de linhas antes do corte
                                            WebkitBoxOrient: 'vertical'
                                        }}                                      
                                    >

                                    post Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit in voluptatem fugiat fugit minus, sapiente deleniti vero nobis eius, provident quisquam enim at unde laborum iusto ipsa aliquam commodi eos.

                                </Typography>

                            </div>

                        </div>

                        <div className={styles.cardFooter}>

                            <Button variant='contained'href={'#'} target='_blank' > 

                                <Typography sx={{fontSize:'.8rem'}} > 
                                    Mais Detalhes
                                </Typography>

                            </Button>

                        </div>


                    </div>
                    <div className={styles.card}>

                        <div className={styles.cardHeader}>
                            <img src={undFotoPost} alt="foto do postxxx" className={styles.fotoPost}/>
                        </div>

                        <div className={styles.cardBody}>

                            <div className={styles.cardBodyTitle}>

                                <Typography
                                    sx={{ color: 'var(--cinza-800)', 
                                        fontSize: '1em', 
                                        fontWeight: 'bold',
                                        overflow:'hidden',
                                        textOverflow:'ellipsis',
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2, // Este valor define o número de linhas antes do corte
                                        WebkitBoxOrient: 'vertical'
                                    }}  
                                        variant="subtitle1"
                                >
                                    Contatos Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, dignissimos!
                                </Typography>

                            </div>

                            <div className={styles.cardBodyPost} >

                                <Typography
                                        sx={{ color: 'var(--cinza-800)', fontSize: '1rem',
                                            overflow:'hidden',
                                            textOverflow:'ellipsis',
                                            display: '-webkit-box',
                                            WebkitLineClamp: 3, // Este valor define o número de linhas antes do corte
                                            WebkitBoxOrient: 'vertical'
                                        }}                                      
                                    >

                                    post Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit in voluptatem fugiat fugit minus, sapiente deleniti vero nobis eius, provident quisquam enim at unde laborum iusto ipsa aliquam commodi eos.

                                </Typography>

                            </div>

                        </div>

                        <div className={styles.cardFooter}>

                            <Button variant='contained'href={'#'} target='_blank' > 

                                <Typography sx={{fontSize:'.8rem'}} > 
                                    Mais Detalhes
                                </Typography>

                            </Button>

                        </div>


                    </div>

                </div>

            </div>
        </>

    )
    }

export default Blog