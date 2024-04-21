
//Css
import DescriptionForm from '../../components/components-form/DescriptionForm';
import TitleForm from '../../components/components-form/TitleForm';
import styles from './BlogPage.module.css';

const BlogPage = () => {

    return (

        <>
            <div className={styles.container}>
                
                
                {/* { isSubmitting && ( <LineProgress/> ) } */}

                {/* {
                    response.error && (

                    <Alert  
                        sx={{width: '100%', padding: '0 .4rem', m: 0, border: 'none', fontSize: '0.2rem'}} 
                        variant="outlined" 
                        severity="error" >
                            {response.error}
                    </Alert>

                    )
                } */}

                <div>
                    <TitleForm>
                        Todos os Posts
                    </TitleForm>

                    <DescriptionForm>
                        Veja o nossos pots mais recente
                    </DescriptionForm>

                </div>

                <form >

                        
                </form>




            </div>
        </>
    )
}

export default BlogPage