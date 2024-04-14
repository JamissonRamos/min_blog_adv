
import { db } from '../firebase/Config';

import {
    getAuth,
    //Criar usser no firebase
    createUserWithEmailAndPassword,
    //Fazer login no firebase
    signInWithEmailAndPassword,
    updateProfile,
    //Sair do login do firebase
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

    //Logout sign in
    const logout = () => {

        checkIfIsCancelled();

        signOut(auth)
    }

    //Login no sistema
    const login = async (data) => {
        console.log(data)
        checkIfIsCancelled();
        setError('')

        try {

    
            await signInWithEmailAndPassword(auth, data.email, data.password)

            
        } catch (error) {
            console.log(error.message)
            let systemErrorMessage = "";

            if (error.message.includes('user-not-found')){

                systemErrorMessage = "Usuário não encontrado.";

            }else if (error.message.includes('wrong-password')){

                systemErrorMessage = "A senha incorreta.";

            }else if (error.message.includes('invalid-credential')){

                systemErrorMessage = "Seu email ou senha está incorreta.";

            }else{
                systemErrorMessage = "Todo mundo erra e dessa vez foi agente. Tente mais tarde.";
            }

            setError(systemErrorMessage)
        }
    }


    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return{ auth, createUser, error, logout, login}

}