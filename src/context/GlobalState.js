import React, { createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const intialState = {
    transactions : [
      
      ]
}

//crete context
export const GlobalContext = createContext(intialState)

//provider
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, intialState);

    //Actions
    function deleteTransaction(id){
        dispatch({ 
            type : 'DELETE_TRANSACATION',
            payload: id
        });
    }

    function addTransaction(transaction){
        dispatch({ 
            type : 'ADD_TRANSACATION',
            payload: transaction
        });
    }

    return(<GlobalContext.Provider value={{
        transactions : state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}