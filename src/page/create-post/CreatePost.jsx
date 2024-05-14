
//React
import { useNavigate } from 'react-router-dom';

//UseForm
import { useForm } from 'react-hook-form';

//Yup
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

//Css
import styles from './CreatePost.module.css';

//Material UI
import { Button, Alert } from '@mui/material';

//Contexto
import { useAuthValue } from '../../context/AuthContext'

//Hooks
import { useInsertDocuments } from '../../hooks/useInsertDocuments';

//Components
import LineProgress from '../../components/line-progress/LineProgress'
import TitleForm from '../../components/components-form/TitleForm';
import DescriptionForm from '../../components/components-form/DescriptionForm';
import InputText from '../../components/components-form/InputText';

const schema = Yup.object().shape({
    title:Yup.string().min(3, 'Campo tem quer ter no mínimo 3 caracteres').required('Campo Obrigatório'),
    image:Yup.string().url('O campo image deve ser uma URL válida').required('Campo Obrigatório'),
    body:Yup.string().min(6, 'Campo tem quer ter no mínimo 6 caracteres').required('Campo Obrigatório'),
    // tags:Yup.string().required('Campo Obrigatório').split('; ').map(tag => `#${tag.toUpperCase()}`).join(';') ,
    tags: Yup.string().transform(value => {
        const tagsArray = value.split('; ').map(tag => `${tag.trim().toLowerCase().replace(/ /g, '')}`); // Remove todos os espaços em branco 
            return tagsArray.join(';');
    }).required('Campo Obrigatório')
})

const componentsForm = [
    {id:1, typeComponent:'text', nameComponent:'title', placeholder:'Digite um titulo', label: 'Título'},
    {id:2, typeComponent:'text', nameComponent:'image',  placeholder:'Insira um imagem que represente seu post', label: 'Imagem'},
    {id:3, typeComponent:'textArea', nameComponent:'body', placeholder:'Insira o  conteúdo do post', label: 'Conteúdo'},
    {id:4, typeComponent:'text', nameComponent:'tags', placeholder:'Coloque suas tags separadas por ; ', label: 'Tags'}
]

const CreatePost = () => {

    const { insertDocument, response } = useInsertDocuments("posts"); // error: authError

    const user = useAuthValue();
    const navigate = useNavigate();

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

        await insertDocument({
            data: {
                ...data,
                tags: tagsArray
                },
            uid: user.uid,
            createdBy: user.displayName,
            });
    
        
            reset();

            //redirec page home
            navigate("/")
    };

    return (

        <>

            <div className={styles.container}>

                { isSubmitting && ( <LineProgress/> ) }

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

                <div>
                    <TitleForm>
                        Criando Post
                    </TitleForm>

                    <DescriptionForm>
                        Crie seu post e compartilhe seu conhecimento
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
                                            //register={register} // Passando o register para o componente InputText {... register(nameComponent)}
                                            control={control}
                                        />

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
                            {isSubmitting ? 'enviando...' : 'Posta'}     
                        </Button>
                    </div>
                </form>

            </div>

        </>
    )
}

export default CreatePost