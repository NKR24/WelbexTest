import styles from "./contacts.module.scss"

export default function Contacts() {
  return (
    <>
      <div class={styles.container}>
        <div class={styles.emptyTop}></div>
        <div class={styles.footerGrid}>
          <div class={styles.itemTitle}>
            О компании
          </div>
          <div class={styles.itemTitle}>
            Меню
          </div>
          <div class={styles.itemTitle}>
            Контакты
          </div>
          <div class={styles.itemOrdinary}>
            <div class={styles.buttons}>Партнёрская программа</div>
            <div class={styles.buttons}>Вакансии</div>
          </div>
          <div class={styles.itemOrdinaryR}>
            <button class={styles.buttons}>Расчёт стоимости</button>
            <button class={styles.buttons}>Кейсы</button>
            <button class={styles.buttons}>Услуги</button>
            <button class={styles.buttons}>Благодарственные письма</button>
            <button class={styles.buttons}>Виджеты</button>
            <button class={styles.buttons}>Сертификаты</button>
            <button class={styles.buttons}>Интеграции</button>
            <button class={styles.buttons}>Блог на Youtube</button>
            <button class={styles.buttons}>Наши клиенты</button>
            <button class={styles.buttons}>Вопрос / Ответ</button>
          </div>
        </div>
      </div>
    </>
  )
}