// @refresh reload
import Home from "~/routes/index"
import styles from "~/app.module.scss"
export default function App() {
  return (
    <>
      <div class={styles.main}>
        <Home/>
      </div>
    </>
  );
}