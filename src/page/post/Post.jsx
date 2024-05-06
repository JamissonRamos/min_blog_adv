
import styles from './Post.module.css'

//Hooks
import { useParams } from 'react-router-dom'
import { useFetchDocument } from '../../hooks/useFetchDocument';
import LineProgress from '../../components/line-progress/LineProgress';
import { Alert } from '@mui/material';

const Post = () => {

    const {id} = useParams();

    const {document: post, loading, error} = useFetchDocument('posts', id)
    
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

                <div className={styles.container}>

                    <h1>POST: ${id}</h1>

                    <div>
                        { 
                            post && post.data.title
                        }
                    </div>

                </div>
            </>
    )
}

export default Post