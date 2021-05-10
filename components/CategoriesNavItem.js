import { useState } from 'react'
import styles from '../styles/CategoriesNav.module.sass'
import getRandom from '../functions/getRandom'
import Link from 'next/link'

export default function CategoriesNavItem({item}) {
    const [isOpen, setOpen] = useState(false)
    // const [subcategories, setSubcategories] = useState(false)


    const el = item.el

    let subcategories = false


    if (el.subcategory) {
        subcategories = (

            el.subcategory.map(sub => {
                return (
                    <li key={getRandom()}>
                        <Link href={`/catalog/${sub.slug}`}>
                            <a>{sub.name}</a>
                        </Link>
                    </li>
                )
            })

        )

        return (
            <>
                <a onClick={accordionHandler}>{el.category.name}</a>
                <ul className={isOpen ? styles.display : styles.nodisplay}>{subcategories}</ul>
            </>
        )
    }


    function accordionHandler(e) {
        setOpen(!isOpen)
    }

    return (
        <>
            <Link href={`/catalog/${el.category.slug}`}>
                <a>{el.category.name}</a>
            </Link>
            {/* {el.subcategory && <ul>{subcategories}</ul>} */}
        </>
    )

    // if (isOpen) {
    //     return (

    //     )
    // } else {

    // }


}
