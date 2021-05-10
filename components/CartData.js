import Link from 'next/link'
import { useContext, useEffect } from 'react'
import { CartContext } from '../store/CartContext'
import styles from '../styles/Cart.module.sass'

export default function CartData() {
    const cart = useContext(CartContext)
    const cartCount = cart.state.count()
    const cartTotalPrice = cart.state.totalPrice()
    const items = cart.state.items
    const remove = cart.remove
    const clean = cart.clean

    if (cartCount === 0) {
        return (
            <>
                Корзина пуста
            </>
        )
    }

    return (
        <>
            <table className={styles.carttable}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Наименование</th>
                        <th>Цена</th>
                        <th>Кол-во</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((el, index) => {
                        return (
                            <>
                                <tr key={el.item.title + index}>
                                    <td>{index + 1}</td>
                                    <td>{el.item.title}</td>
                                    <td>{el.item.price} руб.</td>
                                    <td>{el.count} шт.</td>
                                    <td>
                                        <button onClick={() => remove(el.item.id)}>Удалить</button>
                                    </td>
                                </tr>
                            </>
                        )
                    })}

                    <tr>
                        <td colSpan="2">
                            <b>Итог: </b>{cartTotalPrice} руб.
                        </td>
                        {cart.state.items.length > 0 && <button onClick={clean}>Очистить корзину</button>}
                    </tr>
                </tbody>
            </table>
        </>
    )
}
