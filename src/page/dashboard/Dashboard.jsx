
//CSS
import { Button } from '@mui/material';
import DescriptionForm from '../../components/components-form/DescriptionForm';
import styles from './Dashboard.module.css';
import { useNavigate } from 'react-router-dom';

//Hook
import { useAuthValue } from '../../context/AuthContext';

const Dashboard = () => {

    const navigate = useNavigate();
    const user  = useAuthValue();
    const uid = user ? user.uid : null;

    console.log(uid)
    console.log(user)

    const posts = []

    return (

        <>
            <div className={styles.container}>

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
                        <div> <h1>tem post!</h1> </div>
                    )
                }




            </div>


        </>

    )
}

export default Dashboard