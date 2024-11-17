import { useState, useCallback } from "react";
import { useCollectionCreate } from "../firebase/product/usePostCollectionCreate"

export const usePostDocumentsCreate = () => {
    const [loading, setLoading] = useState(false);
    //const [errorCreate, setErrorCreate] = useState(null);

    const {collectionCreate} = useCollectionCreate();
    
    const createStudent = useCallback(async (data) => {

        setLoading(true);
        //setErrorCreate(null);

        try {
            const result = await x(data ); //collectionCreate
            const {success, uid, message } = result;

            if(success){

                return { success: true, uid: uid };
            }
            else{
                //setErrorCreate('Algo não sair como esperado tente novamente: ' + message)
                return {success: false, message: message}
            }

        } catch (error) {
            //setErrorCreate('Erro ao criar coleção: ' + error.message)
            return { success: false, message: error.message };

        } finally {
            setLoading(false);
        }
    }, [collectionCreate]);
    
    return {
        createStudent, loading
    }
}