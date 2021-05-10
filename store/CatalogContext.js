import React, { useReducer } from 'react'

export const CatalogContext = React.createContext();

export const API_URL = 'http://shoplaraproject.test/api/v1/'
export const PUBLIC_URL = 'http://shoplaraproject.test'
const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE':
            return { ...state, categories: action.payload }
        default:
            return state;
    }
}

// Нужно загружать список категорий только при переходе на страницу каталога
export const CatalogContextProvider = ({ children }) => {

    const update = (data) => dispatch({ type: 'UPDATE', payload: data }) // Принимает массив каталога

    const [state, dispatch] = useReducer(reducer, {
        categories: false,
        update
    })


    return (
        <CatalogContext.Provider value={
            {
                categories: state.categories,
                update
            }
        }>
            {children}

        </CatalogContext.Provider >
    )
}
