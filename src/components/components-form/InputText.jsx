
//Material UI
import { TextField } from '@mui/material';


const InputText = ({nameComponent,label,placeholder,typeComponent, register}) => {

    return (

        <>
            {
                typeComponent === 'text' && (
                    <TextField 
                        sx={{
                        '& > :not(style)': {  mt: 1.2, maxWidth: '100%' },
                        }}
                        size='small'
                        fullWidth 
                        variant="outlined"
                        id={nameComponent}
                        label={label}
                        placeholder={placeholder}
                        type={typeComponent}
                        {... register(nameComponent)}
                    /> 
                )}

            {
                typeComponent === 'textArea' && ( 
                    <TextField 
                        sx={{
                        '& > :not(style)': {  mt: 1.2, maxWidth: '100%' },
                        }}
                        size='small'
                        fullWidth 
                        variant="outlined"
                        multiline
                        maxRows={20}
                        minRows={6}
                        id={nameComponent}
                        label={label}
                        placeholder={placeholder}
                        type={typeComponent}
                        {... register(nameComponent)}
                    />
                )}

        </>

    )
}

export default InputText