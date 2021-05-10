import { MainLayout } from '../components/MainLayout'
import { Page } from '../components/PageLayout'
import styles from '../styles/Cart.module.sass'
import CartData from '../components/CartData'
import OrderForm from '../components/OrderForm'
import { useState, useContext } from 'react'
import { CartContext } from '../store/CartContext'

export default function Order() {
    const cart = useContext(CartContext)
    const [formView, setFormView] = useState(false)
    const orderButtonHundler = () => {
        setFormView(true)
    }
    const orderButton = (
        cart.state.items.length > 0 ? <button className="button" onClick={orderButtonHundler}>
            Оформить заказ
    </button> : null
    )

    return (

        <>
            <MainLayout>
                <Page title="Корзина">
                    <div className={styles.wrapper}>
                        <CartData />
                        {formView ? <OrderForm /> : orderButton}
                    </div>
                </Page>
            </MainLayout>
        </>
    )
}
