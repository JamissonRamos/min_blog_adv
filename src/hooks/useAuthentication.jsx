
import { db } from '../firebase/Config';

import {
    getAuth,
    createUserWithEmailAndPassword,
    // signInWithEmailAndPassword,
    updateProfile,
    signOut,
    
} from 'firebase/auth';

import { useEffect, useState } from 'react';


export const useAuthentication = () => {

    const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(null); //Estou usando a função do react-form-hook isSubmitting
    //Cleanup
    //deal with memory leak
    const [ cancelled, setCancelled] = useState(false);

    const auth = getAuth();

    function checkIfIsCancelled() {

        if(cancelled){
            return;
        }
    }

    const createUser = async (data) => {

        checkIfIsCancelled();

        // setLoading(true);
        setError(null);
        
        try {

            const { user } = await createUserWithEmailAndPassword(

                auth,
                data.email,
                data.password
            )

            await updateProfile(user, {
                displayName: data.displayName
            })

            return user
            
        } catch (error) {
            
            console.log( 'Erros: ', error.message)
            console.log( 'Tipo Erros: ', typeof error.message)

            let systemErrorMessage

            if (error.message.includes('email-already'))
            {
                systemErrorMessage = 'E-mail já cadastrado.'

            }else{

                systemErrorMessage = 'Ocorreu um erro, por favor tente mais tarde.'
            }

            setError(`Erros: ${systemErrorMessage}`)
        }
        
        // setLoading(false)
    }

    //Logout sin in
    const logout = () => {

        checkIfIsCancelled();

        signOut(auth)
    }


    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return{ auth, createUser, error, logout}

}