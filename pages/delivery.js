import { MainLayout } from "../components/MainLayout";
import { Page } from "../components/PageLayout";

export default function Delivery() {
    return (
        <>
            <MainLayout>
                <Page title="Доставка">
                    <p>
                        Доставка по Москве и Московской области осуществляется нашей курьерской службой
                    </p>
                    <p>
                        Другие субъекты РФ и международные отправления отправляем службами:
                    </p>
                    <p>
                        <b>Почта России*</b><br />
                        <b>ЕМС*</b><br />
                        <b>СДЭК*</b>
                    </p>
                    <p>
                        *Стоимость доставки зависит от веса, удаления адресата от Москвы, типа отправления (до пункта выдачи/до двери).
                    </p>
                </Page>
            </MainLayout>
        </>
    )
}
