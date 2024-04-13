//React
import { useEffect, useState } from 'react';

//UseForm
import { useForm } from 'react-hook-form';

//Yup
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

//CSS
import styles from './Register.module.css'

//Material UI
import { Button, Typography,TextField, InputAdornment, IconButton, Alert, Stack, LinearProgress } from '@mui/material';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

//Hooks
import { useAuthentication } from '../../hooks/useAuthentication'


const schema = Yup.object().shape({
    displayName:Yup.string().min(3, 'Campo tem quer ter no mínimo 3 caracteres').required('Campo Obrigatório'),
    email:Yup.string().min(3, 'Campo tem quer ter no mínimo 3 caracteres').required('Campo Obrigatório'),
    password:Yup.string().min(6, 'Campo tem quer ter no mínimo 6 caracteres').required('Campo Obrigatório'),
    confirmPassword:Yup.string().min(6, 'Campo tem quer ter no mínimo 6 caracteres').required('Campo Obrigatório').oneOf([Yup.ref('password'), null], 'Senha não conferir'),
})

const componentsForm = [
    {id:1, typeComponent:'text', nameComponent:'displayName', placeholder:'Digite seu nome', label: 'Nome'},
    {id:2, typeComponent:'email', nameComponent:'email', placeholder:'Digite seu email', label: 'Email'},
    {id:3, typeComponent:'password', nameComponent:'password', placeholder:'Insira sua senha', label: 'Senha'},
    {id:4, typeComponent:'password', nameComponent:'confirmPassword', placeholder:'Confirme sua senha', label: 'Confirma Senha'}
]

const Register = () => {

    const { createUser, error: authError } = useAuthentication();
    const [errorRequest, setErrorRequest] = useState('');

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

    const { errors, isSubmitting } = formState

    console.log('erros', errors);
    console.log('isSubmitting', isSubmitting);

    const [visible, setVisible] = useState(false);

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

    const handleSubmitData = async (data) => 
    {
        console.log("handleSubmitData",data); // Faça algo com os dados do formulário

        const res = await createUser(data)

        console.log(res);

        reset();
    };

    useEffect(() => {
        
        if (authError) {
            
            setErrorRequest(authError);
        }

    }, [authError]);

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
                {
                    errorRequest && (

                        <Alert  sx={{width: '100%', padding: '0 .4rem', m: 0, border: 'none', fontSize: '0.2rem'}} variant="outlined" severity="error" >{errorRequest}</Alert>

                    )
                }

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
                                    
                                    <TextField 
                                        sx={{
                                            '& > :not(style)': {  m: 1, maxWidth: '94%', maxHeight: '100%' },
                                        }}
                                        fullWidth 
                                        id={nameComponent}
                                        label={label}
                                        placeholder={placeholder}
                                        type={typeComponent != 'password' ? typeComponent : visible ?  "text" : "password"}
                                        InputProps={typeComponent === 'password' && {
                                            endAdornment: (
                                            <EndAdornment visible={visible} setVisible={setVisible}/>
                                            )
                                        }}
                                        variant="outlined"
                                        {... register(nameComponent)}
                                    />
                                </div>

                                <div className={styles.boxErro}>
                                    {errors[nameComponent] && (
                                        <Alert   sx={{width: '100%', padding: '0 .4rem', m: 0, border: 'none', fontSize: '0.2rem'}} variant="outlined" severity="error" >{errors[nameComponent].message}</Alert>
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
                        > {isSubmitting ? 'enviando...' : 'Cadastrar'}     
                        </Button>
                    </div>
                </form>

            </div>
            
        </>
    )
}

export default Register