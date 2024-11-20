import { useCallback } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from '../../../services/firebase/config';

export const usePostCollectionDelete = () => {
    const collectionName = 'product'
    const collectionDelete = useCallback(async (uid) => {
        try {
            // Referência ao documento que você deseja excluir
            const docRef = doc(db, collectionName, uid);
            await deleteDoc(docRef); // Exclui o documento
            return { success: true };
        } catch (error) {
            console.error('Error ao excluir item da coleção:', error);
            return { success: false, message:`Error ao tenta excluir: ${error.message}` };
        }
    }, []);
    
    return { collectionDelete };
};


