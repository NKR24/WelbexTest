import {Title} from "solid-start";
import styles from "./index/main.module.scss"
import Navbar from "~/components/navbar";

export default function Home() {
    return (
        <>
            <Title>WELBEX</Title>
            <Navbar/>
            <Main/>
        </>
    )
}

function Main() {
    return (
        <>
            <div class={styles.containerMain}>
                <h1>Hi</h1>
            </div>
        </>
    )
}