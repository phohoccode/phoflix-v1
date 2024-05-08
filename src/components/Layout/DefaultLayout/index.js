import clsx from "clsx";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer"
import styles from "./DefaultLayout.module.scss"

function DefaultLayout({children}) {
    return ( 
        <>
            <Header/>
            <div className={clsx(styles.Container)}>
                <SideBar/>
                <div className={clsx(styles.Container__content)}>
                    {children}
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default DefaultLayout;