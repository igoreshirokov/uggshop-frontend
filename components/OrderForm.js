import React, { useState, useContext } from "react";
import { CartContext } from '../store/CartContext'
import Link from 'next/link'
import styles from '../styles/OrderForm.module.sass'
import { Loading } from '../components/Loading'

export default function App() {
    const cart = useContext(CartContext)
    const [name, setName] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [acceptedTerms, setAcceptedTerms] = useState(false)
    const [formView, setFormView] = useState(true)
    const [details, setDetails] = useState({})
    const [loading, setLoading] = useState(false)


    const orderAddedEvent = (orderId) => {

        setTimeout(() => {

            setDetails({
                name: name,
                phone: phone,
                orderId: orderId
            })
            setLoading(false)
            cart.clean()

        }, 1000)
    }

    const sendingData = async () => {
        setFormView(!formView)
        setLoading(true)
        const url = 'http://shoplaraproject.test/api/v1/order/add';
        const data = {
            name: name,
            phone: phone,
            order: JSON.stringify(cart.state)
        }
        const response = await fetch(url, {
            method: 'POST', // или 'PUT'
            body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();

        orderAddedEvent(JSON.stringify(json));


    }

    const handleSubmit = (event) => {
        event.preventDefault();
        sendingData()
    }



    if (!formView) {

        if (loading) {
            return (
                <>
                    <Loading color={'#734C2F'} type={'spin'} />
                </>
            )
        }


        return (
            <>
                <h3>Детали заказа</h3>
                <label>Имя: </label> {details.name} <br />
                <label>Телефон: </label> {details.phone} <br />
                {/* <label>Сумма к оплате: </label> {details.totalPrice} руб. <br /> */}
                <label>Номер заказа: {details.orderId}</label><br />
                <Link href="/"><a><button className="button">На главную</button></a></Link>
            </>
        )
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h2>Оформление заказа</h2>

            <label>
                Имя:
                <input
                    name="name"
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required />
            </label>

            <label>
                Телефон:
                <input
                    name="phone"
                    type="text"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    required />
            </label>


            <label>
                <div className="checkboxinput">
                    <input
                        name="acceptedTerms"
                        type="checkbox"
                        onChange={e => setAcceptedTerms(e.target.value)}
                        required />
                Вы соглашаетесь на хранение и обработку персональных данных?
                </div>
            </label>

            <button className="button">Оставить заявку</button>
        </form>
    );
}



// const addOrder = () => {

//     console.log(order)
// }

// const sendingData = () => {
//     const orderBody = {
//         name: name,
//         phone: phone,
//         body: JSON.stringify(cart.state)
//     }
//     setDetails({
//         name: name,
//         phone: phone,
//         totalPrice: cart.state.totalPrice()
//     })
//     addOrder(orderBody)
//     setFormView(!formView)
//     setTimeout(() => cart.clean(), 500)
// }
