
    //Material UI
    import { TextField } from '@mui/material';
    import { useController } from 'react-hook-form';


    const InputText = ({nameComponent, label, placeholder, typeComponent, control}) => {
        const { field } = useController({
            name: nameComponent,
            control,
        });
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
                            //{... register(nameComponent)}
                            //defaultValue={defaultValue}

                            // value={value}
                            // onChange={onChange}
                            // onBlur={onBlur}

                            {...field}

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
                            //{... register(nameComponent)}
                            // defaultValue={defaultValue}
                            // onChange={onChange}
                            // onBlur={onBlur}
                            {...field}
                            
                        />
                    )}

            </>

        )
    }

    export default InputText