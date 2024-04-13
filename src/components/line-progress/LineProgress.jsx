

//Material UI
import { Stack, LinearProgress } from '@mui/material';

const LineProgress = () => {

    return (

        <>
            <Stack sx={{ width: '100%',  color: 'grey.500' }} spacing={2}>

                <LinearProgress color="success" />

            </Stack>
        </>

    )
    }

export default LineProgress