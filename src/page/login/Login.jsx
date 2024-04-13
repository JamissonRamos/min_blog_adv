//React
import { useEffect, useState } from 'react';

//Css
import styles from './Login.module.css'

//Yup
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

//Hooks
import { useForm } from 'react-hook-form'; //Biblioteca de form
import { useAuthentication } from '../../hooks/useAuthentication'; //Autenticação do sistema

//Material UI
import { Button, Typography,TextField, InputAdornment, IconButton, Alert, Stack, LinearProgress } from '@mui/material';

//Components
import LineProgress from '../../components/line-progress/LineProgress'
import TitleForm from '../../components/components-form/TitleForm';
import DescriptionForm from '../../components/components-form/DescriptionForm';

//Icons
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

//Validações do form
const schema = Yup.object().shape({
    email:Yup.string().min(3, 'Campo tem quer ter no mínimo 3 caracteres').required('Campo Obrigatório'),
    password:Yup.string().min(6, 'Campo tem quer ter no mínimo 6 caracteres').required('Campo Obrigatório'),
})

//Componentes do form
const componentsForm = [
    {id:1, typeComponent:'email', nameComponent:'email', placeholder:'Digite seu email', label: 'Email'},
    {id:2, typeComponent:'password', nameComponent:'password', placeholder:'Insira sua senha', label: 'Senha'},
]


const Login = () => {
    //Ativar e desativar icon de senha
    const [visible, setVisible] = useState(false);
    //Autenticação 
    const { createUser, error: authError } = useAuthentication();
    const [errorRequest, setErrorRequest] = useState('');

    //Components do react-hook-form
    const { register, handleSubmit, formState, reset } = useForm({
        mode: 'all',
        resolver: yupResolver(schema),
        defaultValues: {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    });

    const { errors: formErro, isSubmitting } = formState;


    //Função do form
    const handleSubmitData = async (data) => 
    {
        console.log("handleSubmitData",data); // Faça algo com os dados do formulário

        const res = await createUser(data)

        console.log(res);

        reset();
    };

    const EndAdornment = ({visible, setVisible}) => {
        
        return(

            <InputAdornment  position="end" >
                
                <IconButton 
                    onClick={() => setVisible(!visible)} 
                >
                {
                    visible ? <VisibilityIcon /> :  <VisibilityOffIcon />
                } 
                </IconButton>

            </InputAdornment>
        )
    };

    //Manitorando o erro da chamada da autenticação do sistema
    useEffect(() => {
        
        if (authError) {
            
            setErrorRequest(authError);
        }

    }, [authError]);

    return (

        <>  
            <div className={styles.container}>
                {
                    isSubmitting && 
                    (
                        <LineProgress />
                    )
                }

                {
                    errorRequest && (

                        <Alert  
                            sx={{width: '100%', padding: '0 .4rem', m: 0, border: 'none', fontSize: '0.2rem'}} 
                            variant="filled" 
                            severity="error" 
                        >
                            {errorRequest}
                        </Alert>

                    )
                }

                <div className={styles.boxTitleDescription}>
                    <TitleForm>
                        Entrar
                    </TitleForm>

                    <DescriptionForm >
                        Faça seu login para usar o blog
                    </DescriptionForm>
                </div>

                <form className={styles.form} onSubmit={handleSubmit(handleSubmitData)}>

                    {
                        componentsForm.map(({id, typeComponent, nameComponent, label, placeholder}) => (
                        
                            <div className={styles.boxInput} key={id}>

                                <div className={styles.boxContainerInput}>

                                    <TextField 
                                        sx={{
                                            '& > :not(style)': {  m: 1, maxWidth: '94%', maxHeight: '100%' },
                                        }}
                                        fullWidth 
                                        id={nameComponent}
                                        label={label}
                                        placeholder={placeholder}
                                        type={typeComponent != 'password' ? typeComponent : visible ?  "text" : "password"}
                                        variant="outlined"
                                        InputProps={typeComponent === 'password' && {
                                            endAdornment: (
                                                <EndAdornment visible={visible} setVisible={setVisible}/>
                                            )
                                        }}
                                        {... register(nameComponent)}
                                    />
                                </div>

                                <div className={styles.boxErro}>
                                    {formErro[nameComponent] && (
                                        <Alert   
                                            sx={{width: '100%', padding: '0 .4rem', m: 0, border: 'none', fontSize: '0.2rem'}} 
                                            variant="outlined" 
                                            severity="error" 
                                        >
                                            {formErro[nameComponent].message}
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
                            {isSubmitting ? 'Carregando dados...' : 'Fazer login'}     
                        </Button>
                    </div>
                </form>

            </div>          
        </>
    )
}

export default Login