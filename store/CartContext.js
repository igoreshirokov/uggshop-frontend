import React, { useReducer } from 'react'

const CartContext = React.createContext()

const cartItem = function (item) {
    this.item = item
    this.count = 1
    this.total = function () {
        return this.item.price * this.count
    }
}

const ADDITEMTOCART = (state, action) => {
    let items = state.items

    let hasItem = false
    items.forEach(item => {
        if (item.item.id === action.payload.id) {
            item.count++
            hasItem = true
        }
    })
    if (hasItem === false) {
        items.push(new cartItem(action.payload))
    }
    return items
}
const REMOVEITEMFROMCART = (state, action) => {
    let items = state.items
    items = items.filter((item) => {
        return item.item.id !== action.payload
    })
    return items
}

const CLEANCART = function (state, action) {
    let items = state.items
    items = []
    return items
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return { ...state, items: ADDITEMTOCART(state, action) }
        case 'REMOVE':
            return { ...state, items: REMOVEITEMFROMCART(state, action) }
        case 'CLEAN':
            return { ...state, items: CLEANCART(state, action) }
        default:
            return { state }
    }
}

const initialState = {
    items: [],
    count: function () {
        let count = 0
        if (this.items) {
            this.items.map(item => {
                count = count + item.count
                return item
            })
        }
        return count
    },
    totalPrice: function () {
        let price = 0
        if (this.items) {
            this.items.map(item => {
                price = price + item.total()
                return item
            })
        }
        return price
    }
}

const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const add = (data) => dispatch({ type: 'ADD', payload: data })
    const remove = (data) => dispatch({ type: 'REMOVE', payload: data })
    const clean = (data) => dispatch({ type: 'CLEAN', payload: data })

    return (
        <CartContext.Provider value={{ state, add, remove, clean }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartContextProvider }









// import React, {useContext, useReducer} from 'react'
// const reducer = (state,action) => {
//     switch (action.type) {
//         case 'ADD':
//             return CartAddItem(state, action.payload)
//         case 'REMOVE':
//             return { ...state, items: action.payload }
//         default:
//             return state;
//     }

// }

// const initState = {
//     items: [
//         {
//             item: {
//                 id: 1,
//                 title: "Title cart item",
//                 price: 3000
//             },
//             count: 1,
//             totalPrice: function () {
//                 return this.item.price * this.count
//             }
//         }
//     ],
// }
// const CartContext = React.createContext();

// const CartContextProvider = ({children}) => {
//     const [state, dispatch] = useReducer(reducer);
//     const addToCart = (data) => dispatch({ type: 'ADD', payload: data })
//     const removeFromCart = (data) => dispatch({ type: 'REMOVE', payload: data })

//     return (
//         <CartContext.Provider value={
//             initState,
//             addToCart,
//             removeFromCart
//         }>
//             {children}
//         </CartContext.Provider>
//     )
// }


// export CartContext

// export default CartContextProvider



// // const addProductToCart = (product, state) => {
// //     const updatedCart = [...state.cart];
// //     const updatedItemIndex = updatedCart.findIndex(
// //       item => item.id === product.id
// //     );

// //     if (updatedItemIndex < 0) {
// //       updatedCart.push({ ...product, quantity: 1 });
// //     } else {
// //       const updatedItem = {
// //         ...updatedCart[updatedItemIndex]
// //       };
// //       updatedItem.quantity++;
// //       updatedCart[updatedItemIndex] = updatedItem;
// //     }
// //     return { ...state, cart: updatedCart };
// //   };

// //   const removeProductFromCart = (productId, state) => {
// //     console.log("Removing product with id: " + productId);
// //     const updatedCart = [...state.cart];
// //     const updatedItemIndex = updatedCart.findIndex(item => item.id === productId);
