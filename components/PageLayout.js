import styles from "../styles/Page.module.css";
import {useRouter} from "next/router";
import CategoriesNav from "../components/CategoriesNav";

export function Page({children, title = "no-title", categoriesnav = ''}) {
    const router = useRouter();

    return (
        <>
            <section className={styles.page}>
                        <div onClick={router.back} className={styles.back}>
                            <a>&larr; назад</a>
                        </div>
                    <div className={styles.contentarea}>
                        <h1 className={styles.pageheadline}>
                            {title}
                        </h1>
                        <div className={styles.pagecontent}>

                            {children}

                        </div>
                    </div>
                </section>
        </>
    )
}
