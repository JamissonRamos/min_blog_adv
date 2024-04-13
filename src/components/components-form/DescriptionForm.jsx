
//Material UI
import { Typography } from '@mui/material';


const DescriptionForm = ({children}) => {
    console.log (children)
    return (

        <>
            <Typography
                sx={{color: 'var(--cinza-800)'}}
                alignItems={'center'}
            >

                {children}    

            </Typography>
        </>
    )
}

export default DescriptionForm