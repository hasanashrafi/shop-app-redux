import { createContext, useContext, useEffect, useReducer } from "react";
import { sumProducts } from "../utils/helper";

const CardContext = createContext();

const initialState = {
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
    checkout: false,
};

const reducer = (state, action) => {
    let newState;
    switch (action.type) {
        case "ADD_ITEM":
            const existingItem = state.selectedItems.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.selectedItems.push({ ...action.payload, quantity: 1 });
            }
            newState = {
                ...state,
                ...sumProducts(state.selectedItems),
                checkout: false,
            };
            break;
        case "REMOVE_ITEM":
            newState = {
                ...state,
                selectedItems: state.selectedItems.filter(item => item.id !== action.payload.id),
                ...sumProducts(state.selectedItems.filter(item => item.id !== action.payload.id)),
            };
            break;
        case "INCREASE":
            const increaseIndex = state.selectedItems.findIndex(item => item.id === action.payload.id);
            if (increaseIndex !== -1) {
                state.selectedItems[increaseIndex].quantity++;
            }
            newState = {
                ...state,
                ...sumProducts(state.selectedItems),
            };
            break;
        case "DECREASE":
            const decreaseIndex = state.selectedItems.findIndex(item => item.id === action.payload.id);
            if (decreaseIndex !== -1) {
                if (state.selectedItems[decreaseIndex].quantity > 1) {
                    state.selectedItems[decreaseIndex].quantity--;
                } else {
                    return reducer(state, { type: "REMOVE_ITEM", payload: action.payload });
                }
            }
            newState = {
                ...state,
                ...sumProducts(state.selectedItems),
            };
            break;
        case "CHECK_OUT":
            newState = {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkout: true,
            };
            break;
        default:
            throw new Error("invalid action");
    }

    // Save to localStorage after every action that modifies the state
    localStorage.setItem("Products", JSON.stringify(newState.selectedItems));
    return newState;
};

function CardProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    // Load selected items from local storage on mount
    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem("Products"));
        if (Array.isArray(storedItems)) {
            storedItems.forEach(item => {
                dispatch({ type: "ADD_ITEM", payload: item });
            });
        }
    }, []);

    return (
        <CardContext.Provider value={{ state, dispatch }}>
            {children}
        </CardContext.Provider>
    );
}

const useCard = () => {
    const { state, dispatch } = useContext(CardContext);
    return [state, dispatch];
};

export { useCard };
export default CardProvider;