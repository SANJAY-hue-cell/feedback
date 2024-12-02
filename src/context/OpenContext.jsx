import React, { useState } from "react";
import { createContext } from "react";

const questions = [
    {
        no : 1 ,
        question : "What is ur name ?" ,
        options : [
            "Hello" ,
            "hello"
         ] ,
        answer : "Hello"
    } ,
    {
        no : 1 ,
        question : "What is ur name ?" ,
        options : [
            "Hello" ,
            "hello"
         ] ,
        answer : "Hello"
    }
]

export const Contexts = createContext() ;

const ContextsProvider = ({children}) => {

    const [submittedValues, setSubmittedValues] = useState(null);

    const [suggestions , setSuggestions] = useState('') ;
    
    // display responses
    const [showResponses , setShowResponses] = useState(null) ;

    const [responses, setResponses] = useState([]); // Store responses

    const value = {
        questions ,
        submittedValues , setSubmittedValues ,
        showResponses , setShowResponses ,
        responses , setResponses ,
        suggestions , setSuggestions
    }
    return(
        <Contexts.Provider value={value}>
            {children}
        </Contexts.Provider>
    )
}

export default ContextsProvider ;