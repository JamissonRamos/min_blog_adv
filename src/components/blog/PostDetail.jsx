
//Css
import styles from './PostDetail.module.css';

import { useNavigate } from 'react-router-dom';

// import undFotoPost from '../../assets/undFotoPost.png';
import { Button, Typography } from '@mui/material';

const PostDetail = ({posts}) => {

    const navigate = useNavigate();

    console.log(posts)
    return (

        <>

            <div className={styles.container}>

                <div className={styles.cards}>

                    {
                        posts && posts.map((post) => (

                            <div key={post.id} className={styles.card}>

                                <div className={styles.headerCard}>

                                    <img className={styles.headerCardImg} src={post.data.image} alt={post.data.title} />

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
                                            Tags do post

                                        </Typography>

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

                                    <Button 
                                        type='button' 
                                        variant='contained' 
                                        onClick={() => navigate(`/post/${post.id}`)} > {/* to={`/posts/${post.id}`} target='_blank' */}

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

export default PostDetail