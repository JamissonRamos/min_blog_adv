
//React
import { useState } from 'react';

//CSS
import styles from './Register.module.css'

//Material UI
import { Button, Typography,TextField, InputAdornment, IconButton } from '@mui/material';
// import InputAdornment from '@mui/material/InputAdornment';
// import IconButton from '@mui/material/IconButton';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const componentsForm = [
    {id:1, typeComponent:'text', nameComponent:'nome', placeholder:'Digite seu nome', label: 'Nome'},
    {id:2, typeComponent:'text', nameComponent:'email', placeholder:'Digite seu email', label: 'Email'},
    {id:3, typeComponent:'password', nameComponent:'password', placeholder:'Insira sua senha', label: 'Senha'},
    {id:4, typeComponent:'password', nameComponent:'confirmPassword', placeholder:'Confirme sua senha', label: 'Confirma Senha'}
]

const Register = () => {

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

    return (

        <>
            <div className={styles.container}>

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

                <form className={styles.form}>


                    {
                        componentsForm.map(({id, typeComponent, nameComponent, label, placeholder}) => (

                            typeComponent === 'text' ? (

                                <TextField 
                                    key={id}
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '85%' },
                                    }}
                                    id={nameComponent}
                                    label={label}
                                    placeholder={placeholder}
                                    variant="outlined"
                                    required
                                />

                            ) : (
                                <TextField
                                    key={id}
                                    sx={{
                                    '& > :not(style)': { m: 1, width: '85%' },
                                    }}
                                    id={nameComponent}
                                    label={label}
                                    placeholder={placeholder}
                                    variant="outlined"
                                    required
                                    type={ visible ?  "text" : "password"} 
                                    InputProps={{
                                        endAdornment: (
                                        <EndAdornment visible={visible} setVisible={setVisible}/>
                                        ),
                                    }}
                                />
                            )
                        ))
                    }


                    <div className={styles.button}>
                        <Button
                            sx={{width: '200px'}}
                        variant='contained'> Cadastrar </Button>
                    </div>
                </form>

            </div>
            
        </>
    )
}

export default Register

{/* 
                    <label className={styles.label} >
                        <span>Nome:</span>
                        <input
                            className={styles.input}
                            type="text"
                            name='displayName'
                            required
                            placeholder='Digite seu nome'
                        />
                    </label>
                    <label className={styles.label} >
                        <span>Email:</span>
                        <input 
                            className={styles.input}
                            type="email"
                            name='email'
                            required
                            placeholder='Digite seu email'
                        />
                    </label>
                    <label className={styles.label} >
                        <span>Senha:</span>
                        <input 
                            className={styles.input}
                            type="password"
                            name='password'
                            required
                            placeholder='Insira sua senha'
                        />
                    </label>
                    <label className={styles.label} >
                        <span>Confirmação da Senha:</span>
                        <input 
                            className={styles.input}
                            type="password"
                            name='confirmPassword'
                            required
                            placeholder='Confirme sua senha'
                        />
                    </label> */}