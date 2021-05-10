import Link from 'next/link'
import { useContext, useEffect } from 'react'
import { CartContext } from '../store/CartContext'

export default function CartIcon() {
    const cart = useContext(CartContext)
    const cartCount = cart.state.count()
    const items = cart.state.items
    const mouseEnterHandler = () => {
        // Вызывает всплывающее окно с содержимым корзины
        console.log('mouseEnter event')
        console.log(items)
    }
    return (
        <>
            <Link href="/order"><a onMouseEnter={mouseEnterHandler} className="cart">
                <i className="cart-icon">
                    <i className="cart-count">{cartCount}</i>
                </i>
            </a></Link>
        </>
    )
}
