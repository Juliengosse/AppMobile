import React, { useState } from 'react';
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { firestoreDb } from "../../firebaseConfig";

export interface Question{
    id: string;
    questionStatement: string;
    gameMode: string[]
}

const useData = () => {

    const [questions, setQuestions] = useState<Question[]>([]);

    const addQuestions = async (questionStatement: string, gameMode: string[]) => {
        try {
            const doc = await addDoc(collection(firestoreDb, 'questions'), { 
                questionStatement: questionStatement,
                gameMode: gameMode
            });
            console.log('Todo ajouté avec succès. Document ID:', doc.id);
        } catch (error) {
            console.error('Erreur lors de l\'ajout du Todo:', error);
        }
    }

    const getQuestions = () => {

        const questionRef = collection(firestoreDb, "questions");
        const subscriber = onSnapshot(questionRef, {
            next: (snapshot) => {
                const fetchedQuestions: Question[] = snapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        questionStatement: doc.data().questionStatement,
                        gameMode: doc.data().gameMode
                    };
                });
                setQuestions(fetchedQuestions);
            }
        })

        return () => subscriber();
    }

    return { questions, addQuestions, getQuestions };
}

export default useData;