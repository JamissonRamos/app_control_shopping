import { collection, getDocs } from "firebase/firestore"; 
import { db } from '../../../services/firebase/config';

export const useGetCollection = () => {
    const collectionName = 'product' 
    const getCollection = async () => {
        try {            
            const docRef = collection(db, collectionName); // Referência ao documentos
           const docSnap = await getDocs(docRef); // Recupera o documentos
             // Mapeia os documentos para um array
            const documents = docSnap.docs.map(doc => ({
                uid: doc.id, // Recupera o uid do documento
                ...doc.data()
            }));            
            return {success: true, data: documents };
        }catch (error) {
            console.error("Erro ao recuperar todos os documento:", error.message);
            return { success: false, error: error.message };
        }
    };

    return { getCollection };
};


