import styles from './Search.module.css';
import { useQuery } from "../../hooks/useQuery"
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import LineProgress from '../../components/line-progress/LineProgress';
import { Alert, Button } from '@mui/material';
import PostDetail from '../../components/blog/PostDetail';
import DescriptionForm from '../../components/components-form/DescriptionForm';
import { useNavigate } from 'react-router-dom';



const Search = () => {

    const navigate = useNavigate();
    const query = useQuery()
    const search = query.get("q")

    const { documents: posts, loading, error: errorFetch } = useFetchDocuments('posts',search)

    return (

        <>
            { loading && ( <LineProgress/> ) }

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

            <div className={styles.container}>

                {
                    posts && posts.length > 0 ?  
                    (
                            // <Blog posts={posts}/>
                            <PostDetail posts={posts}/>
                    ): 
                    (
                        <div className={styles.noPost}>
                            <DescriptionForm>
                                Não foram encontrado posts.
                            </DescriptionForm>

                            <div className={styles.boxButton}>
                                {/* <div> */}
                                    <Button 
                                        size='large' 
                                        variant='contained'
                                        onClick={() => navigate('/post/createPost')} 
                                    >
                                        Criar Posts
                                    </Button>
                                    <Button 
                                        size='large' 
                                        variant='outlined'
                                        onClick={() => navigate('/blog_page')} 
                                    >
                                        Voltar
                                    </Button>
                                {/* </div> */}
                            </div>
                        </div>
                    )
                } 

            </div>
        </>

    )
}

export default Search