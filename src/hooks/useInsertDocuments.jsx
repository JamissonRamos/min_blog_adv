import { useState, useReducer} from "react";
import { db } from "../firebase/Config";
import { Timestamp, addDoc, collection } from "firebase/firestore";


const initialState = {

    loaging: null,
    error: null,
    success: null,
}

const insertReducer = (state, action) => {

    switch(action.type){

        case "LOADING":
            return {loading: true, error: null, success: null};
        case "INSERTED_DOC":
            return {loading: false, error: null, success: true};
        case "ERROR":
            return {loading: false, error: action.payload, success: null};
        default:
            return state;
    }

}


export const useInsertDocuments = (docCollection) => {

    // console.log('Entrou no useInsertDocument')

    const [response, dispatch] = useReducer(insertReducer, initialState);

    //Deal with memory leak
    const [cancelled] = useState(false);

    const checkCancelBeforeDispatch = (action) => {

        if(!cancelled){
            dispatch(action)
        }
    }

    const insertDocument = async (document) => {

        // console.log('documentos:', document)

        checkCancelBeforeDispatch({
            type:'LOADING'
        })

        try {
            
            const newDocument = {...document, createdAt: Timestamp.now()}

            // console.log(newDocument)

            const insertDocument = await addDoc(
                collection(db, docCollection), 
                newDocument
            )

            checkCancelBeforeDispatch({
                type: 'INSERTED_DOC',
                payload: insertDocument
            })


        } catch (error) {

            // console.log('erro use Insert: ', error.message)

            checkCancelBeforeDispatch({
                type: 'ERROR',
                payload: error.message
            })
            
        }
    }

    // useEffect(() => {
    //     return setCancelled(true)
    // },[])

    return { insertDocument, response}
}
