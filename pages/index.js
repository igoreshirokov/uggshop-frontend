import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { MainLayout } from '../components/MainLayout'

export default function Home() {

    return (

        <MainLayout>
            <section className={styles.home}>
                <div className={styles.sitetitle}>
                    <h1>UGG</h1>
                    <p>Оригинальные угги от производителя</p>
                    <Link href="/catalog"><a className="button">Каталог</a></Link>
                </div>
                <div className={styles.homeheadline}>
                    <h2>Сезонная распродажа зимней обуви</h2>
                    <p>В этом году мы устроили безпрецендентную распродажу обуви, скидки </p>
                    <div className={styles.bigsale}>
                        <span>до</span>
                        <span className={styles.verybig}>70%</span>
                    </div>
                </div>
                <div className={styles.homeproducts}>
                    {/* Ссылка на категорию каталога */}
                    <Link href="/catalog">
                        <a className={styles.homecategory}>
                            <img src="/images/1-sumk.jpg" />
                            <span>Аксессуары</span>
                        </a>
                    </Link>
                    <Link href="/catalog">
                        <a className={styles.homecategory}>
                            <img src="/images/3-ugg_navajo-6.jpg" />
                            <span>Ботинки</span>
                        </a>
                    </Link>
                    <Link href="/catalog">
                        <a className={styles.homecategory}>
                            <img src="/images/6-classic_mini_gita_dusk-5.jpg" />
                            <span>Угги</span>
                        </a>
                    </Link>
                    <Link href="/catalog">
                        <a className={styles.homecategory}>
                            <img src="/images/16-ansley_grey_violet-4.jpg" />
                            <span>Мокасины</span>
                        </a>
                    </Link>
                </div>
            </section>
        </MainLayout>
    )
}
