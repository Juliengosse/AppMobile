import React, { createContext, useContext, useState } from "react";
import { Question } from "./useData";


type QuestionContextType = {
  questionMode: Question[];
  setQuestionMode: React.Dispatch<React.SetStateAction<Question[]>>;
};

const QuestionContext = createContext<QuestionContextType | undefined>(undefined);

export const QuestionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [questionMode, setQuestionMode] = useState<Question[]>([]);
  return (
    <QuestionContext.Provider value={{ questionMode, setQuestionMode }}>
      {children}
    </QuestionContext.Provider>
  );
};

export const useQuestionContext = () => {
  const context = useContext(QuestionContext);
  if (!context) {
    throw new Error("useQuestionContext doit être utilisé à l'intérieur de QuestionProvider");
  }
  return context;
};
