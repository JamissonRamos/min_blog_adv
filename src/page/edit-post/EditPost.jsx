
//React
import { useNavigate, useParams } from 'react-router-dom';

//UseForm
import { useForm } from 'react-hook-form';

//Yup
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

//Css
import styles from './EditPost.module.css';

//Material UI
import { Button, Alert } from '@mui/material';

//Contexto
import { useAuthValue } from '../../context/AuthContext'

//Hooks
import { useFetchDocument } from '../../hooks/useFetchDocument';
import { useUpdateDocument } from '../../hooks/useUpdateDocument';


//Components
import LineProgress from '../../components/line-progress/LineProgress'
import TitleForm from '../../components/components-form/TitleForm';
import DescriptionForm from '../../components/components-form/DescriptionForm';
import InputText from '../../components/components-form/InputText';
import { useEffect } from 'react';


const schema = Yup.object().shape({
    title:Yup.string().min(3, 'Campo tem quer ter no mínimo 3 caracteres').required('Campo Obrigatório'),
    image:Yup.string().url('O campo image deve ser uma URL válida').required('Campo Obrigatório'),
    body:Yup.string().min(6, 'Campo tem quer ter no mínimo 6 caracteres').required('Campo Obrigatório'),
    // tags:Yup.string().required('Campo Obrigatório').split('; ').map(tag => `#${tag.toUpperCase()}`).join(';') ,
    tags: Yup.string().transform(value => {
        if (typeof value === 'string') {
            const tagsArray = value.split('; ').map(tag => `${tag.trim().toLowerCase().replace(/ /g, '')}`);
            return tagsArray.join(';');
        }
        return '';
    }).required('Campo Obrigatório')
})

const componentsForm = [
    {id:1, typeComponent:'text', nameComponent:'title', placeholder:'Digite um titulo', label: 'Título'},
    {id:2, typeComponent:'text', nameComponent:'image',  placeholder:'Insira um imagem que represente seu post', label: 'Imagem'},
    {id:3, typeComponent:'textArea', nameComponent:'body', placeholder:'Insira o  conteúdo do post', label: 'Conteúdo'},
    {id:4, typeComponent:'text', nameComponent:'tags', placeholder:'Coloque suas tags separadas por ; ', label: 'Tags'}
]

const EditPost = () => {

    const {id: idParams} = useParams()
    const user = useAuthValue();
    const navigate = useNavigate();


    const { updateDocument, response } = useUpdateDocument("posts")
    const  { document: post, loading, error: errorLoadingDocument } = useFetchDocument("posts", idParams)

    // console.log(post);

    // const [errorRequest, setErrorRequest] = useState('');

    const { handleSubmit, control, formState, reset } = useForm({
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

    const handleSubmitData = async (data) => 
    {
        const tagsArray = data.tags.split(';').map(tag => tag.trim());

        await updateDocument({
            uid: idParams,
            // data: {
                ...data,
                tags: tagsArray
                // },
            });
    
        
            reset();

            //redirec page home
            navigate("/")
    };

    // Adicione o useEffect aqui
    useEffect(() => {
        if (post) {
            reset(post.data);
        }
    }, [post, reset]);

    return (

        <>

            <div className={styles.container}>

                { isSubmitting && ( <LineProgress/> ) }
                { loading && ( <LineProgress/> ) }

                {
                    response.error && (

                    <Alert  
                        sx={{width: '100%', padding: '0 .4rem', m: 0, border: 'none', fontSize: '0.2rem'}} 
                        variant="outlined" 
                        severity="error" >
                            {response.error}
                    </Alert>

                    )
                }
                {
                    errorLoadingDocument && (

                    <Alert  
                        sx={{width: '100%', padding: '0 .4rem', m: 0, border: 'none', fontSize: '0.2rem'}} 
                        variant="outlined" 
                        severity="error" >
                            {errorLoadingDocument}
                    </Alert>

                    )
                }

                <div>
                    <TitleForm>
                        Editando Post
                    </TitleForm>

                    <DescriptionForm>
                        Editando o seu post 
                    </DescriptionForm>

                </div>

                <form className={styles.form} onSubmit={handleSubmit(handleSubmitData)}>

                    {
                        componentsForm.map(({id, typeComponent, nameComponent, label, placeholder}) => (
                            
                            <div className={styles.boxInput} key={id}>

                                <div className={styles.boxContainerInput}>
                                    
                                    <div className={styles.inputTex}>

                                        <InputText 
                                            nameComponent={nameComponent}
                                            label={label}
                                            placeholder={placeholder}
                                            typeComponent={typeComponent}
                                            control={control}
                                        />

                                        {
                                            post && nameComponent === "image" ? 
                                                <div className={styles.headerCard}>

                                                    <img className={styles.headerCardImg} src={post.data.image} alt={post.data.title} />
        
                                                </div> : null
                                        }

                                    </div>
                                    

                                </div>

                                <div className={styles.boxErro}>
                                    {formError[nameComponent] && (
                                        <Alert   
                                            sx={{width: '100%', padding: '0 .4rem', m: 0, border: 'none', fontSize: '0.2rem'}}
                                            variant="outlined" severity="error" >
                                                {formError[nameComponent].message}
                                        </Alert>
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
                            {isSubmitting ? 'enviando...' : 'Editar'}     
                        </Button>
                    </div>
                </form>

            </div>

        </>
    )
}

export default EditPost