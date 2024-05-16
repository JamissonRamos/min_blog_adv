import { useState, useReducer} from "react";
import { db } from "../firebase/Config";
import { doc, deleteDoc } from "firebase/firestore";


const initialState = {

    loaging: null,
    error: null,
    success: null,
}

const deleteReducer = (state, action) => {

    switch(action.type){

        case "LOADING":
            return {loading: true, error: null, success: null};
        case "DELETED_DOC":
            return {loading: false, error: null, success: true};
        case "ERROR":
            return {loading: false, error: action.payload, success: null};
        default:
            return state;
    }

}


export const useDeleteDocuments = (docCollection) => {

    // console.log('Entrou no useInsertDocument')

    const [response, dispatch] = useReducer(deleteReducer, initialState);

    //Deal with memory leak
    const [cancelled] = useState(false);

    const checkCancelBeforeDispatch = (action) => {

        if(!cancelled){
            dispatch(action)
        }
    }

    const deleteDocument = async (id) => {

        checkCancelBeforeDispatch({
            type:'LOADING'
        })

        try {
            
            const deletedDocument = deleteDoc(doc(db, docCollection, id))

            checkCancelBeforeDispatch({
                type: 'DELETED_DOC',
                payload: deletedDocument
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

    return { deleteDocument, response, }
}
