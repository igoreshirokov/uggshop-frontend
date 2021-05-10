import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useContext, useState } from 'react';
import { CatalogContext } from '../store/CatalogContext'
import { Loading } from './Loading'
import { CartContext } from '../store/CartContext';
import styles from '../styles/CategoriesNav.module.sass'
import getRandom from '../functions/getRandom'
import CatalogList from './CatalogList'
import CategoriesNavItem from './CategoriesNavItem'
// CatalogList = require('../components/CatalogList.json');
// import { CatalogContext } from '../components/CatalogContext';



function CategoriesNav() {


    const novinki = CatalogList[28];
    const rasprodazha = CatalogList[29];
    // 31
    const accesuary = CatalogList[30];
    const accesuaries = CatalogList.filter((category) => {
        return category.id < 5;
    });



    const women = CatalogList[4];
    // 5
    const ugg = CatalogList[5];
    const uggs = CatalogList.filter((category) => {
        return category.id > 6 && category.id < 22;
    });


    const botinki = CatalogList[21];
    // 23

    const mokasin = CatalogList[22];
    const mokasines = CatalogList.filter((category) => {
        return category.id > 23 && category.id < 26;
    });
    // Остальное без вложенности
    const other = CatalogList.filter((category) => {
        return category.id > 25 && category.id < 28;
    });

    const menugg = CatalogList[25]
    const childugg  = CatalogList[26]


    const categories = {
        novinki: {
            category: novinki,
            subcategory: false,
            active: false
        },
        rasprodazha: {
            category: rasprodazha,
            subcategory: false,
            active: false
        },
        ugg: {
            category: ugg,
            subcategory: uggs,
            active: false
        },
        women: {
            category: women,
            subcategory: false,
            active: false
        },
        accesuary: {
            category: accesuary,
            subcategory: accesuaries,
            active: false
        },
        botinki: {
            category: botinki,
            subcategory: false,
            active: false
        },
        mokasin: {
            category: mokasin,
            subcategory: mokasines,
            active: false
        },
        menugg: {
            category: menugg,
            subcategory: false,
            active: false
        },
        childugg: {
            category: childugg,
            subcategory: false,
            active: false
        },
    }

    const elements = Object.values(categories)

    const menu = elements.map(el => {
        return (
            <li key={getRandom()}>
                <CategoriesNavItem key={getRandom()} item={{el}} />
            </li>
        )
    })
    return (
        <div className={styles.categories}>
            <ul>
                {menu}
            </ul>
        </div>
    )

}

export default CategoriesNav
