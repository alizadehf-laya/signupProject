import styles from './LoginSignup.module.css'
import password_icon from './Assets/password.jfif'
import email_icon from './Assets/email.jfif'
import user_icon from './Assets/OIP.jfif'

const LoginSignup = () =>{
    return(
        <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.text}>sign up</div>
        <div className={styles.underline}></div>
      </div>
      <div className={styles.inputs}>
        <div className={styles.input}>
            <img src={user_icon} alt="" className={styles.img1}/>
            <input type="text" placeholder='Name'/>
        </div>
        <div className={styles.input}>
            <img src={email_icon} alt="" className={styles.img1}/>
            <input type="email" placeholder='Email Id'/>
        </div>
        <div className={styles.input}>
            <img src={password_icon} alt="" className={styles.img1}/>
            <input type="password"  placeholder='Password'/>
        </div>
      </div>
      <div className="forget-password">Lost Password?<spasn>Click Here!</spasn></div>
      <div className="submit-container">
        <div className="submit">Sign Up</div>
        <div className="submit">Log in</div>
      </div>
        </div>
    )
}
export default LoginSignup