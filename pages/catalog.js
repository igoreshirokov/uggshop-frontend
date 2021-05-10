import { MainLayout } from "../components/MainLayout";
// import { Loading } from "../components/Loading";
// import { CatalogPage } from "../components/CatalogPageLayout";
// import Link from 'next/link';
// import { useEffect } from 'react';
// import { useState } from 'react';
import CategoriesNav from "../components/CategoriesNav";
import styles from "../styles/Page.module.css";


export default function catalog() {





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

                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
