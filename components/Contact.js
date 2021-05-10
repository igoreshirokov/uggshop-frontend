import styles from "../styles/Page.module.css";
export function Contact() {
    return (
        <>
            <div className={styles.phone}>
                <span>Телефон</span>
                <a href="tel:+79629996842">+7(962)999-68-42</a>
            </div>
            <p>Вы можете связаться с нами одним из способов:</p>
            <div className={styles.messengers}>
                <a href="#">
                    <img src="/whatsapp.svg" alt="whatsapp"></img>
                </a>
                <a href="#">
                    <img src="/vk.svg" alt="vk"></img>
                </a>
                <a href="#">
                    <img src="/telegram.svg" alt="telegram"></img>
                </a>
            </div>
        </>
    )
}
