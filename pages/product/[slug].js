import { MainLayout } from "../../components/MainLayout";
import { useRouter } from 'next/router';
import { useState, useContext, useEffect } from 'react';
import { API_URL, PUBLIC_URL } from "../../store/CatalogContext"
import styles from '../../styles/Product.module.sass'
import ProductGallery from '../../components/ProductGallery'
import { Page } from '../../components/PageLayout'
import { CartContext } from '../../store/CartContext'

export default function Product({ props }) {

    const [product, setProduct] = useState(props)
    const { add } = useContext(CartContext)

    return (
        <>
            <MainLayout>
                <Page title={product.title}>
                    <div className={styles.product}>
                        <ProductGallery images={product.images} />
                        <div className={styles.productdescription}>
                            <h3>{product.title}</h3>
                            <p>
                                {product.content}
                            </p>
                            <span className={styles.productprice} >{product.price}</span> руб.
                            <button onClick={() => add(product)} className={'button'}>Купить</button>
                        </div>
                    </div>
                </Page>

            </MainLayout>
        </>

    )
}

Product.getInitialProps = async (ctx) => {
    const res = await fetch ( API_URL + 'product/' + ctx.query.slug )
    const product = await res.json()
    return { props: {...product, images: JSON.parse(product.images)}}
}

