import { useState, useCallback, useContext } from "react";
import { usePostCollectionUpdate } from "../firebase/product/usePostCollectionUpdate";



export const usePostDocumentsUpdate = () => {
    const [loading, setLoading] = useState(false);
    const {collectionUpdate} = usePostCollectionUpdate();
    // const [errorUpdate, setErrorUpdate] = useState(null);


    const UpdateProduct = useCallback( async (userData) => {

        setLoading(true);
        // setErrorUpdate(null);        
        try {
            const result = await collectionUpdate(userData)
            const {success, message } = result;
            
            if(success)
            {
                return { success: true };
            }else {
                return { success: false, message: message };
            }
            
        } catch (error) {
            console.log('Erro ao atualizar os dados: ', error.message);
            return { success: false,  message: error.message };
        } finally {
            setLoading(false);
        }

    }, [collectionUpdate])

    return {
        UpdateProduct,
        loading
    }

}