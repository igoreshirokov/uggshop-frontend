import Link from 'next/link'
import Cart from './CartData'
import { useRouter } from 'next/router'
import CartIcon from './CartIcon';

// Должен принимать пропс с текущей страницей. В зависимости от значения подсвечивать в навигации текущую
export default function Nav() {

    const router = useRouter();

    const menuBurgerHundler = () => {
        document.querySelector('.menu-items').classList.toggle('isOpen');
        document.querySelector('.menu-burger').classList.toggle('isOpenBurger');
    }

    const current = router.pathname;

    return (
        <nav>
            <div className="menu-burger"
                 onClick={menuBurgerHundler}
                >
                <div></div>
                <div></div>
                <div></div>
            </div>
            {router.pathname !== '/' && <div className="logo">
                    <div className="logo-main">UGG</div>
                    <div className="logo-headline">Оригинальные угги <br />от производителя</div>
                </div>}
            <div className="menu-items">
                <Link href="/"><a className={current == '/' ? 'current' : undefined}>О нас</a></Link>
                <Link href="/catalog"><a className={current == '/catalog' ? 'current' : undefined}>Каталог</a></Link>
                <Link href="/sales"><a className={current == '/sales' ? 'current' : undefined}>Скидки</a></Link>
                <Link href="/delivery"><a className={current == '/delivery' ? 'current' : undefined}>Доставка</a></Link>
                <Link href="/payment"><a className={current == '/payment' ? 'current' : undefined}>Оплата</a></Link>
                <Link href="/contacts"><a className={current == '/contacts' ? 'current' : undefined}>Контакты</a></Link>
            </div>
            <CartIcon />
        </nav>
    )
}
