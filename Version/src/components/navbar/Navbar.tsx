import styles from "./navbar.module.scss"
import { createMediaQuery } from "@solid-primitives/media"
import { createMemo } from "solid-js"
import welLogo from "../../assets/img/wel-logo.svg"
import welName from "../../assets/img/logo-name.svg"
import {clsx} from "clsx";
import {Routes} from "solid-start";

export default function Navbar(){
    function Logo(){
        return(
            <>
                <div class={styles.logoContainer}>
                    <div class={styles.logo}>
                        <img src={welLogo} alt="Wel Logo" class={styles.image}/>
                    </div>
                    <div class={styles.logoName}>
                        <img src={welName} alt="Wel Name" class={styles.nameLogo}/>
                    </div>
                </div>
            </>
        )
    }

    function Routes(){
        return(
            <>
                <div class={styles.routes}>
                    <p class={clsx(styles.item, styles.First)}>Услуги</p>
                    <p class={clsx(styles.item, styles.Second)}>Виджеты</p>
                    <p class={clsx(styles.item, styles.Third)}>Интеграции</p>
                    <p class={clsx(styles.item, styles.Fourth)}>Кейсы</p>
                    <p class={clsx(styles.item, styles.Fifth)}>Сертификаты</p>
                </div>
            </>
        )
    }


    return(
        <>
            <div class={styles.container}>
                <nav class={styles.nav}>
                    <Logo/>
                    <Routes/>
                </nav>
            </div>
        </>
    )
}
