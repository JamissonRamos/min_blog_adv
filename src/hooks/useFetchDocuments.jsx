import { useState, useEffect } from "react";
import { db } from "../firebase/Config";
import {
    collection,
    query,
    orderBy,
    onSnapshot,
    where,
} from "firebase/firestore";


export const useFetchDocuments = (docCollection, search = null, uid = null) => {
    const [documents, setDocuments] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    // console.log(uid);

        
    // deal with memory leak
    const [cancelled, setCancelled] = useState(false);

    useEffect(() => {

        async function loadData() {

            if (cancelled) {
                return;
            }
    
            setLoading(true);
    
            const collectionRef = await collection(db, docCollection);
    
            try {
                
                let q;
                
                if (search) {
                    // console.log(search)
                    q = await query(    
                        collectionRef,
                        where("data.tags", "array-contains", search),
                        orderBy("createdAt", "desc")
                    );

                    // console.log(q)
                }else if (uid) {

                    q = await query(
                        collectionRef,
                        where("uid", "==", uid),
                        orderBy("createdAt", "desc")
                    );

                }else {

                    q = await query(collectionRef, orderBy("createdAt", "desc"));

                }
        
                await onSnapshot(q, (querySnapshot) => {
                    
                    // console.log(querySnapshot)

                    setDocuments(

                        querySnapshot.docs.map((doc) => ({

                            id: doc.id,
                            ...doc.data(),

                        }))
                    );

                });
                
                setLoading(false);

            } catch (error) {

                // console.log(error);
                setError(error.message);
            }
    
            setLoading(false);
        
        }
    
        loadData();
    }, [ search, uid, cancelled]);
    

    // //console.log(documents);

    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return { documents, loading, error };
};