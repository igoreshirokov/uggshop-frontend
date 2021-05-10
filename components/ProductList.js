import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { ProductsListContext } from '../store/ProductsListContext'
import Loading from 'react-loading';
import styles from "../styles/ProductList.module.css"
import { CartContext } from '../store/CartContext'
import getRandom from "../functions/getRandom"
import Image from 'next/image'

export default function ProductList(props) {

    const { products, update } = useContext(ProductsListContext);
    const { add } = useContext(CartContext)

    useEffect(() => {
        update(props.products)
    }, [props])

    if (!products) {
        return (
            <>
                <Loading color={'#734C2F'} type={'spin'} />
            </>
        )
    }

    return (
        <>
            <div className={styles.productlist}>
                {products.map((product) => {

                    return (

                        <div key={getRandom()} className={styles.productcard}>
                            <Link href={`/product/${product.slug}`}>
                                <a>
                                    <h3>
                                        <span>
                                            {product.title}
                                        </span>
                                    </h3>

                                    <Image src={`/images${JSON.parse(product.images)[0]}`} width={`150px`} height={`150px`} />
                                </a>
                            </Link>
                            <div className={styles.productprice}>{product.price}</div>
                            <button onClick={() => add(product)} className={'button'}><i><img src="/addtocart.svg" width="30" height="30" /></i>Купить</button>

                        </div>
                    )
                })}
            </div>
        </>
    )
}
