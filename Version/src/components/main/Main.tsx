import styles from "./main.module.scss"

export default function Main() {
    return (
    <>
      <div class={styles.container}>
        <div class={styles.leftPart}>
          <div class={styles.l1text}>Зарабатывайте больше</div>
          <div class={styles.l2text}>с WELBEX</div>
          <div class={styles.l3text}>Развиваем и контролируем продажи за вас</div>
        </div>
        <div class={styles.rightPart}>
          <div class={styles.r1text}>
            <div class={styles.r1PartColor}>
              <span class={styles.r1PartWhite}>Вместе с </span>бесплатной консультацией<span class={styles.r1PartWhite}> мы дарим:</span>
            </div>
          </div>
          <div class={styles.r2text}>
            <div class={styles.item1}>
              <div class={styles.r2textTitle}>Виджеты</div>
              <div class={styles.r2textOrdianry}>30 готовых решений</div>
            </div>
            <div class={styles.item2}>
              <div class={styles.r2textTitle}>Dashboard</div>
              <div class={styles.r2textOrdianry}>c показателями вашего бизнеса</div>
            </div>
            <div class={styles.item3}>
              <div class={styles.r2textTitle}>Skype Аудит</div>
              <div class={styles.r2textOrdianry}>отдела продаж и CRM системы</div>
            </div>
            <div class={styles.item4}>
              {/* eslint-disable-next-line no-irregular-whitespace */}
              <div class={styles.r2textTitle}>35 дней</div>
              {/* eslint-disable-next-line no-irregular-whitespace */}
              <div class={styles.r2textOrdianry}>использования CRM</div>
            </div>
          </div>
          <button class={styles.blueButton}>Получить консультацию</button>
        </div>
      </div>
    </>
  )
}