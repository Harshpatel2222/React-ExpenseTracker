export default (state, action) => {
    switch(action.type) {
        case 'DELETE_TRANSACATION':
            return{
                ...state,
                transactions : state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACATION':
            return{
                ...state,
                transactions : [action.payload,...state.transactions]
            }
        default:
            return state;


    }
}