import { MainLayout } from "../../components/MainLayout";
import CategoriesNav from "../../components/CategoriesNav";
import styles from "../../styles/Page.module.css";
import ProductList from "../../components/ProductList"
import {useRouter} from "next/router"
import { API_URL } from '../../store/CatalogContext'



export default function Products({props}) {


    return (
        <MainLayout title='Каталог'>
            <section className={styles.page}>
                <div className={styles.back}>
                    {/* <CatalogContext.Provider value={ {categories} }> */}
                    <CategoriesNav />
                    {/* </CatalogContext.Provider> */}

                </div>
                <div className={styles.contentarea}>
                    <h1 className={styles.pageheadline}>
                        Каталог
                    </h1>
                    <div className={styles.pagecontent}>
                        <ProductList products={props} />
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

// This gets called on every request
Products.getInitialProps = async (ctx) => {

    // Fetch data from external API
    const res = await fetch(API_URL + ctx.query.categoryslug)
    const productsFetch = await res.json()

    // Pass data to the page via props
    return { props: productsFetch  }
  }


    // try {
    //     fetch(API_URL + router.query.categoryslug)
    //         .then((res) => {
    //             return res.json()
    //         })
    //         .then((res) => {
    //             update(res)
    //         })

    // } catch (e) {
    //     console.log(e)
    //     products = false
    // }
