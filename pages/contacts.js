import { MainLayout } from "../components/MainLayout";
import { Page } from "../components/PageLayout";
import { Contact } from "../components/Contact";

export default function Contacts() {
    return (
        <>
            <MainLayout>
                <Page title="Контакты">
                    <Contact />
                </Page>
            </MainLayout>
        </>
    )
}
