
//CSS
import { Alert, Button } from '@mui/material';
import DescriptionForm from '../../components/components-form/DescriptionForm';
import styles from './Dashboard.module.css';
import { Link, useNavigate } from 'react-router-dom';

//Hook
import { useAuthValue } from '../../context/AuthContext';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import LineProgress from '../../components/line-progress/LineProgress';
import TitleForm from '../../components/components-form/TitleForm';

const Dashboard = () => {

    const navigate = useNavigate();
    const user  = useAuthValue();
    const uid = user ? user.uid : null;

    console.log(uid)
    console.log(user)

    //const posts = []

    const {documents: posts, error, loading } = useFetchDocuments("posts", null, uid)


    const deleteDocument = (id) => {

        console.log(id)
    }


    console.log(posts)

    if(loading){
        
        return  <>
        
            { loading && ( <LineProgress/> ) }
        </>
    }
    
    return (

        <>
            <div className={styles.container}>

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
                    posts && posts.length === 0 ? (

                        <div className={styles.noPost}>
                            <DescriptionForm>
                                Não foram encontrado posts.
                            </DescriptionForm>

                            <div className={styles.boxButton}>
                                <Button 
                                    size='large' 
                                    variant='contained'
                                    onClick={() => navigate('/post/createPost')} 
                                >
                                    Criar Posts
                                </Button>
                            </div>
                        </div>
                    ) 

                    : (

                        <div className={styles.contentPosts}> 

                            <div className={styles.title}>
                                <TitleForm>Todos os seus posts</TitleForm> 
                            </div>


                            <div  className={styles.table}>

                                <div className={styles.tableHeader}>
                                    <span className={styles.row} >Título</span>
                                    {/* <span className={styles.row} >ações</span> */}
                                </div>

                                <div className={styles.tableBody}>

                                    {
                                        posts && posts.map((post) => (

                                            <div className={styles.tableRow} key={post.id} >

                                                <p className={styles.rowBody}>
                                                    {post.data.title}
                                                </p>
        
                                                <div className={styles.footer}>

                                                    <Link to={`/post/${post.id}`}>
                                                        <Button variant='outlined'  className={styles.btn}>
                                                            <span  className={styles.btn}>Ver</span>
                                                        </Button>
                                                    </Link>
                                                        
                                                    <Link to={`/post/editPost/${post.id}`}>
                                                        <Button variant='outlined'  className={styles.btn}>
                                                        <span  className={styles.btn}>Editar</span>
                                                        </Button>
                                                    </Link>

                                                    <Button variant='contained' color="error" onClick={() => deleteDocument(post.id)}>
                                                        <span  className={styles.btn2 }>Excluir</span>
                                                    </Button>
                                                
                                                </div>
        
                                            </div>
                                        ))
                                    }
                                </div>

                            </div>

                        </div>
                    )
                }




            </div>
        </>

    )
}

export default Dashboard