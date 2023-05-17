import Image from 'next/image'
import styles from './page.module.css'

export default function DailyPlanner() {
  return (
    <main className={styles.mainContainer}>
        <nav className={styles.navigation}>
            <Image src='/image/icon_calendar.png' width={100} height={100}/>
            <ul className={styles.navList}>
                <li>Home</li>
                <li><a href='/daily-planner/login'>Login</a></li>
            </ul>
        </nav>
        <section className={styles.heroBanner}>
            {/* <Image src='/image/photo1.jpg' width={100} height={500}/> */}
            <header className={styles.header}>Hi, I am your Daily Planner!</header>
            <p className={styles.p}>Let's get you started!</p>
        </section>
    </main>
  )
}
