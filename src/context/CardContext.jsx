import { createContext, useContext, useReducer } from "react"

import { sumProducts } from "../utils/helper";

const CardContext = createContext()

const initialState = {
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
    checkout: false,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingItem = state.selectedItems.find((item) => item.id === action.payload.id)
            if (!existingItem) {
                state.selectedItems.push({ ...action.payload, quantity: 1 })
                return {
                    ...state,
                    ...sumProducts(state.selectedItems),
                    checkout: false,
                }
            }

        case 'CHECKOUT':
            return {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkout: true,
            }
        default:
            throw new Error("invalid action")
    }
}

function CardProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <CardContext.Provider value={{ state, dispatch }}>
            {children}
        </CardContext.Provider>
    )
}

const useCard = () => {
    const { state, dispatch } = useContext(CardContext)

    return [state, dispatch]
}

export { useCard }

export default CardProvider