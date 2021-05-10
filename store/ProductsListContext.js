import React, { useReducer } from 'react'

export const ProductsListContext = React.createContext();


const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE':
            return { ...state, products: action.payload }
        default:
            return state;
    }
}

// Нужно загружать список категорий только при переходе на страницу каталога
export const ProductsListContextProvider = ({ children }) => {

    const update = (data) => dispatch({ type: 'UPDATE', payload: data }) // Принимает массив каталога

    const [state, dispatch] = useReducer(reducer, {
        products: false
    })


    return (
        <ProductsListContext.Provider value={
            {
                products: state.products,
                update
            }
        }>
            {children}

        </ProductsListContext.Provider >
    )
}
