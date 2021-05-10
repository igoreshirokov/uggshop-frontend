import styles from "../styles/Page.module.css";
import {useRouter} from "next/router";
import CategoriesNav from "../components/CategoriesNav";

export function CatalogPage({children, title = "no-title", categoriesnav = ''}) {
    const router = useRouter();

    return (
        <>
            <section className={styles.page}>
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
