import { MainLayout } from "../components/MainLayout";
import { Page } from "../components/PageLayout";
import { Contact } from "../components/Contact";

export default function Sales() {
    return (
        <>
            <MainLayout>
                <Page title="Скидки">
                    <p>
                        В нашем интернет-магазине действует сезонная распродажа. Ликвидация сезонной обуви по закупочной цене. Актуальная информация по ценам у наших менеджеров. Скидки на товар до <b>70%</b>.
                    </p>
                    <p>
                        Получите персональную скидку у менеджера прямо сейчас!
                    </p>
                    <Contact />
                </Page>
            </MainLayout>
        </>
    )
}
