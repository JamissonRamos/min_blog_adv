
//React
// import { useEffect, useState } from 'react';

//UseForm
import { useForm } from 'react-hook-form';

//Yup
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

//Css
import styles from './CreatePost.module.css';

//Material UI
import { Button, Typography,TextField, Alert, Stack, LinearProgress   } from '@mui/material';
import Textarea from '@mui/joy/Textarea';
//Hooks
// import { useAuthentication } from '../../hooks/useAuthentication'

const schema = Yup.object().shape({
    title:Yup.string().min(3, 'Campo tem quer ter no mínimo 3 caracteres').required('Campo Obrigatório'),
    image:Yup.string(),
    body:Yup.string().min(6, 'Campo tem quer ter no mínimo 6 caracteres').required('Campo Obrigatório'),
    tags:Yup.string().required('Campo Obrigatório'),
})

const componentsForm = [
    {id:1, typeComponent:'text', nameComponent:'title', placeholder:'Digite um titulo', label: 'Título'},
    {id:2, typeComponent:'text', nameComponent:'image',  placeholder:'Insira um imagem que represente seu post', label: 'Imagem'},
    {id:3, typeComponent:'area ', nameComponent:'body', placeholder:'Insira o  conteúdo do post', label: 'Conteúdo'},
    {id:4, typeComponent:'text', nameComponent:'tags', placeholder:'', label: ''}
]

const CreatePost = () => {

    // const { createUser, error: authError } = useAuthentication();
    // const [errorRequest, setErrorRequest] = useState('');

    const { register, handleSubmit, formState, reset } = useForm({
        mode: 'all',
        resolver: yupResolver(schema),
        defaultValues: {
            title: '',
            image: '',
            body: '',
            tags: ''
        }
    });

    const { errors: formError, isSubmitting } = formState

    console.log('erros', formError);
    console.log('isSubmitting', isSubmitting);
    
    const handleSubmitData = async (data) => 
    {
        console.log("handleSubmitData",data); // Faça algo com os dados do formulário

        // const res = await createUser(data)

        // console.log(res);

        reset();
    };

    // useEffect(() => {
        
    //     if (authError) {
            
    //         setErrorRequest(authError);
    //     }

    // }, [authError]);

    return (

        <>

            <div className={styles.container}>

                {
                    isSubmitting && (

                        <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>

                        <LinearProgress color="success" />

                        </Stack>
                    )
                }

                {/* {
                    errorRequest && (

                    <Alert  sx={{width: '100%', padding: '0 .4rem', m: 0, border: 'none', fontSize: '0.2rem'}} variant="outlined" severity="error" >{errorRequest}</Alert>

                    )
                } */}

                <div>
                    <Typography
                        sx={{color: 'var(--verde-800)', fontWeight: 'bold'}}
                        variant='h4'
                    >
                        Registrar
                    </Typography>

                    <Typography
                        sx={{color: 'var(--cinza-800)'}}
                        paragraph
                    >
                        Cadastre-se para postar
                    </Typography>
                </div>


                <form className={styles.form} onSubmit={handleSubmit(handleSubmitData)}>

                    {
                        componentsForm.map(({id, typeComponent, nameComponent, label, placeholder}) => (

                            <div className={styles.boxInput} key={id}>

                                <div className={styles.boxContainerInput}>

                                    {typeComponent === 'text' ?

                                        <TextField 
                                            sx={{
                                            '& > :not(style)': {  m: 1, maxWidth: '94%', maxHeight: '100%' },
                                            }}
                                            
                                            fullWidth 
                                            id={nameComponent}
                                            label={label}
                                            placeholder={placeholder}
                                            type={typeComponent}
                                            // variant="outlined"
                                            {... register(nameComponent)}
                                        />
                                    :
                                        <div className={styles.textArea}>

                                            <Textarea 
                                                size="lg" 
                                                id={nameComponent}
                                                label={label}
                                                placeholder={placeholder}
                                                type={typeComponent}
                                                variant="outlined"
                                                {... register(nameComponent)} 
                                            />
                                                
                                        </div>
                                    }
                                </div>

                                <div className={styles.boxErro}>
                                    {formError[nameComponent] && (
                                        <Alert   sx={{width: '100%', padding: '0 .4rem', m: 0, border: 'none', fontSize: '0.2rem'}} variant="outlined" severity="error" >{formError[nameComponent].message}</Alert>
                                    )}
                                </div>

                            </div>
                        ))
                    }

                    <div className={styles.button}>
                        <Button
                            sx={{width: '200px'}}
                            variant='contained'
                            type='submit'
                            disabled={isSubmitting}
                        > 
                            {isSubmitting ? 'enviando...' : 'Posta'}     
                        </Button>
                    </div>
                </form>

            </div>

        </>
    )
}

export default CreatePost