
import styles from './Post.module.css'

//Hooks
import { useParams } from 'react-router-dom'
import { useFetchDocument } from '../../hooks/useFetchDocument';
import LineProgress from '../../components/line-progress/LineProgress';
import { Alert } from '@mui/material';
import TitleForm from '../../components/components-form/TitleForm';

const Post = () => {

    const {id} = useParams();

    const {document: post, loading, error} = useFetchDocument('posts', id)
    console.log(post)

    return (

            <>
                { loading && ( <LineProgress/> ) }

                {
                    error && (

                    <Alert  
                        sx={{width: '100%', padding: '0 .4rem', m: 0, border: 'none', fontSize: '0.2rem'}} 
                        variant="outlined" 
                        severity="error" >
                            {error}
                    </Alert>

                    )
                }

                {
                    post && (

                            
                        <div className={styles.container}>

                            <div className={styles.contentTitlePostNameUser}>

                                <TitleForm> {post.title} </TitleForm>
                                
                            </div>
                
                            <div className={styles.ImgPost}>
                                { 
                                    <img src={post.image} alt={post.title}  /> 
                                }
                            </div>
                            <div className={styles.Post}>
                                { 
                                    <p>
                                        {post.body}
                                    </p>
                                }
                            </div>

                            <div className={styles.cardTags}>

                                <h3>Este Post trata sobre:</h3>
                                
                                <div className={styles.tags}>
                                    {
                                        Array.isArray(post.tags) && 

                                            post.tags.map((tag, id) => (

                                                <span key={id}> #{tag} </span>
                                            ))
                                    }
                                </div>       

                            </div>

                            <div>
                                Autor: <span className={styles.NameUser}> {post.createdBy} </span>

                            </div>

                        </div>
                    )
                }

            </>
    )
}

export default Post