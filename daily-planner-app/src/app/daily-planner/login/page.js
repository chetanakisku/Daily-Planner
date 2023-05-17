import styles from './page.module.css'

export default function Login() {
    return (
      <main className={styles.main}>
            <section className={styles.formSection}>
                <h2 className={styles.heading}>Login to your account</h2>
                <form className={styles.loginForm}>
                <input type='email' placeholder='Email Address' />
                <input type='password' placeholder='Password' />
                <button className={styles.loginBtn}>Login</button>
                </form>
            </section>
      </main>
    )
  }