
//UseForm
import { useForm } from 'react-hook-form';

//React router
import { useNavigate } from 'react-router-dom';

//Yup
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import InputText from '../../components/components-form/InputText';
//Css
import DescriptionForm from '../../components/components-form/DescriptionForm';
// import TitleForm from '../../components/components-form/TitleForm';
import styles from './BlogPage.module.css';
import Blog from '../../components/blog/Blog';
import { Alert, Button } from '@mui/material';
import LineProgress from '../../components/line-progress/LineProgress';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';

const schema = Yup.object().shape({
    inputSearch:Yup.string()
})

const BlogPage = () => {

    const { documents: posts , loading, error: errorFetch } = useFetchDocuments('posts')

    //const [posts] = useState([]); //pegar os meus posts

    const navigate = useNavigate();

    const { register, handleSubmit, formState, reset } = useForm({
        mode: 'all',
        resolver: yupResolver(schema),
        defaultValues: {
            inputSearch: ''
        }
    });

    const { errors: formError, isSubmitting } = formState

    const handleSubmitData = async (data) => 
    {
        console.log(data)
        
        if(data.inputSearch){
            return navigate(`/search?q=${data.inputSearch}`)// Navigate(`/`) //search?q=${query}
        }


        //const tagsArray = data.tags.split(';').map(tag => tag.trim());

        // await insertDocument({
        //     data: {
        //         ...data,
        //         tags: tagsArray
        //         },
        //     uid: user.uid,
        //     createdBy: user.displayName,
        //     });
    
        
            reset();

            //redirec page home
            //navigate("/")
    };

    return (

        <>
            <div className={styles.container}>
                
                
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

                {/* <div>
                    <TitleForm>
                        Todos os Posts
                    </TitleForm>

                    <DescriptionForm>
                        Veja o nossos pots mais recente
                    </DescriptionForm>

                </div> */}
                
                <div className={styles.content}>

                    <form className={styles.form} onSubmit={handleSubmit(handleSubmitData)}>
                        
                        <div className={styles.inputTex}>

                            <InputText 
                                nameComponent={'inputSearch'}
                                label={'Pesquisa'}
                                placeholder={'pesquise pelas tags do post'}
                                typeComponent={'text'}
                                register={register} // Passando o register para o componente InputText {... register(nameComponent)}
                            />
                        </div>

                        <div className={styles.boxButton}>
                            <Button type='submit' size='small' variant='contained' >Pesquisa</Button>
                        </div>
                    </form>
                     
                    {
                        posts && posts.length > 0 ?  
                        (
                            <Blog posts={posts}/>
                        ): 
                        (
                            <div>
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
                    } 

                </div>


            </div>
        </>
    )
}

export default BlogPage