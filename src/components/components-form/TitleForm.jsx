

//Material UI
import {  Typography } from '@mui/material';

const TitleForm = ({children}) => {

    return (

        <>

            <Typography
                sx={{ color: 'var(--verde-800)', fontWeight: 'bold'}}
                variant='h4'
            >
                {children}
                
            </Typography>
        </>

    )
}

export default TitleForm