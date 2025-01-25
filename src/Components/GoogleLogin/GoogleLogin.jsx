import styles from "./google.module.css"
const GoogleLogin = () => {
return(
    <>
    <div className={styles.loginContainer}>
        <h2 className={styles.formTitle}>Login With</h2>
        <div className={styles.socialLogin}>
            <button className={styles.socialButton}>
                <img src="" alt="google" className={styles.SocialIcon}/>Google
            </button>
            <button className={styles.socialButton}>
                <img src="" alt="apple" className={styles.SocialIcon}/>apple
            </button>
        </div>
        <p className={styles.seprator}><span>Or</span></p>
    </div>
    </>
)
}
export default GoogleLogin;