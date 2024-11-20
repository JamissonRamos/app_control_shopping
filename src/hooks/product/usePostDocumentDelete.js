import { useState, useCallback } from "react";
import { usePostCollectionDelete } from "../firebase/product/usePostCollectionDelete";

export const usePostDocumentDelete = () => {

    const [loading, setLoading] = useState(false)
    // const [error, setError] = useState(null);
    const {collectionDelete} = usePostCollectionDelete();

    const documentsDelete = useCallback( async (uid) => {

        setLoading(true);
        // setError(null);
        try {
            const result = await collectionDelete(uid)
            if(result.success)
            {
                return { success: true};
            }else {
                return { success: false,  message: result.message };
            }
        } catch (error) {
            console.log('Erro ao atualizar os dados: ', error.message);
            return { success: false,  message: error.message };
        } finally {
            setLoading(false);
        }

    }, [collectionDelete])

    return {
        documentsDelete,
        loading
    }
}