import {Header} from "../header/Header.tsx";
import {Footer} from "../footer/Footer.tsx";
import styles from "./page.module.css"


const Page = () => {
    return (
        <div className={styles.container_for_page}>
            <div>
                <Header />
            </div>
            <div className={styles.container_for_content}>
                    <h1>Добро пожаловать на сайт!</h1>
                <div>
                    <p>Это стартовая страница нашего веб-приложения.</p>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Page;