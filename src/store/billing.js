import { types, action } from 'lib/redux'

// action types
const Type = types('ADD_BILL', 'PAY_BILL', 'DEL_BILL')

// actions
export const addBill = action(Type.ADD_BILL)
export const payBill = action(Type.PAY_BILL)
export const removeBill = action(Type.DEL_BILL)

// reducer function
export default function reducer(state, action) {
    switch(action.type) {
        case Type.ADD_BILL: {
            state.data[action.payload.id] = action.payload
            state.total = state.total + action.payload.value
            return {...state}
        }
        case Type.PAY_BILL: {
            let bill = state.data[action.payload]
            state.total = (bill.paid ? state.total + bill.value : state.total - bill.value)
            state.data[action.payload].paid = !bill.paid
            return {...state}
        }
        case Type.DEL_BILL: {
            delete state.data[action.payload]
            return {...state}
        }
    }
    return state
}
