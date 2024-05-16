
//Css
import { useNavigate } from 'react-router-dom';
import styles from './CardsBlog.module.css';

//Material UI
import { Button, Typography } from '@mui/material';

// import undFotoPost from '../../assets/undFotoPost.png';


const Blog = ({posts}) => {

    const navigate = useNavigate();

    return (

        <>

            <div className={styles.container}>


                <div className={styles.cards}>
                    

                    {
                        posts && posts.map((post) => (

                            <div className={styles.card} key={post.id}> 

                                <div className={styles.cardHeader}>

                                    
                                    {
                                        post &&  <img src={post.image} alt={post.title} className={styles.fotoPost}/>
                                    }
                                    
                                   
                                
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
                                            {post.title}
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

                                                {post.body}

                                        </Typography>

                                    </div>

                                    
                                    <div className={styles.tags}>
                                        {
                                            Array.isArray(post.tags) && 

                                                post.tags.map((tag, id) => (

                                                    <span key={id}> {tag} </span>
                                                ))
                                        }
                                        

                                    </div>

                                </div>

                                <div className={styles.cardFooter}>

                                    <Button variant='contained' 
                                    onClick={() => navigate(`/post/${post.id}`)} > {/*  "/blog_page"  */}

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