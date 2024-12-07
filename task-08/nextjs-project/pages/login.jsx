import styles from '../styles/Login.module.css';
import Link from "next/link";

export default function LoginPage() {
    return (
        <div className={styles.container}>
            <div className={styles.loginBox}>
                <header className={styles.header}>
                    <div className={styles.logo}>OASIS</div>
                </header>
                <p className={styles.subtitle}>Log in to access your account</p>
                <form className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email" className={styles.label}>
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            className={styles.input}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="password" className={styles.label}>
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            className={styles.input}
                            placeholder="Enter your phone number"
                            required
                        />
                    </div>
                    <button type="submit" className={styles.loginButton}>
                        Log In
                    </button>
                </form>
                <div className={styles.footer}>
                    <p className={styles.signupPrompt}>
                        Don't have an account?{' '}
                        <Link href="/signup" className={styles.signupLink}>
                            Sign up here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
