import '../styles/globals.css'
import '../styles/animations.css'
import { CatalogContextProvider } from '../store/CatalogContext.js'
import { ProductsListContextProvider } from '../store/ProductsListContext'
import { CartContextProvider } from '../store/CartContext'


function MyApp({ Component, pageProps, router }) {

    return (
        <CatalogContextProvider>
            <CartContextProvider>
                <ProductsListContextProvider>

                            <Component {...pageProps} />

                </ProductsListContextProvider>
            </CartContextProvider>
        </CatalogContextProvider>
    )
}

export default MyApp
