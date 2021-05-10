import { MainLayout } from "../components/MainLayout";
import { Page } from "../components/PageLayout";

export default function Payment() {
    return (
        <>
            <MainLayout>
                <Page title="Оплата">
                    <p>
                        Оплата производиться наличными курьеру при получении заказа
                    </p>
                    <p>
                        Перевод на банковскую карту*
                    </p>
                    <p>
                        *При заказе не из Москвы или Московской области предоплата 100% суммы заказа является обязательной
                    </p>
                    <p>
                        *Реквизиты для совершения платежа вышлет менеджер по запросу
                    </p>
                </Page>
            </MainLayout>
        </>
    )
}
