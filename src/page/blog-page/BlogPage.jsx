
//UseForm
import { useForm } from 'react-hook-form';

//Yup
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import InputText from '../../components/components-form/InputText';
//Css
// import DescriptionForm from '../../components/components-form/DescriptionForm';
// import TitleForm from '../../components/components-form/TitleForm';
import styles from './BlogPage.module.css';
import Blog from '../../components/blog/Blog';
import { Alert, Button } from '@mui/material';
import LineProgress from '../../components/line-progress/LineProgress';

const schema = Yup.object().shape({
    search:Yup.string()
})

const BlogPage = () => {

    const { register, handleSubmit, formState, reset } = useForm({
        mode: 'all',
        resolver: yupResolver(schema),
        defaultValues: {
            search: ''
        }
    });

    const { errors: formError, isSubmitting } = formState

    const handleSubmitData = async (data) => 
    {
        console.log(data)
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
                
                
                { isSubmitting && ( <LineProgress/> ) }

                {
                    formError.error && (

                    <Alert  
                        sx={{width: '100%', padding: '0 .4rem', m: 0, border: 'none', fontSize: '0.2rem'}} 
                        variant="outlined" 
                        severity="error" >
                            {formError.error}
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
                                nameComponent={'Pesquisa'}
                                label={'Pesquisa'}
                                placeholder={'pesquise pelas tags do post'}
                                typeComponent={'text'}
                                register={register} // Passando o register para o componente InputText {... register(nameComponent)}
                            />
                        </div>

                        <div className={styles.boxButton}>
                            <Button size='small' variant='contained' >Pesquisa</Button>
                        </div>
                    </form>
                    
                    <Blog />

                </div>


            </div>
        </>
    )
}

export default BlogPage