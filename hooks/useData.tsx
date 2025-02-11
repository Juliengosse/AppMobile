import { useState } from 'react';
import { collection, query, where, getDocs, onSnapshot } from 'firebase/firestore';
import { firestoreDb } from './../firebaseConfig';

export interface Question {
    id: number;
    text: string;
    categorie: string;
    joueur: boolean;
    reponse: boolean;
    ifReponse: string
}


export const useData = (gameMode: string) => {

    const [questions, setQuestions] = useState<
        { id: number; text: string; categorie: string; joueur: boolean; reponse: boolean; ifReponse: string }[]
    >([]);

    const getQuestions = async () => {

        const fetchedQuestions: {
            id: number;
            text: string;
            categorie: string;
            joueur: boolean;
            reponse: boolean;
            ifReponse: string;
        }[] = [];

        const snapshot = await getDocs(collection(firestoreDb, "hot"));

        snapshot.forEach((doc: { data: () => any; }) => {

          const data = doc.data();

          fetchedQuestions.push({
            id: data.id ?? 0, // Assurez-vous que Firestore retourne une valeur numérique
            text: data.text ?? '', // Texte de la question
            categorie: data.categorie ?? 'inconnue', // Catégorie ou valeur par défaut
            joueur: data.joueur ?? false, // booléen pour joueur
            reponse: data.reponse ?? false, // booléen pour réponse
            ifReponse: data.ifReponse ?? '', // Texte en cas de réponse
          });
        });

        setQuestions(fetchedQuestions);
        
    }

    return { questions };
}
