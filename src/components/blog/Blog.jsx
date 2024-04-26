
//Css
import { Spa } from '@mui/icons-material';
import styles from './Blog.module.css';

//Material UI
import { Button, Chip, Typography } from '@mui/material';

// import undFotoPost from '../../assets/undFotoPost.png';



const Blog = ({posts}) => {

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
                    

                    {
                        posts && posts.map((post) => (

                            <div className={styles.card} key={post.id}> 

                                <div className={styles.cardHeader}>

                                    <img src={post.data.image && post.data.image} alt={post.data.title} className={styles.fotoPost}/>
                                
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
                                            {post.data.title}
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

                                                {post.data.body}

                                        </Typography>

                                    </div>

                                    
                                    <div className={styles.tags}>
                                        {
                                            Array.isArray(post.data.tags) && 

                                                post.data.tags.map((tag, id) => (

                                                    <span key={id}> {tag} </span>
                                                ))
                                        }
                                        

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
                        ))
                    }
                
                </div>

            </div>
        </>

    )
    }

export default Blog